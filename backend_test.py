#!/usr/bin/env python3
"""
Backend API Testing Script for IITCG Website V2
Tests the NEW endpoints added in V2 upgrade
"""

import requests
import json
import sys
from datetime import datetime

# Configuration
BASE_URL = "https://digital-systems-lab-2.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

# Test credentials
ADMIN_CREDENTIALS = {
    "email": "admin@iitcg.com",
    "password": "admin123"
}

# Global variables to store test data
jwt_token = None
created_blog_id = None
created_case_study_id = None

def print_test_header(test_name):
    print(f"\n{'='*60}")
    print(f"Testing: {test_name}")
    print(f"{'='*60}")

def print_test_result(success, message):
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")

def make_request(method, endpoint, data=None, headers=None, expected_status=200):
    """Make HTTP request and return response"""
    url = f"{API_BASE}{endpoint}"
    
    try:
        if method.upper() == "GET":
            response = requests.get(url, headers=headers, timeout=30)
        elif method.upper() == "POST":
            response = requests.post(url, json=data, headers=headers, timeout=30)
        elif method.upper() == "DELETE":
            response = requests.delete(url, json=data, headers=headers, timeout=30)
        else:
            raise ValueError(f"Unsupported method: {method}")
        
        print(f"Request: {method} {url}")
        if data:
            print(f"Body: {json.dumps(data, indent=2)}")
        print(f"Response Status: {response.status_code}")
        print(f"Response: {response.text[:500]}...")
        
        return response
    except Exception as e:
        print(f"Request failed: {str(e)}")
        return None

def test_admin_login():
    """Test 1: POST /api/auth/login - Admin authentication"""
    global jwt_token
    
    print_test_header("POST /api/auth/login - Admin Authentication")
    
    # Test with correct credentials
    try:
        print("\n--- Testing with correct credentials ---")
        response = make_request("POST", "/auth/login", ADMIN_CREDENTIALS)
        
        if response and response.status_code == 200:
            data = response.json()
            if data.get("success") and data.get("token") and data.get("user"):
                jwt_token = data["token"]
                user = data["user"]
                print_test_result(True, f"Login successful. Token received. User: {user.get('email')}")
                print(f"JWT Token (first 50 chars): {jwt_token[:50]}...")
            else:
                print_test_result(False, f"Invalid response format: {data}")
                return False
        else:
            print_test_result(False, f"Login failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Login test failed: {str(e)}")
        return False
    
    # Test with wrong credentials
    try:
        print("\n--- Testing with wrong credentials ---")
        wrong_creds = {"email": "admin@iitcg.com", "password": "wrongpassword"}
        response = make_request("POST", "/auth/login", wrong_creds)
        
        if response and response.status_code == 401:
            print_test_result(True, "Correctly rejected wrong credentials with 401")
        else:
            print_test_result(False, f"Should return 401 for wrong credentials, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"Wrong credentials test failed: {str(e)}")
    
    # Test with missing fields
    try:
        print("\n--- Testing with missing fields ---")
        incomplete_data = {"email": "admin@iitcg.com"}
        response = make_request("POST", "/auth/login", incomplete_data)
        
        if response and response.status_code == 400:
            print_test_result(True, "Correctly rejected missing password with 400")
        else:
            print_test_result(False, f"Should return 400 for missing fields, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"Missing fields test failed: {str(e)}")
    
    return jwt_token is not None

def test_get_case_studies():
    """Test 2: GET /api/case-studies - Get all case studies"""
    print_test_header("GET /api/case-studies - Get Case Studies")
    
    try:
        response = make_request("GET", "/case-studies")
        
        if response and response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data:
                case_studies = data["data"]
                print_test_result(True, f"Retrieved {len(case_studies)} case studies")
                
                # Verify structure of first case study if available
                if case_studies:
                    first_study = case_studies[0]
                    required_fields = ["id", "title", "client", "industry", "challenge", "solution", "results", "technologies"]
                    missing_fields = [field for field in required_fields if field not in first_study]
                    
                    if not missing_fields:
                        print_test_result(True, "Case study structure is correct")
                        print(f"Sample case study: {first_study.get('title')} for {first_study.get('client')}")
                    else:
                        print_test_result(False, f"Missing fields in case study: {missing_fields}")
                        return False
                else:
                    print_test_result(True, "No case studies found (empty array)")
                
                return True
            else:
                print_test_result(False, f"Invalid response format: {data}")
                return False
        else:
            print_test_result(False, f"Request failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Get case studies test failed: {str(e)}")
        return False

def test_create_case_study():
    """Test 3: POST /api/case-studies (PROTECTED) - Create case study"""
    global created_case_study_id
    
    print_test_header("POST /api/case-studies - Create Case Study (Protected)")
    
    if not jwt_token:
        print_test_result(False, "No JWT token available from login test")
        return False
    
    # Test with valid token
    try:
        print("\n--- Testing with valid JWT token ---")
        headers = {"Authorization": f"Bearer {jwt_token}"}
        case_study_data = {
            "title": "Test Case Study",
            "client": "Test Client",
            "industry": "Technology",
            "challenge": "Test challenge description",
            "solution": "Test solution description",
            "results": "Test results description",
            "technologies": ["React", "Node.js", "MongoDB"]
        }
        
        response = make_request("POST", "/case-studies", case_study_data, headers)
        
        if response and response.status_code == 201:
            data = response.json()
            if data.get("success") and data.get("data", {}).get("id"):
                created_case_study_id = data["data"]["id"]
                print_test_result(True, f"Case study created successfully. ID: {created_case_study_id}")
            else:
                print_test_result(False, f"Invalid response format: {data}")
                return False
        else:
            print_test_result(False, f"Case study creation failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Create case study test failed: {str(e)}")
        return False
    
    # Test without token
    try:
        print("\n--- Testing without JWT token ---")
        response = make_request("POST", "/case-studies", case_study_data)
        
        if response and response.status_code == 401:
            print_test_result(True, "Correctly rejected request without token with 401")
        else:
            print_test_result(False, f"Should return 401 without token, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"No token test failed: {str(e)}")
    
    return created_case_study_id is not None

def test_create_blog():
    """Test 4: POST /api/blogs (PROTECTED) - Create blog"""
    global created_blog_id
    
    print_test_header("POST /api/blogs - Create Blog (Protected)")
    
    if not jwt_token:
        print_test_result(False, "No JWT token available from login test")
        return False
    
    # Test with valid token
    try:
        print("\n--- Testing with valid JWT token ---")
        headers = {"Authorization": f"Bearer {jwt_token}"}
        blog_data = {
            "title": "Test Blog Post",
            "excerpt": "This is a test blog post excerpt",
            "category": "Testing",
            "content": "This is the full content of the test blog post.",
            "author": "Test Author"
        }
        
        response = make_request("POST", "/blogs", blog_data, headers)
        
        if response and response.status_code == 201:
            data = response.json()
            if data.get("success") and data.get("data", {}).get("id"):
                created_blog_id = data["data"]["id"]
                print_test_result(True, f"Blog created successfully. ID: {created_blog_id}")
            else:
                print_test_result(False, f"Invalid response format: {data}")
                return False
        else:
            print_test_result(False, f"Blog creation failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Create blog test failed: {str(e)}")
        return False
    
    # Test without token
    try:
        print("\n--- Testing without JWT token ---")
        response = make_request("POST", "/blogs", blog_data)
        
        if response and response.status_code == 401:
            print_test_result(True, "Correctly rejected request without token with 401")
        else:
            print_test_result(False, f"Should return 401 without token, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"No token test failed: {str(e)}")
    
    return created_blog_id is not None

def test_delete_blog():
    """Test 5: DELETE /api/blogs (PROTECTED) - Delete blog"""
    print_test_header("DELETE /api/blogs - Delete Blog (Protected)")
    
    if not jwt_token:
        print_test_result(False, "No JWT token available from login test")
        return False
    
    if not created_blog_id:
        print_test_result(False, "No blog ID available from create blog test")
        return False
    
    # Test with valid token
    try:
        print("\n--- Testing with valid JWT token ---")
        headers = {"Authorization": f"Bearer {jwt_token}"}
        delete_data = {"id": created_blog_id}
        
        response = make_request("DELETE", "/blogs", delete_data, headers)
        
        if response and response.status_code == 200:
            data = response.json()
            if data.get("success") and "deleted" in data.get("message", "").lower():
                print_test_result(True, f"Blog deleted successfully: {data.get('message')}")
            else:
                print_test_result(False, f"Unexpected response: {data}")
                return False
        else:
            print_test_result(False, f"Blog deletion failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Delete blog test failed: {str(e)}")
        return False
    
    # Test without token
    try:
        print("\n--- Testing without JWT token ---")
        response = make_request("DELETE", "/blogs", delete_data)
        
        if response and response.status_code == 401:
            print_test_result(True, "Correctly rejected request without token with 401")
        else:
            print_test_result(False, f"Should return 401 without token, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"No token test failed: {str(e)}")
    
    return True

def test_delete_case_study():
    """Test 6: DELETE /api/case-studies (PROTECTED) - Delete case study"""
    print_test_header("DELETE /api/case-studies - Delete Case Study (Protected)")
    
    if not jwt_token:
        print_test_result(False, "No JWT token available from login test")
        return False
    
    if not created_case_study_id:
        print_test_result(False, "No case study ID available from create case study test")
        return False
    
    # Test with valid token
    try:
        print("\n--- Testing with valid JWT token ---")
        headers = {"Authorization": f"Bearer {jwt_token}"}
        delete_data = {"id": created_case_study_id}
        
        response = make_request("DELETE", "/case-studies", delete_data, headers)
        
        if response and response.status_code == 200:
            data = response.json()
            if data.get("success") and "deleted" in data.get("message", "").lower():
                print_test_result(True, f"Case study deleted successfully: {data.get('message')}")
            else:
                print_test_result(False, f"Unexpected response: {data}")
                return False
        else:
            print_test_result(False, f"Case study deletion failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Delete case study test failed: {str(e)}")
        return False
    
    # Test without token
    try:
        print("\n--- Testing without JWT token ---")
        response = make_request("DELETE", "/case-studies", delete_data)
        
        if response and response.status_code == 401:
            print_test_result(True, "Correctly rejected request without token with 401")
        else:
            print_test_result(False, f"Should return 401 without token, got {response.status_code if response else 'None'}")
    except Exception as e:
        print_test_result(False, f"No token test failed: {str(e)}")
    
    return True

def test_get_contacts():
    """Test 7: GET /api/contacts - Get all contacts"""
    print_test_header("GET /api/contacts - Get All Contacts")
    
    try:
        response = make_request("GET", "/contacts")
        
        if response and response.status_code == 200:
            data = response.json()
            if data.get("success") and "data" in data:
                contacts = data["data"]
                print_test_result(True, f"Retrieved {len(contacts)} contacts")
                
                # Verify structure if contacts exist
                if contacts:
                    first_contact = contacts[0]
                    required_fields = ["id", "name", "email", "created_at"]
                    missing_fields = [field for field in required_fields if field not in first_contact]
                    
                    if not missing_fields:
                        print_test_result(True, "Contact structure is correct")
                        print(f"Sample contact: {first_contact.get('name')} ({first_contact.get('email')})")
                    else:
                        print_test_result(False, f"Missing fields in contact: {missing_fields}")
                        return False
                else:
                    print_test_result(True, "No contacts found (empty array)")
                
                return True
            else:
                print_test_result(False, f"Invalid response format: {data}")
                return False
        else:
            print_test_result(False, f"Request failed with status {response.status_code if response else 'None'}")
            return False
    except Exception as e:
        print_test_result(False, f"Get contacts test failed: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests in the specified order"""
    print(f"Starting IITCG Website V2 Backend API Tests")
    print(f"Base URL: {BASE_URL}")
    print(f"API Base: {API_BASE}")
    print(f"Test Time: {datetime.now().isoformat()}")
    
    test_results = {}
    
    # Run tests in the specified order
    test_results["login"] = test_admin_login()
    test_results["get_case_studies"] = test_get_case_studies()
    test_results["create_case_study"] = test_create_case_study()
    test_results["create_blog"] = test_create_blog()
    test_results["delete_blog"] = test_delete_blog()
    test_results["delete_case_study"] = test_delete_case_study()
    test_results["get_contacts"] = test_get_contacts()
    
    # Print summary
    print(f"\n{'='*60}")
    print("TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = sum(1 for result in test_results.values() if result)
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return True
    else:
        print("❌ Some tests failed!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)