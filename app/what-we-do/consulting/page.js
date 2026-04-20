'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Lightbulb, BarChart3, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { icon: Target, title: 'Technology Strategy', desc: 'Define your digital roadmap with clear priorities, timelines, and measurable outcomes aligned to business goals.' },
  { icon: Users, title: 'Architecture Advisory', desc: 'Expert guidance on enterprise architecture, system design, and technology stack selection for scalable solutions.' },
  { icon: Lightbulb, title: 'Digital Transformation', desc: 'End-to-end transformation programs covering process optimization, technology modernization, and change management.' },
  { icon: BarChart3, title: 'AI Readiness Assessment', desc: 'Evaluate your organization\'s AI maturity, identify high-impact use cases, and build a pragmatic AI adoption roadmap.' },
];

const benefits = [
  '30+ years of enterprise experience',
  'CTO-level strategic guidance',
  'Proven transformation frameworks',
  'Technology-agnostic recommendations',
  'Hands-on implementation support',
  'Measurable business outcomes',
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1587947910798-fb4e9a0452cc?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-6">Strategic Consulting</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A2540] leading-tight max-w-4xl mb-6">
              Technology Consulting That{' '}
              <span className="gradient-text">Drives Results</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Expert-led consulting that bridges the gap between business strategy and technology execution. Transform your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold text-base px-8 h-12 shadow-xl">
                  Book Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-base px-8 h-12">
                  <Phone className="mr-2" size={18} />
                  +91 9811298451
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">What We Deliver</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mb-14">
              Comprehensive consulting services to accelerate your digital transformation journey
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <s.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-3 group-hover:gradient-text transition-all">{s.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
                Why Choose <span className="gradient-text">IITCG</span>
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Partner with consultants who have successfully delivered 500+ digital transformation projects across Travel, BFSI, and Digital Commerce.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-[#0A2540] font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-effect rounded-3xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Ready to Transform?</h3>
                <p className="text-[#6B7280] mb-8">
                  Book a free 30-minute consultation with our senior technology consultants to discuss your challenges and opportunities.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full gradient-bg text-white hover:opacity-90 font-semibold h-12 shadow-xl">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                  <a href="tel:+919811298451" className="block">
                    <Button size="lg" variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold h-12">
                      <Phone className="mr-2" size={18} />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
