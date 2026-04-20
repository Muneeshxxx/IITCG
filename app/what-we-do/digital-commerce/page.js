'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Layers, CreditCard, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function FadeIn({ children, delay = 0, className = '' }) { return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>{children}</motion.div>); }
const services = [
  { icon: ShoppingCart, title: 'E-commerce Development', desc: 'Custom D2C and B2B e-commerce platforms with headless architecture and optimized checkout flows.' },
  { icon: Layers, title: 'Marketplace Platforms', desc: 'Multi-vendor marketplace systems with seller onboarding, commission management, and order routing.' },
  { icon: CreditCard, title: 'Payment Integration', desc: 'Multi-gateway payment processing with subscription billing, refunds, and PCI compliance.' },
  { icon: Sparkles, title: 'Personalization', desc: 'AI-powered product recommendations, dynamic pricing, and customer segmentation engines.' },
];
export default function DigitalCommercePage() {
  return (
    <div>
      <section className="pt-32 pb-16"><div className="max-w-7xl mx-auto px-6"><FadeIn>
        <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">Digital Commerce</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#0A2540] max-w-4xl"><span className="text-[#0066FF]">Digital Commerce</span> Solutions</h1>
        <p className="mt-6 text-lg text-[#6B7280] max-w-2xl">Build high-performance e-commerce and marketplace platforms that drive growth.</p>
      </FadeIn></div></section>
      <section className="py-20 bg-[#F7F9FC]"><div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">{services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}><div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm h-full"><s.icon size={28} className="text-[#0066FF] mb-5" /><h3 className="text-xl font-bold text-[#0A2540] mb-2">{s.title}</h3><p className="text-[#6B7280] leading-relaxed">{s.desc}</p></div></FadeIn>
        ))}</div>
      </div></section>
      <section className="py-20 text-center"><FadeIn><h2 className="text-3xl font-bold text-[#0A2540] mb-6">Start Your Commerce Platform</h2><Link href="/digital-commerce-solutions"><Button size="lg" className="bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold px-8 h-12">View Solutions <ArrowRight className="ml-2" size={18} /></Button></Link></FadeIn></section>
    </div>
  );
}
