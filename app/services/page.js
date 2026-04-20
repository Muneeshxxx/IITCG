'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Cloud, Shield, Database, BarChart3, Cpu, Layers, Megaphone, ArrowRight } from 'lucide-react';
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

const services = [
  {
    icon: Brain,
    title: 'AI & GenAI Transformation',
    desc: 'Enterprise AI solutions from strategy to production. LLM integration, RAG systems, AI chatbots, and intelligent automation.',
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'AWS SageMaker'],
    highlight: true
  },
  {
    icon: Code2,
    title: 'Digital Engineering',
    desc: 'Modern application development using React, Node.js, microservices, and cloud-native architectures built for performance.',
    technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevSecOps',
    desc: 'Cloud strategy, migration, and optimization with integrated security. CI/CD pipelines, infrastructure as code, and observability.',
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'GitHub Actions']
  },
  {
    icon: Layers,
    title: 'Enterprise Platforms',
    desc: 'SAP, HANA, and enterprise-grade system implementations. ERP modernization and integration for global operations.',
    technologies: ['SAP S/4HANA', 'SAP BTP', 'Fiori', 'ABAP', 'Integration Suite']
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    desc: 'Modern data platforms with real-time pipelines, data warehouses, BI dashboards, and predictive analytics.',
    technologies: ['Snowflake', 'Databricks', 'Apache Spark', 'Power BI', 'dbt']
  },
  {
    icon: Shield,
    title: 'QA Automation',
    desc: 'End-to-end test automation, performance testing, and quality engineering for zero-defect delivery across platforms.',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'JMeter', 'Postman']
  },
  {
    icon: Cpu,
    title: 'CRM & Enterprise Applications',
    desc: 'Custom CRM implementations, enterprise application integration, and unified customer experience platforms.',
    technologies: ['Salesforce', 'HubSpot', 'Dynamics 365', 'MuleSoft', 'APIs']
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing Technology',
    desc: 'Integrated martech platforms with AI-driven attribution, audience segmentation, and campaign automation.',
    technologies: ['GA4', 'Segment', 'Braze', 'Looker', 'BigQuery']
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/[0.04] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">Services</p>
            <h1 className="text-5xl lg:text-7xl font-bold max-w-4xl">
              Technology Expertise{' '}
              <span className="gradient-text">That Delivers</span>
            </h1>
            <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl">
              Full-spectrum technology consulting powered by 30+ years of enterprise experience.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`glow-card rounded-xl p-8 h-full ${svc.highlight ? 'ring-1 ring-[#00E5FF]/20' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center mb-6">
                  <svc.icon size={24} className="text-[#00E5FF]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-[#222222] text-[#A1A1AA]">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <AnimateIn>
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-[#A1A1AA] mb-8 max-w-lg mx-auto">Let&apos;s discuss how our expertise can solve your unique challenges.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 font-semibold px-8 h-12">
              Talk to an Expert <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}
