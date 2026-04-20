'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, BarChart3, Plane, Landmark, ShoppingCart, ArrowRight, CheckCircle2, Zap, Shield, Rocket, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';

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

const capabilities = [
  { icon: Brain, title: 'AI & Automation', desc: 'AI chatbots, workflow automation, GenAI solutions, and predictive analytics for enterprise.', href: '/ai-solutions' },
  { icon: Code2, title: 'Digital Engineering', desc: 'Modern applications built with React, Node.js, and cloud-native architectures at scale.', href: '/what-we-do/development' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS, Azure, GCP with CI/CD, infrastructure as code, and zero-downtime deployments.', href: '/what-we-do/consulting' },
  { icon: BarChart3, title: 'Data & Analytics', desc: 'Real-time data pipelines, business intelligence, and ML-powered analytics platforms.', href: '/what-we-do/data-ai' },
];

const industries = [
  { icon: Plane, title: 'Travel', desc: 'Booking engines, OTA platforms, GDS integration, and travel CRM systems.', href: '/travel-solutions', color: '#0066FF' },
  { icon: Landmark, title: 'BFSI', desc: 'Payment systems, lending platforms, fraud detection, and compliance technology.', href: '/bfsi-solutions', color: '#0A2540' },
  { icon: ShoppingCart, title: 'Digital Commerce', desc: 'E-commerce platforms, marketplace systems, and personalization engines.', href: '/digital-commerce-solutions', color: '#7C3AED' },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Slider Section - Full Width */}
      <section className="w-full">
        <HeroSlider />
      </section>

      {/* Stats Section - Full Width with Gradient */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+', label: 'Enterprise Clients' },
              { value: '30+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities - Full Width with Pattern Background */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-3 sm:mb-4 text-center sm:text-left">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4 text-center sm:text-left">What We Build</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mb-10 sm:mb-14 text-center sm:text-left">Cutting-edge technology solutions powered by AI and modern architecture</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <Link href={cap.href}>
                  <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all group h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"></div>
                    <cap.icon size={28} className="text-blue-600 mb-4 sm:mb-5" />
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2 sm:mb-3 group-hover:gradient-text transition-all">{cap.title}</h3>
                    <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">{cap.desc}</p>
                    <ArrowRight className="mt-3 sm:mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Full Width with Gradient Background */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-3 sm:mb-4 text-center sm:text-left">Industries</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4 text-center sm:text-left">Deep Industry Focus</h2>
            <p className="text-base sm:text-lg text-[#6B7280] max-w-xl mb-10 sm:mb-14 text-center sm:text-left">We specialize in three high-impact industries where technology creates the most value.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.1}>
                <Link href={ind.href}>
                  <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all group h-full relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-3xl opacity-30" style={{ backgroundColor: ind.color }}></div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg relative z-10" style={{ background: `linear-gradient(135deg, ${ind.color}, ${ind.color}dd)` }}>
                      <ind.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2 sm:mb-3 group-hover:gradient-text transition-all relative z-10">{ind.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-3 sm:mb-4 relative z-10">{ind.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" style={{ color: ind.color }}>
                      Explore Solutions <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Highlight - Full Width with Image Background */}
      <section className="w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <FadeIn>
              <p className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3 sm:mb-4">AI & Automation</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">Reduce Costs with AI Automation</h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8">
                We help companies implement AI chatbots, workflow automation, and generative AI solutions that deliver measurable ROI.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  { icon: Zap, text: '40% average cost reduction' },
                  { icon: Rocket, text: '80% faster customer response' },
                  { icon: CheckCircle2, text: '10x productivity improvement' },
                  { icon: Shield, text: 'Production-ready in 90 days' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-blue-300" />
                    </div>
                    <span className="text-sm sm:text-base text-white font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Link href="/ai-solutions">
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 h-12 sm:h-14 shadow-xl">
                  Explore AI Solutions <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'AI Chatbots', value: 'Intelligent support', color: 'from-blue-500 to-cyan-500' },
                  { label: 'AI Call Center', value: 'Voice automation', color: 'from-purple-500 to-pink-500' },
                  { label: 'GenAI', value: 'Content generation', color: 'from-pink-500 to-rose-500' },
                  { label: 'Predictive Analytics', value: 'Data forecasting', color: 'from-cyan-500 to-blue-500' },
                ].map((item) => (
                  <div key={item.label} className={`glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform bg-gradient-to-br ${item.color} bg-opacity-10`}>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-1 sm:mb-2">{item.label}</h4>
                    <p className="text-white/70 text-xs sm:text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">
                  Ready to build your next platform?
                </h2>
                <p className="text-base sm:text-lg text-[#6B7280] mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help you build scalable, AI-driven digital systems that transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14 shadow-xl">
                      Book Strategy Call <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+919811298451">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-14">
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
