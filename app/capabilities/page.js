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

const capabilities = [
  {
    icon: Brain,
    title: 'AI & GenAI Transformation',
    problem: 'Organizations struggle to move AI from experimentation to production at scale.',
    solution: 'End-to-end AI implementation from strategy to deployment, including LLM integration, RAG systems, and custom model development.',
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'AWS SageMaker'],
    outcome: 'Production-grade AI systems delivering measurable ROI within 90 days.'
  },
  {
    icon: Layers,
    title: 'SAP / HANA & Enterprise Systems',
    problem: 'Complex ERP implementations with high failure rates and budget overruns.',
    solution: 'Structured SAP implementation methodology with accelerators for faster deployment and change management.',
    technologies: ['SAP S/4HANA', 'SAP BTP', 'ABAP', 'Fiori', 'Integration Suite'],
    outcome: 'On-time, on-budget SAP deployments with 99.9% system availability.'
  },
  {
    icon: Code2,
    title: 'Digital Engineering',
    problem: 'Legacy systems that cannot support modern customer experiences and business agility.',
    solution: 'Modern application development using microservices, SPAs, and cloud-native patterns.',
    technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js'],
    outcome: 'Applications that are 3x faster to market with 40% lower maintenance costs.'
  },
  {
    icon: Shield,
    title: 'DevOps & DevSecOps',
    problem: 'Slow release cycles, manual processes, and security as an afterthought.',
    solution: 'Automated CI/CD pipelines with integrated security scanning, infrastructure as code, and observability.',
    technologies: ['Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD', 'SonarQube'],
    outcome: 'Deploy 10x more frequently with zero-downtime releases and built-in security.'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    problem: 'Expensive, underutilized cloud infrastructure with security and compliance gaps.',
    solution: 'Cloud strategy, migration, and optimization across AWS, Azure, and GCP with cost governance.',
    technologies: ['AWS', 'Azure', 'GCP', 'CloudFormation', 'Pulumi'],
    outcome: '30-40% cloud cost reduction with improved performance and compliance.'
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    problem: 'Siloed data, lack of real-time insights, and inability to leverage data for decisions.',
    solution: 'Modern data platforms with real-time pipelines, data warehouses, and self-service analytics.',
    technologies: ['Snowflake', 'Databricks', 'Apache Spark', 'dbt', 'Power BI'],
    outcome: 'Data-driven decision making with insights available in minutes, not weeks.'
  },
  {
    icon: BarChart3,
    title: 'QA Automation',
    problem: 'Manual testing bottlenecks that slow delivery and miss critical defects.',
    solution: 'Comprehensive test automation frameworks covering API, UI, performance, and security testing.',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'JMeter', 'Postman'],
    outcome: '80% reduction in testing time with 95%+ automated test coverage.'
  },
  {
    icon: Cpu,
    title: 'CRM & Enterprise Applications',
    problem: 'Disconnected customer data and inefficient business processes.',
    solution: 'Custom CRM implementations and enterprise application integration for unified customer views.',
    technologies: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'MuleSoft', 'APIs'],
    outcome: 'Unified customer experience with 360-degree visibility across all touchpoints.'
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing Technology',
    problem: 'Fragmented marketing tech stacks with poor attribution and wasted ad spend.',
    solution: 'Integrated martech platforms with AI-driven attribution, audience segmentation, and campaign automation.',
    technologies: ['Google Analytics 4', 'Segment', 'Braze', 'Looker', 'BigQuery'],
    outcome: 'Data-driven marketing with clear attribution and optimized ROAS.'
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/[0.04] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-widest mb-4">Capabilities</p>
            <h1 className="text-5xl lg:text-7xl font-bold max-w-4xl">
              Technology Expertise That{' '}
              <span className="gradient-text">Delivers Results</span>
            </h1>
            <p className="mt-6 text-lg text-[#A1A1AA] max-w-2xl">
              Nine core practice areas, each led by domain experts with deep industry experience.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {capabilities.map((cap, i) => (
            <AnimateIn key={cap.title} delay={0.05}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="glow-card rounded-xl p-8 lg:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center shrink-0">
                    <cap.icon size={24} className="text-[#00E5FF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">{cap.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Problem</p>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">{cap.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#00E5FF] uppercase tracking-wider mb-2">Solution</p>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">{cap.solution}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cap.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-[#222222] text-[#A1A1AA]">{tech}</span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#222222]">
                      <p className="text-sm"><span className="text-[#7C3AED] font-semibold">Outcome:</span> <span className="text-[#A1A1AA]">{cap.outcome}</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <AnimateIn>
          <h2 className="text-4xl font-bold mb-6">Need a Specific Capability?</h2>
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
