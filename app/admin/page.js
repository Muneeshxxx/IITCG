'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        window.location.href = '/admin/dashboard';
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to connect. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="gradient-text">IITCG</span> Admin
          </h1>
          <p className="text-[#A1A1AA] mt-2">Sign in to manage your website</p>
        </div>

        <form onSubmit={handleLogin} className="glow-card rounded-xl p-8 space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm text-[#A1A1AA] mb-2 block">Email</Label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
              <Input
                id="email"
                type="email"
                required
                placeholder="admin@iitcg.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0A0A0A] border-[#222222] text-white placeholder:text-[#555] focus:border-[#00E5FF] h-12 pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="text-sm text-[#A1A1AA] mb-2 block">Password</Label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
              <Input
                id="password"
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0A0A0A] border-[#222222] text-white placeholder:text-[#555] focus:border-[#00E5FF] h-12 pl-10"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold h-12"
          >
            {loading ? 'Signing in...' : 'Sign In'}
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
