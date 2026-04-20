'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Globe, Smartphone, CheckCircle2, Phone, Zap } from 'lucide-react';
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
  { icon: Code2, title: 'Full-Stack Development', desc: 'Modern web and mobile applications built with React, Node.js, TypeScript, and cloud-native architectures.' },
  { icon: Layers, title: 'Microservices Architecture', desc: 'Decompose monoliths into scalable microservices with proper domain boundaries and API design.' },
  { icon: Globe, title: 'Cloud-Native Applications', desc: 'Applications designed for AWS, Azure, or GCP with container orchestration, serverless, and auto-scaling.' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Cross-platform mobile applications with React Native or native development for iOS and Android.' },
];

const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'GraphQL', 'PostgreSQL', 'MongoDB'];

const benefits = [
  'Agile development methodology',
  'Clean, maintainable code',
  'Comprehensive testing (Unit, Integration, E2E)',
  'CI/CD pipeline setup',
  'Production deployment & monitoring',
  'Post-launch support & maintenance',
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 opacity-10"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-6">Software Development</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A2540] leading-tight max-w-4xl mb-6">
              Build Modern{' '}
              <span className="gradient-text">Digital Products</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Scalable, maintainable applications built with cutting-edge technology stacks and industry best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold text-base px-8 h-12 shadow-xl">
                  Start Your Project
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

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">Development Services</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mb-14">
              End-to-end development services from concept to deployment
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
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

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Technology Stack</h2>
            <p className="text-lg text-[#6B7280] mb-10">Modern, proven technologies for enterprise-grade applications</p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-4">
              {technologies.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-xl glass-effect text-base text-[#0A2540] font-semibold hover:shadow-lg transition-shadow"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
                Our Development <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                We follow industry best practices to deliver high-quality software on time and within budget.
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-[#0A2540] font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-effect rounded-3xl p-8 lg:p-12">
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Fast Time-to-Market</h3>
                <p className="text-[#6B7280] mb-6">
                  Launch your product faster with our agile development approach. We deliver working software in 2-week sprints.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="text-3xl font-bold gradient-text mb-1">2-4</div>
                    <div className="text-sm text-[#6B7280]">Weeks to MVP</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                    <div className="text-sm text-[#6B7280]">Code Coverage</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full gradient-bg text-white hover:opacity-90 font-semibold h-12 shadow-xl">
                      Start Building <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
