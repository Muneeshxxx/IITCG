'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Database, TrendingUp, Sparkles, CheckCircle2, Phone, Cpu } from 'lucide-react';
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
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Build intelligent systems with predictive analytics, natural language processing, and computer vision capabilities.' },
  { icon: Database, title: 'Data Engineering', desc: 'Design and implement robust data pipelines, ETL processes, and data warehousing solutions at scale.' },
  { icon: TrendingUp, title: 'Business Intelligence', desc: 'Transform raw data into actionable insights with interactive dashboards and advanced analytics.' },
  { icon: Sparkles, title: 'Generative AI', desc: 'Leverage GPT, Claude, and other LLMs to build intelligent chatbots, content generation, and automation tools.' },
];

const useCases = [
  'Customer churn prediction',
  'Fraud detection & prevention',
  'Demand forecasting',
  'Recommendation engines',
  'Sentiment analysis',
  'Document processing automation',
];

export default function DataAIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 opacity-10"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-sm font-semibold gradient-text uppercase tracking-widest mb-6">Data & AI Solutions</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A2540] leading-tight max-w-4xl mb-6">
              Transform Data Into{' '}
              <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Unlock the power of AI and data analytics to drive smarter decisions, automate workflows, and predict future trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold text-base px-8 h-12 shadow-xl">
                  Explore AI Solutions
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold text-base px-8 h-12">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">Our AI & Data Services</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mb-14">
              Comprehensive data and AI solutions to accelerate your digital transformation
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
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

      {/* AI Impact */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&q=80)', backgroundSize: 'cover' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <Cpu className="w-16 h-16 text-purple-300 mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Measurable AI Impact
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our AI solutions deliver tangible business results across industries.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '40%', label: 'Cost Reduction' },
                  { value: '10x', label: 'Faster Processing' },
                  { value: '95%', label: 'Accuracy Rate' },
                  { value: '90 days', label: 'Time to Production' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-effect rounded-2xl p-6 text-center bg-white/5"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="glass-effect rounded-3xl p-8 lg:p-12 bg-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Popular AI Use Cases</h3>
                <div className="space-y-3 mb-8">
                  {useCases.map((useCase, i) => (
                    <motion.div
                      key={useCase}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <span className="text-white font-medium">{useCase}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-purple-900 hover:bg-purple-50 font-semibold h-12 shadow-xl">
                    Discuss Your AI Project <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Ready to Leverage AI?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Schedule a free AI readiness assessment with our data science experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold px-8 h-12 shadow-xl">
                  Book Free Assessment <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 h-12">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
