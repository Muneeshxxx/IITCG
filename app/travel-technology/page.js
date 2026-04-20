'use client';

import { motion } from 'framer-motion';
import { Plane, Globe, Cpu, Database, Target, ArrowRight, CheckCircle2, BarChart3, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function AnimateIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const solutions = [
  { icon: Plane, title: 'Airlines', items: ['Revenue management systems', 'Booking & reservation platforms', 'Passenger experience apps', 'Loyalty program technology', 'Operations optimization'] },
  { icon: Globe, title: 'Online Travel Agencies (OTAs)', items: ['High-traffic booking platforms', 'Real-time search & pricing', 'Multi-supplier aggregation', 'Payment processing', 'Mobile-first experiences'] },
  { icon: Cpu, title: 'Booking Engines', items: ['AI-powered search', 'Dynamic packaging', 'Conversion optimization', 'Multi-language support', 'White-label solutions'] },
  { icon: Database, title: 'GDS Integration', items: ['Amadeus connectivity', 'Sabre integration', 'Travelport systems', 'NDC implementation', 'Content aggregation'] },
  { icon: Target, title: 'Travel CRM', items: ['Customer data platforms', 'Personalization engines', 'Marketing automation', 'Loyalty management', 'Journey orchestration'] },
];

const stats = [
  { value: '50+', label: 'Travel Projects Delivered' },
  { value: '35%', label: 'Avg. Conversion Increase' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '3x', label: 'Traffic Handling Capacity' },
];

export default function TravelTechnologyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00E5FF]/[0.05] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">Travel Technology</p>
            <h1 className="text-5xl lg:text-7xl font-bold max-w-4xl leading-tight">
              Building the{' '}
              <span className="gradient-text">Future of Travel</span>{' '}
              Technology
            </h1>
            <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl">
              End-to-end technology solutions for airlines, OTAs, and travel companies. 30+ years of deep domain expertise in the global travel industry.
            </p>
            <Link href="/contact">
              <Button size="lg" className="mt-8 bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold px-8 h-12">
                Discuss Your Travel Project <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-[#222222] bg-[#111111]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold gradient-text">{s.value}</p>
                  <p className="mt-1 text-sm text-[#A1A1AA]">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">Solutions</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Comprehensive Travel Solutions</h2>
          </AnimateIn>
          <div className="mt-16 space-y-6">
            {solutions.map((sol, i) => (
              <AnimateIn key={sol.title} delay={0.05}>
                <motion.div whileHover={{ scale: 1.003 }} className="glow-card rounded-xl p-8 lg:p-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center shrink-0">
                      <sol.icon size={24} className="text-[#00E5FF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {sol.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-[#00E5FF] shrink-0" />
                            <span className="text-sm text-[#A1A1AA]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why IITCG for Travel */}
      <section className="py-24 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Why IITCG</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">Your Travel Technology Partner</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Domain Experts', desc: 'Our team has built travel systems for airlines, OTAs, and hospitality companies worldwide.' },
              { icon: BarChart3, title: 'Proven Results', desc: '35% average increase in booking conversion and 50% reduction in system response times.' },
              { icon: Shield, title: 'Enterprise Scale', desc: 'Systems built to handle millions of transactions, peak season traffic, and global operations.' },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="glow-card rounded-xl p-8">
                  <item.icon size={24} className="text-[#7C3AED] mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <AnimateIn>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform Your{' '}
            <span className="gradient-text">Travel Platform</span>?
          </h2>
          <p className="mt-6 text-lg text-[#A1A1AA] max-w-lg mx-auto">Let&apos;s discuss how we can modernize your travel technology stack.</p>
          <Link href="/contact">
            <Button size="lg" className="mt-8 bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold px-8 h-12">
              Book Strategy Call <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}
