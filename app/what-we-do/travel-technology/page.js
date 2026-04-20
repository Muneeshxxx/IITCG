'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Globe, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function FadeIn({ children, delay = 0, className = '' }) { return (<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>{children}</motion.div>); }
const services = [
  { icon: Cpu, title: 'Booking Engines', desc: 'AI-powered booking platforms with dynamic search, packaging, and conversion optimization for airlines and OTAs.' },
  { icon: Globe, title: 'OTA Platforms', desc: 'High-traffic travel booking platforms with multi-supplier aggregation, real-time pricing, and inventory management.' },
  { icon: Plane, title: 'Travel CRM', desc: 'Customer data platforms for personalized travel marketing, loyalty programs, and customer journey orchestration.' },
  { icon: Database, title: 'GDS Integration', desc: 'Seamless connectivity with Amadeus, Sabre, Travelport, and NDC for real-time content and booking.' },
];
export default function TravelTechnologyPage() {
  return (
    <div>
      <section className="pt-32 pb-16"><div className="max-w-7xl mx-auto px-6"><FadeIn>
        <p className="text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">Travel Technology</p>
        <h1 className="text-5xl lg:text-6xl font-bold text-[#0A2540] max-w-4xl"><span className="text-[#0066FF]">Travel Technology</span> Solutions</h1>
        <p className="mt-6 text-lg text-[#6B7280] max-w-2xl">Build scalable travel platforms and booking systems for the global travel industry.</p>
      </FadeIn></div></section>
      <section className="py-20 bg-[#F7F9FC]"><div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">{services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}><div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm h-full"><s.icon size={28} className="text-[#0066FF] mb-5" /><h3 className="text-xl font-bold text-[#0A2540] mb-2">{s.title}</h3><p className="text-[#6B7280] leading-relaxed">{s.desc}</p></div></FadeIn>
        ))}</div>
      </div></section>
      <section className="py-20 text-center"><FadeIn><h2 className="text-3xl font-bold text-[#0A2540] mb-6">Build Your Travel Platform</h2><Link href="/travel-solutions"><Button size="lg" className="bg-[#0066FF] text-white hover:bg-[#0055DD] font-semibold px-8 h-12">View Travel Solutions <ArrowRight className="ml-2" size={18} /></Button></Link></FadeIn></section>
    </div>
  );
}
