'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Zap, Sparkles, BarChart3, ArrowRight, CheckCircle2, TrendingUp, Target, Shield, Phone, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const problems = [
  'AI projects stuck in proof-of-concept phase with no path to production',
  'Wasting budget on AI experiments with no measurable ROI',
  'Lack of internal AI/ML engineering talent and architecture expertise',
  'Data infrastructure not ready for AI workloads at scale',
  'Integration challenges between AI systems and existing enterprise platforms',
  'Security, compliance, and governance concerns blocking AI adoption',
];

const solutions = [
  { icon: Bot, title: 'AI Chatbots & Assistants', desc: 'Intelligent conversational agents powered by LLMs for customer service, internal support, and sales automation. Reduce response time by 80%.' },
  { icon: Phone, title: 'AI Call Center', desc: 'Automated voice support with natural language understanding. Handle 70% of calls without human intervention while improving satisfaction.' },
  { icon: Sparkles, title: 'Generative AI', desc: 'Custom content generation, code assistants, document processing, and creative automation. 10x productivity for knowledge workers.' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'Machine learning models for demand forecasting, risk assessment, churn prediction, and business optimization.' },
];

const metrics = [
  { value: '40%', label: 'Cost Reduction', desc: 'Average operational cost savings through AI automation' },
  { value: '80%', label: 'Faster Response', desc: 'Reduction in customer response time with AI chatbots' },
  { value: '10x', label: 'Productivity Gain', desc: 'Increase in content and code generation throughput' },
  { value: '90 Days', label: 'Time to Value', desc: 'From AI strategy to production deployment' },
];

const whyIITCG = [
  { icon: Crown, title: 'Senior AI Architects', desc: 'Every engagement led by senior engineers with 10+ years of AI/ML experience.' },
  { icon: Target, title: 'Business-First Approach', desc: 'We start with business outcomes, not technology. AI is the means, not the end.' },
  { icon: Users, title: 'End-to-End Delivery', desc: 'Strategy, architecture, development, deployment, and ongoing optimization.' },
  { icon: Shield, title: 'Enterprise Ready', desc: 'Production-grade systems with security, compliance, and governance built in.' },
];

export default function AIPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLead = async () => {
    if (!email) return;
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'AI Page Lead', email, service: 'AI Strategy Session' }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#7C3AED]/[0.06] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">AI Consulting</p>
            <h1 className="text-5xl lg:text-7xl font-bold max-w-4xl leading-tight">
              Stop Experimenting with AI.{' '}
              <span className="gradient-text">Start Scaling It.</span>
            </h1>
            <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl">
              We help enterprises move beyond AI experiments to production-grade systems that deliver real, measurable business value.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-semibold px-8 h-12">
                  Book AI Strategy Session
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-[#111111]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-4">The Challenge</p>
              <h2 className="text-4xl font-bold mb-8">Sound Familiar?</h2>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <span className="text-[#A1A1AA] text-lg">{p}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="glow-card rounded-xl p-10" style={{ borderColor: 'rgba(124,58,237,0.2)' }}>
                <p className="text-sm font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Our Promise</p>
                <h3 className="text-2xl font-bold mb-4">From Experiment to Enterprise</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  We don&apos;t just build AI models. We build production-grade AI systems that integrate with your enterprise, scale with your business, and deliver quantifiable ROI within 90 days.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">AI Solutions</p>
            <h2 className="text-4xl lg:text-5xl font-bold">AI That Works in Production</h2>
          </AnimateIn>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <AnimateIn key={sol.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glow-card rounded-xl p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                    <sol.icon size={24} className="text-[#7C3AED]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                  <p className="text-[#A1A1AA] leading-relaxed">{sol.desc}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-24 bg-[#111111]/30">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">ROI</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">Measurable Impact</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <AnimateIn key={m.label} delay={i * 0.1}>
                <div className="glow-card rounded-xl p-8 text-center">
                  <p className="text-4xl font-bold gradient-text">{m.value}</p>
                  <p className="mt-2 font-semibold text-sm">{m.label}</p>
                  <p className="mt-1 text-xs text-[#A1A1AA]">{m.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why IITCG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#7C3AED] uppercase tracking-widest mb-4">Why IITCG</p>
            <h2 className="text-4xl lg:text-5xl font-bold">Why Choose Us for AI</h2>
          </AnimateIn>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {whyIITCG.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glow-card rounded-xl p-8">
                  <item.icon size={24} className="text-[#7C3AED] mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111]/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Scale Your{' '}
              <span className="gradient-text">AI Strategy</span>?
            </h2>
            <p className="mt-6 text-lg text-[#A1A1AA]">
              Book a free AI strategy session with our senior architects.
            </p>
            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 text-[#00E5FF]">
                <CheckCircle2 size={20} />
                <span className="font-semibold">We&apos;ll be in touch within 24 hours!</span>
              </div>
            ) : (
              <div className="mt-8 flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0A0A0A] border-[#222222] text-white placeholder:text-[#555] focus:border-[#7C3AED] h-12"
                />
                <Button onClick={handleLead} className="bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white font-semibold px-6 h-12 shrink-0">
                  Book Session
                </Button>
              </div>
            )}
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
