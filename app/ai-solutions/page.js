'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Zap, Sparkles, ArrowRight, CheckCircle2, TrendingDown, Clock, Users, Target, Brain, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  { icon: Bot, title: 'AI Chatbots', desc: 'Intelligent conversational agents for customer service, sales support, and internal help desks. Handle 70% of inquiries autonomously.', color: 'from-blue-500 to-cyan-500' },
  { icon: Phone, title: 'AI Call Center', desc: 'Automated voice support with natural language understanding. Reduce call handling time by 60% while improving satisfaction.', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Intelligent process automation for document processing, data entry, approvals, and compliance workflows.', color: 'from-pink-500 to-rose-500' },
  { icon: Sparkles, title: 'GenAI Solutions', desc: 'Custom content generation, code assistants, knowledge bases, and AI-powered search and recommendation systems.', color: 'from-cyan-500 to-blue-500' },
];

const benefits = [
  { value: '40%', label: 'Cost Reduction', desc: 'Average operational savings', icon: TrendingDown },
  { value: '80%', label: 'Faster Response', desc: 'Customer query resolution', icon: Clock },
  { value: '10x', label: 'Productivity', desc: 'Content & process throughput', icon: Target },
  { value: '70%', label: 'Automation Rate', desc: 'Of repetitive tasks handled', icon: Users },
];

export default function AISolutionsPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'AI Strategy Call' }),
      });
      setSubmitted(true);
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero - Full Width with Image Background */}
      <section className="w-full relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest mb-4 sm:mb-6 text-center sm:text-left">AI Solutions That Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-5xl mb-4 sm:mb-6 text-center sm:text-left">
              Reduce Costs & Boost Efficiency with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-300">AI Automation</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-8 sm:mb-10 text-center sm:text-left">
              We help Travel, BFSI, and Digital Commerce companies implement production-grade AI systems that deliver measurable business value in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link href="#cta">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 h-12 sm:h-14 shadow-2xl">
                  Book AI Strategy Call
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 sm:px-8 h-12 sm:h-14">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats - Full Width Gradient */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <b.icon size={28} className="text-white/90 mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{b.value}</p>
                <p className="text-white/90 font-semibold text-sm sm:text-base mb-1">{b.label}</p>
                <p className="text-white/70 text-xs sm:text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-3 sm:mb-4 text-center">Our AI Services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 sm:mb-6 text-center">AI That Works in Production</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto mb-10 sm:mb-14 text-center">
              From strategy to deployment in 90 days. Built for enterprise scale with security, compliance, and monitoring included.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${svc.color}`}></div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg`}>
                    <svc.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2 sm:mb-3 group-hover:gradient-text transition-all">{svc.title}</h3>
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form - Full Width */}
      <section id="cta" className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-10">
              <Brain className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4">Book AI Strategy Call</h2>
              <p className="text-base sm:text-lg text-[#6B7280]">Get a free 30-minute consultation with our AI experts. Let&apos;s discuss your automation goals.</p>
            </div>
            {submitted ? (
              <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-xl">
                <CheckCircle2 size={64} className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">Thank you!</h3>
                <p className="text-base sm:text-lg text-[#6B7280] mb-6">We&apos;ll reach out within 24 hours to schedule your AI strategy call.</p>
                <Button onClick={() => setSubmitted(false)} className="gradient-bg text-white hover:opacity-90 px-6 h-12">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Name *</Label>
                    <Input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="border-[#E5E7EB] h-11 sm:h-12" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Email *</Label>
                    <Input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border-[#E5E7EB] h-11 sm:h-12" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#0A2540] mb-2 block">Company</Label>
                  <Input placeholder="Company name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="border-[#E5E7EB] h-11 sm:h-12" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-[#0A2540] mb-2 block">What AI challenges are you facing?</Label>
                  <Textarea placeholder="Tell us about your AI needs and automation goals..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="border-[#E5E7EB] resize-none" />
                </div>
                <Button type="submit" className="w-full gradient-bg text-white hover:opacity-90 font-semibold h-12 sm:h-14 text-base sm:text-lg shadow-xl">
                  Book Free AI Strategy Call <Rocket className="ml-2" size={20} />
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
