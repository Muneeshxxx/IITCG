'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Award, Target, ArrowRight, Lightbulb, Zap, Shield, Crown, Phone, Rocket, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const values = [
  { icon: Crown, title: 'Expert-Led', desc: 'Every engagement is led by senior architects and technology leaders with deep domain expertise.', color: 'from-blue-500 to-cyan-500' },
  { icon: Target, title: 'Outcome Driven', desc: 'We measure success by business outcomes delivered, not hours billed.', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, title: 'Speed & Quality', desc: 'Enterprise-grade solutions delivered with startup velocity.', color: 'from-pink-500 to-rose-500' },
  { icon: Shield, title: 'Trust & Integrity', desc: 'Long-term partnerships built on transparency and consistent delivery.', color: 'from-cyan-500 to-blue-500' },
];

const stats = [
  { value: '30+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Projects Delivered', icon: Rocket },
  { value: '50+', label: 'Enterprise Clients', icon: Users },
  { value: '15+', label: 'Countries Served', icon: Globe },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero - Full Width */}
      <section className="w-full relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4 sm:mb-6 mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-4 sm:mb-6 text-center sm:text-left">About IITCG</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] max-w-5xl mb-4 sm:mb-6 leading-tight text-center sm:text-left">
              A Team of Experts Building{' '}
              <span className="gradient-text">AI-Driven Platforms</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl leading-relaxed mb-8 sm:mb-10 text-center sm:text-left">
              We help Travel, BFSI, and Digital Commerce companies design and build scalable digital systems that transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-6 sm:px-8 h-12 sm:h-14 shadow-xl">
                  Work With Us
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 h-12 sm:h-14">
                  <Phone className="mr-2" size={18} />
                  +91 9811298451
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
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <s.icon size={32} className="text-white/90 mx-auto mb-4" />
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{s.value}</p>
                <p className="text-white/90 text-sm sm:text-base font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <FadeIn>
              <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-3 sm:mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] leading-tight mb-4 sm:mb-6">
                Built by Enterprise Technology Leaders
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-6 sm:mb-8"></div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 sm:space-y-5 text-[#6B7280] text-base sm:text-lg leading-relaxed">
                <p>
                  IITCG was founded by technology leaders with 30+ years of combined experience building enterprise systems for Fortune 500 companies, global airlines, and financial institutions.
                </p>
                <p>
                  We specialize in three high-impact industries: <strong className="text-[#0A2540]">Travel, BFSI, and Digital Commerce</strong>. Our deep domain expertise means we understand your business challenges, not just your technology requirements.
                </p>
                <p>
                  From AI automation to cloud-native architectures, we deliver production-ready solutions that drive measurable business outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-3 sm:mb-4 text-center">Our Values</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-10 sm:mb-14 text-center">What We Stand For</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all h-full group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${v.color}`}></div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg relative z-10`}>
                    <v.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2 sm:mb-3 relative z-10">{v.title}</h3>
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed relative z-10">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Want to Work With Us?</h2>
                <p className="text-base sm:text-lg text-[#6B7280] mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help accelerate your digital transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-8 h-12 sm:h-14 shadow-xl">
                      Get in Touch <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+919811298451">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 h-12 sm:h-14">
                      <Phone className="mr-2" size={20} />
                      Call +91 9811298451
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
