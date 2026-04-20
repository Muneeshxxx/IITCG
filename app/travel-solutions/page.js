'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Globe, Cpu, Database, Target, ArrowRight, CheckCircle2, TrendingUp, Clock, Shield, Users } from 'lucide-react';
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

const problems = [
  'Legacy booking systems with poor conversion rates and slow search',
  'Inability to handle peak traffic during holiday seasons',
  'Fragmented technology stack across booking, CRM, and operations',
  'No personalization leading to poor customer engagement',
  'Complex GDS integrations causing delays and errors',
  'High infrastructure costs with low utilization efficiency',
];

const services = [
  { icon: Cpu, title: 'Booking Engines', desc: 'AI-powered search, dynamic packaging, and conversion-optimized booking flows for airlines, hotels, and OTAs.' },
  { icon: Globe, title: 'OTA Platforms', desc: 'High-traffic booking platforms with real-time inventory, multi-supplier aggregation, and dynamic pricing.' },
  { icon: Target, title: 'Travel CRM', desc: 'Customer data platforms for personalized marketing, loyalty programs, and journey orchestration.' },
  { icon: Database, title: 'GDS Integration', desc: 'Seamless connectivity with Amadeus, Sabre, Travelport, and NDC for real-time inventory access.' },
];

const benefits = [
  { value: '35%', label: 'Conversion Increase', icon: TrendingUp },
  { value: '50%', label: 'Faster Search', icon: Clock },
  { value: '3x', label: 'Traffic Capacity', icon: Users },
  { value: '99.9%', label: 'System Uptime', icon: Shield },
];

const useCases = [
  { title: 'Airline Booking Platform', desc: 'Built a cloud-native booking engine for an international airline. 35% increase in online booking conversion with AI-powered upsell.' },
  { title: 'OTA Aggregation Platform', desc: 'Developed multi-supplier OTA platform handling 10M+ searches/day with sub-second response times and dynamic pricing.' },
  { title: 'Hotel Chain CRM', desc: 'Implemented customer data platform for a hotel chain. 28% improvement in repeat bookings through personalized marketing.' },
];

export default function TravelSolutionsPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'Travel Technology' }),
      });
      setSubmitted(true);
    } catch (err) { console.error(err); }
  };

  return (
    <div>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-6">Travel Technology</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#0A2540] leading-[1.1] max-w-4xl">
              Build Scalable <span className="text-[#0066FF]">Travel Platforms</span> and Booking Systems
            </h1>
            <p className="mt-6 text-lg text-[#6B7280] max-w-2xl">End-to-end technology solutions for airlines, OTAs, and travel companies worldwide.</p>
            <Link href="#cta"><Button size="lg" className="mt-8 bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold px-8 h-12">Build Your Travel Platform <ArrowRight className="ml-2" size={18} /></Button></Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">The Challenge</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-10">Travel Technology Pain Points</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white rounded-lg border border-[#E5E7EB] p-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-[#6B7280]">{p}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">What We Deliver</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-12">Comprehensive Travel Solutions</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <svc.icon size={28} className="text-[#0066FF] mb-5" />
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{svc.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-12">Proven Results</h2></FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.label} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 text-center shadow-sm">
                  <b.icon size={24} className="text-[#0066FF] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[#0A2540]">{b.value}</p>
                  <p className="font-semibold text-sm text-[#0A2540] mt-1">{b.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-12">Use Cases</h2></FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <FadeIn key={uc.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm h-full">
                  <h3 className="text-lg font-bold text-[#0A2540] mb-3">{uc.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540]">Build Your Travel Platform</h2>
              <p className="mt-3 text-[#6B7280]">Let&apos;s discuss your travel technology needs.</p>
            </div>
            {submitted ? (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-12 text-center shadow-sm">
                <CheckCircle2 size={48} className="text-[#0066FF] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2540]">Thank you!</h3>
                <p className="text-[#6B7280] mt-2">We&apos;ll reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Name *</Label><Input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                  <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Email *</Label><Input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                </div>
                <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Company</Label><Input placeholder="Company name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Message</Label><Textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="border-[#E5E7EB] resize-none" /></div>
                <Button type="submit" className="w-full bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold h-12">Build Your Travel Platform <ArrowRight className="ml-2" size={16} /></Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
