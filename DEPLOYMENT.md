# Production Deployment Guide for Hostinger MySQL

## Prerequisites
- Hostinger shared hosting account with Node.js support
- MySQL database created in Hostinger cPanel
- Git repository (GitHub/GitLab)
- Your domain pointed to Hostinger

---

## Local Setup Before Deployment

### 1. Install mysql2 dependency locally
```bash
npm install mysql2
```

### 2. Test with local MySQL (optional)
Create `.env.local`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-local-password
DB_NAME=iitcg_test
JWT_SECRET=test-secret
NODE_ENV=development
```

### 3. Build and test
```bash
npm run build
npm run prod:start
```

---

## Hostinger Setup Steps

### Step 1: Create MySQL Database in Hostinger cPanel
1. Log into **cPanel** (usually at `yourdomain.com:2083`)
2. Go to **MySQL Databases**
3. Create new database:
   - Name: `iitcg_db` (or your choice)
   - Username: `iitcg_user`
   - Password: Strong password (save this!)
4. Add user to database with ALL privileges
5. Note the connection details

### Step 2: Set Up Git Repository
```bash
# Push your code to GitHub/GitLab
git add .
git commit -m "Migrate MongoDB to MySQL for production"
git push origin main
```

**Important:** Add to `.gitignore` (if not already there):
```
.env.production
node_modules/
.next/
*.log
```

### Step 3: Deploy on Hostinger
1. In Hostinger panel, go to **Hosting → Node.js Applications**
2. Click **Create New Application**
3. Select:
   - **Node.js version:** 18.x
   - **Application name:** `iitcg-app`
   - **Application folder:** `.` (root)
   - **Entry point:** `node_modules/.bin/next start` or `npm start`
   - **Start command:** `npm run prod:start`
   - **Build command:** `npm run build`
4. Click **Deploy**

### Step 4: Configure Environment Variables
1. In the application settings, go to **Environment Variables**
2. Add each variable:

```
DB_HOST          = your-mysql-host
DB_USER          = your-username
DB_PASSWORD      = your-password
DB_NAME          = iitcg_db
JWT_SECRET       = [Generate using: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"]
NODE_ENV         = production
CORS_ORIGINS     = https://yourdomain.com
```

**Get MySQL credentials from Hostinger:**
- Go to cPanel → MySQL Databases
- Your host might be: `localhost` (if it's same server) or `mysql.yourdomain.com`

### Step 5: Custom Domain Setup
1. In Hostinger panel, go to **Domains**
2. Point your domain to the Node.js application
3. Wait for DNS propagation (5-30 minutes)

### Step 6: SSL Certificate
Hostinger automatically provisions free SSL via AutoSSL - usually activated within 24 hours.

---

## Verify Deployment

### Check Application Status
1. Go to **Hosting → Node.js Applications → iitcg-app**
2. Check status (should be "Running")

### View Logs
1. Click **View Logs**
2. Check for errors during initialization
3. Should see: `✅ Database initialization complete!`

### Test API Endpoints

**Get Blogs:**
```bash
curl https://yourdomain.com/api/blogs
```

**Get Case Studies:**
```bash
curl https://yourdomain.com/api/case-studies
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **Application won't start** | Check logs, verify environment variables, ensure DB credentials are correct |
| **Database connection timeout** | Verify MySQL is running; check `DB_HOST` is accessible |
| **"Table doesn't exist" error** | Run initialization manually: SSH into server, run `npm run prod:init` |
| **500 errors on API calls** | Check application logs in Hostinger dashboard |
| **Out of memory** | Hostinger may restart app; contact support if persistent |
| **No SSL certificate** | Wait 24 hours or manually request in cPanel → AutoSSL |

---

## Maintenance

### Backup Your Database
1. cPanel → MySQL Databases → Backup
2. Download monthly backups

### Monitor Performance
1. Hostinger dashboard → Performance metrics
2. Check CPU, memory, requests per second

### Update Application
```bash
# Make changes locally
git commit -am "Update features"
git push

# Hostinger auto-deploys from main branch
# Or manually redeploy via Hostinger dashboard
```

### Restart Application
If needed, in Hostinger dashboard:
- Application settings → Restart Node.js app

---

## Migration Summary

✅ **MongoDB → MySQL Migration Complete**
- Database module created: `lib/db-mysql.js`
- Tables: `blogs`, `case_studies`, `users`
- Seed data initialized on first run
- Environment variables documented in `.env.production.example`

**Files Changed:**
- `package.json` - Added mysql2, removed mongodb
- `lib/db-mysql.js` - New MySQL module
- `scripts/init-db.js` - Database initialization script
- `.env.production.example` - Environment template
- `DEPLOYMENT.md` - This guide (new)

---

## Support

Need help?
1. Check Hostinger documentation: https://support.hostinger.com
2. Node.js issues: Check application logs in cPanel
3. MySQL issues: Use cPanel → phpMyAdmin to inspect database
