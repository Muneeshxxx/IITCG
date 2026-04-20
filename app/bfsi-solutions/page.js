'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, CreditCard, Shield, BarChart3, ArrowRight, CheckCircle2, Lock, Scale, FileCheck, TrendingUp } from 'lucide-react';
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
  'Legacy core banking systems that cannot support digital channels',
  'Increasing fraud losses and sophisticated attack vectors',
  'Complex regulatory compliance requirements across jurisdictions',
  'Poor customer experience compared to fintech competitors',
  'Siloed data preventing holistic risk assessment',
  'Slow time-to-market for new financial products',
];

const services = [
  { icon: CreditCard, title: 'Payment Systems', desc: 'Secure, scalable payment processing platforms with real-time settlement, multi-currency support, and PCI DSS compliance.' },
  { icon: Landmark, title: 'Lending Platforms', desc: 'Digital lending solutions with automated credit scoring, loan origination, and portfolio management.' },
  { icon: Shield, title: 'Fraud Detection', desc: 'AI-powered fraud detection systems with real-time transaction monitoring, anomaly detection, and adaptive risk scoring.' },
  { icon: Scale, title: 'Risk & Compliance', desc: 'Regulatory reporting automation, KYC/AML solutions, and compliance monitoring for banking and insurance.' },
];

const benefits = [
  { value: '60%', label: 'Fraud Reduction', icon: Shield },
  { value: '3x', label: 'Faster Compliance', icon: FileCheck },
  { value: '45%', label: 'Cost Savings', icon: TrendingUp },
  { value: '99.99%', label: 'Uptime SLA', icon: Lock },
];

const useCases = [
  { title: 'Digital Payment Platform', desc: 'Built real-time payment processing system handling 500K+ transactions/day with 99.99% uptime and PCI DSS Level 1 compliance.' },
  { title: 'AI Fraud Detection', desc: 'Deployed ML-based fraud detection for a bank reducing false positives by 70% while catching 95% of fraudulent transactions.' },
  { title: 'Regulatory Reporting', desc: 'Automated compliance reporting for a multi-national bank. Reduced reporting time from 2 weeks to 2 hours.' },
];

export default function BFSISolutionsPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service: 'BFSI Solutions' }),
      });
      setSubmitted(true);
    } catch (err) { console.error(err); }
  };

  return (
    <div>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-6">BFSI Solutions</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#0A2540] leading-[1.1] max-w-4xl">
              Secure and Scalable Technology for <span className="text-[#0066FF]">Financial Services</span>
            </h1>
            <p className="mt-6 text-lg text-[#6B7280] max-w-2xl">Enterprise-grade technology solutions for banking, insurance, and fintech companies.</p>
            <Link href="#cta"><Button size="lg" className="mt-8 bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold px-8 h-12">Talk to BFSI Expert <ArrowRight className="ml-2" size={18} /></Button></Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-10">Financial Technology Challenges</h2></FadeIn>
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
          <FadeIn><h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-12">What We Deliver</h2></FadeIn>
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
          <FadeIn><h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-12">Proven Impact</h2></FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.label} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 text-center shadow-sm">
                  <b.icon size={24} className="text-[#0066FF] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[#0A2540]">{b.value}</p>
                  <p className="font-semibold text-sm mt-1">{b.label}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540]">Talk to BFSI Expert</h2>
              <p className="mt-3 text-[#6B7280]">Discuss your financial technology requirements with our team.</p>
            </div>
            {submitted ? (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-12 text-center shadow-sm">
                <CheckCircle2 size={48} className="text-[#0066FF] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2540]">Thank you!</h3>
                <p className="text-[#6B7280] mt-2">Our BFSI expert will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Name *</Label><Input required placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                  <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Email *</Label><Input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                </div>
                <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Company</Label><Input placeholder="Company name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="border-[#E5E7EB] h-11" /></div>
                <div><Label className="text-sm text-[#6B7280] mb-1.5 block">Message</Label><Textarea placeholder="Describe your BFSI requirements..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className="border-[#E5E7EB] resize-none" /></div>
                <Button type="submit" className="w-full bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold h-12">Talk to BFSI Expert <ArrowRight className="ml-2" size={16} /></Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
