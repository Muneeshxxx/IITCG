'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Briefcase, LogOut, Plus, Trash2, Eye, X, ChevronDown, Mail, Phone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const tabs = [
  { id: 'leads', name: 'Leads', icon: Users },
  { id: 'contacts', name: 'Contacts', icon: Mail },
  { id: 'blogs', name: 'Blogs', icon: FileText },
  { id: 'cases', name: 'Case Studies', icon: Briefcase },
];

export default function AdminDashboard() {
  const [token, setToken] = useState(null);
  const [activeTab, setActiveTab] = useState('leads');
  const [leads, setLeads] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [blogForm, setBlogForm] = useState({ title: '', excerpt: '', category: '', content: '' });
  const [caseForm, setCaseForm] = useState({ title: '', client: '', industry: '', challenge: '', solution: '', results: '', technologies: '' });

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    if (!savedToken) {
      window.location.href = '/admin';
      return;
    }
    setToken(savedToken);
    fetchAll(savedToken);
  }, []);

  const fetchAll = async (t) => {
    setLoading(true);
    try {
      const headers = { Authorization: `Bearer ${t}` };
      const [leadsRes, contactsRes, blogsRes, casesRes] = await Promise.all([
        fetch('/api/leads', { headers }).then(r => r.json()),
        fetch('/api/contacts', { headers }).then(r => r.json()),
        fetch('/api/blogs', { headers }).then(r => r.json()),
        fetch('/api/case-studies', { headers }).then(r => r.json()),
      ]);
      if (leadsRes.success) setLeads(leadsRes.data);
      if (contactsRes.success) setContacts(contactsRes.data);
      if (blogsRes.success) setBlogs(blogsRes.data);
      if (casesRes.success) setCases(casesRes.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  };

  const handleDelete = async (collection, id) => {
    if (!confirm('Are you sure?')) return;
    const endpoint = collection === 'cases' ? '/api/case-studies' : `/api/${collection}`;
    await fetch(endpoint, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    fetchAll(token);
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(blogForm),
    });
    setBlogForm({ title: '', excerpt: '', category: '', content: '' });
    setShowForm(false);
    fetchAll(token);
  };

  const handleAddCase = async (e) => {
    e.preventDefault();
    const data = { ...caseForm, technologies: caseForm.technologies.split(',').map(t => t.trim()).filter(Boolean) };
    await fetch('/api/case-studies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    setCaseForm({ title: '', client: '', industry: '', challenge: '', solution: '', results: '', technologies: '' });
    setShowForm(false);
    fetchAll(token);
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    window.location.href = '/admin';
  };

  if (!token) return null;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Top Bar */}
      <div className="border-b border-[#222222] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold"><span className="gradient-text">IITCG</span> Admin</h1>
          <Button variant="ghost" onClick={logout} className="text-[#A1A1AA] hover:text-white">
            <LogOut size={16} className="mr-2" /> Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setShowForm(false); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#00E5FF] text-black'
                  : 'bg-[#111111] text-[#A1A1AA] hover:text-white border border-[#222222]'
              }`}
            >
              <tab.icon size={16} />
              {tab.name}
              <span className="ml-1 text-xs opacity-70">
                ({tab.id === 'leads' ? leads.length : tab.id === 'contacts' ? contacts.length : tab.id === 'blogs' ? blogs.length : cases.length})
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#A1A1AA]">Loading...</div>
        ) : (
          <>
            {/* Leads Tab */}
            {activeTab === 'leads' && (
              <div className="space-y-3">
                {leads.length === 0 ? <p className="text-[#A1A1AA] text-center py-12">No leads yet.</p> : leads.map((lead) => (
                  <div key={lead.id} className="glow-card rounded-lg p-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold">{lead.name}</h3>
                        {lead.service && <span className="text-xs px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED]">{lead.service}</span>}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-[#A1A1AA]">
                        <span>{lead.email}</span>
                        {lead.company && <span>{lead.company}</span>}
                        {lead.phone && <span>{lead.phone}</span>}
                      </div>
                      {lead.message && <p className="mt-2 text-sm text-[#A1A1AA]">{lead.message}</p>}
                      <p className="mt-2 text-xs text-[#555]">{new Date(lead.created_at).toLocaleDateString()}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete('leads', lead.id)} className="text-red-400 hover:text-red-300 shrink-0">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-3">
                {contacts.length === 0 ? <p className="text-[#A1A1AA] text-center py-12">No contacts yet.</p> : contacts.map((c) => (
                  <div key={c.id} className="glow-card rounded-lg p-5">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{c.name}</h3>
                      <span className="text-sm text-[#A1A1AA]">{c.email}</span>
                      {c.company && <span className="text-sm text-[#A1A1AA]">| {c.company}</span>}
                    </div>
                    <p className="mt-2 text-sm text-[#A1A1AA]">{c.message}</p>
                    <p className="mt-2 text-xs text-[#555]">{new Date(c.created_at).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Blogs Tab */}
            {activeTab === 'blogs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Blog Posts</h2>
                  <Button onClick={() => setShowForm(!showForm)} className="bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold">
                    <Plus size={16} className="mr-1" /> Add Blog
                  </Button>
                </div>
                {showForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    onSubmit={handleAddBlog}
                    className="glow-card rounded-xl p-6 mb-6 space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Title *</Label>
                        <Input required value={blogForm.title} onChange={e => setBlogForm({...blogForm, title: e.target.value})} className="bg-[#0A0A0A] border-[#222222] text-white h-10" />
                      </div>
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Category</Label>
                        <Input value={blogForm.category} onChange={e => setBlogForm({...blogForm, category: e.target.value})} placeholder="AI, Cloud, DevOps" className="bg-[#0A0A0A] border-[#222222] text-white h-10" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-[#A1A1AA] mb-1 block">Excerpt *</Label>
                      <Textarea required value={blogForm.excerpt} onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})} rows={2} className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                    </div>
                    <div>
                      <Label className="text-sm text-[#A1A1AA] mb-1 block">Content</Label>
                      <Textarea value={blogForm.content} onChange={e => setBlogForm({...blogForm, content: e.target.value})} rows={4} className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-[#00E5FF] text-black font-semibold">Save Blog</Button>
                      <Button type="button" variant="ghost" onClick={() => setShowForm(false)} className="text-[#A1A1AA]">Cancel</Button>
                    </div>
                  </motion.form>
                )}
                <div className="space-y-3">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="glow-card rounded-lg p-5 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {blog.category && <span className="text-xs px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED]">{blog.category}</span>}
                          <h3 className="font-semibold truncate">{blog.title}</h3>
                        </div>
                        <p className="mt-1 text-sm text-[#A1A1AA] line-clamp-2">{blog.excerpt}</p>
                        <p className="mt-2 text-xs text-[#555]">{blog.author} &middot; {blog.readTime}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete('blogs', blog.id)} className="text-red-400 hover:text-red-300 shrink-0">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Studies Tab */}
            {activeTab === 'cases' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold">Case Studies</h2>
                  <Button onClick={() => setShowForm(!showForm)} className="bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold">
                    <Plus size={16} className="mr-1" /> Add Case Study
                  </Button>
                </div>
                {showForm && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    onSubmit={handleAddCase}
                    className="glow-card rounded-xl p-6 mb-6 space-y-4"
                  >
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Title *</Label>
                        <Input required value={caseForm.title} onChange={e => setCaseForm({...caseForm, title: e.target.value})} className="bg-[#0A0A0A] border-[#222222] text-white h-10" />
                      </div>
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Client *</Label>
                        <Input required value={caseForm.client} onChange={e => setCaseForm({...caseForm, client: e.target.value})} className="bg-[#0A0A0A] border-[#222222] text-white h-10" />
                      </div>
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Industry</Label>
                        <Input value={caseForm.industry} onChange={e => setCaseForm({...caseForm, industry: e.target.value})} className="bg-[#0A0A0A] border-[#222222] text-white h-10" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-[#A1A1AA] mb-1 block">Challenge</Label>
                      <Textarea value={caseForm.challenge} onChange={e => setCaseForm({...caseForm, challenge: e.target.value})} rows={2} className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                    </div>
                    <div>
                      <Label className="text-sm text-[#A1A1AA] mb-1 block">Solution</Label>
                      <Textarea value={caseForm.solution} onChange={e => setCaseForm({...caseForm, solution: e.target.value})} rows={2} className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Results</Label>
                        <Textarea value={caseForm.results} onChange={e => setCaseForm({...caseForm, results: e.target.value})} rows={2} className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                      </div>
                      <div>
                        <Label className="text-sm text-[#A1A1AA] mb-1 block">Technologies (comma-separated)</Label>
                        <Textarea value={caseForm.technologies} onChange={e => setCaseForm({...caseForm, technologies: e.target.value})} rows={2} placeholder="React, Node.js, AWS" className="bg-[#0A0A0A] border-[#222222] text-white resize-none" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-[#00E5FF] text-black font-semibold">Save Case Study</Button>
                      <Button type="button" variant="ghost" onClick={() => setShowForm(false)} className="text-[#A1A1AA]">Cancel</Button>
                    </div>
                  </motion.form>
                )}
                <div className="space-y-3">
                  {cases.map((cs) => (
                    <div key={cs.id} className="glow-card rounded-lg p-5 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          {cs.industry && <span className="text-xs px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF]">{cs.industry}</span>}
                          <h3 className="font-semibold">{cs.title}</h3>
                        </div>
                        <p className="mt-1 text-sm text-[#A1A1AA]"><strong>Client:</strong> {cs.client}</p>
                        {cs.results && <p className="mt-1 text-sm text-[#A1A1AA]"><strong>Results:</strong> {cs.results}</p>}
                        {cs.technologies?.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {cs.technologies.map((tech) => (
                              <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-[#222222] text-[#A1A1AA]">{tech}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete('cases', cs.id)} className="text-red-400 hover:text-red-300 shrink-0">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
