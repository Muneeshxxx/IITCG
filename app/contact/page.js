'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero - Full Width */}
      <section className="w-full relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4 sm:mb-6 mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-4 sm:mb-6 text-center sm:text-left">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] max-w-4xl mb-4 sm:mb-6 text-center sm:text-left">
              Let&apos;s Talk
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl leading-relaxed text-center sm:text-left">
              Ready to start your next project? Get in touch and we&apos;ll respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              {success ? (
                <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-xl">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">Message Sent!</h3>
                  <p className="text-base sm:text-lg text-[#6B7280] mb-8">We&apos;ll get back to you within 24 hours.</p>
                  <Button className="gradient-bg text-white hover:opacity-90 font-semibold px-8 h-12" onClick={() => setSuccess(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-5 sm:space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-2">Send us a message</h2>
                    <p className="text-sm sm:text-base text-[#6B7280]">Fill out the form below and we&apos;ll get back to you shortly.</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Name *</Label>
                      <Input required placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border-[#E5E7EB] h-11 sm:h-12" />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Email *</Label>
                      <Input required type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="border-[#E5E7EB] h-11 sm:h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Company</Label>
                    <Input placeholder="Company name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="border-[#E5E7EB] h-11 sm:h-12" />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Message *</Label>
                    <Textarea required rows={5} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="border-[#E5E7EB] resize-none" />
                  </div>
                  
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  
                  <Button type="submit" disabled={loading} className="w-full gradient-bg text-white hover:opacity-90 font-semibold h-12 sm:h-14 text-base sm:text-lg shadow-xl">
                    {loading ? 'Sending...' : 'Send Message'} <Send className="ml-2" size={18} />
                  </Button>
                </form>
              )}
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-6 sm:space-y-8">
                <div className="glass-effect rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: 'Phone', value: '+91 9811298451', href: 'tel:+919811298451', color: 'from-blue-500 to-cyan-500' },
                      { icon: Mail, label: 'Email', value: 'info@iitcg.com', href: 'mailto:info@iitcg.com', color: 'from-purple-500 to-pink-500' },
                      { icon: MapPin, label: 'Office', value: 'Global Offices', href: '#', color: 'from-pink-500 to-rose-500' },
                    ].map(item => (
                      <a key={item.label} href={item.href} className="flex gap-4 group">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                          <item.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] mb-1">{item.label}</p>
                          <p className="font-semibold text-[#0A2540] group-hover:gradient-text transition-all">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <Calendar className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-bold text-[#0A2540] mb-3">Book a Strategy Call</h4>
                  <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">
                    Schedule a free 30-minute consultation with our technology experts to discuss your project.
                  </p>
                  <a href="tel:+919811298451">
                    <Button className="w-full gradient-bg text-white hover:opacity-90 font-semibold h-12 shadow-lg">
                      Schedule Call <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
                </div>

                <div className="glass-effect rounded-2xl p-6 sm:p-8">
                  <h4 className="text-lg font-bold text-[#0A2540] mb-4">Response Time</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-[#6B7280]">Email: Within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-[#6B7280]">Phone: Immediate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-[#6B7280]">Strategy Call: Within 48 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
