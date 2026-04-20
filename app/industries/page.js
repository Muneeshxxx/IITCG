'use client';

import { motion } from 'framer-motion';
import { Plane, Landmark, ShoppingCart, ArrowRight, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const industries = [
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    primary: true,
    href: '/travel-solutions',
    desc: 'End-to-end technology solutions for airlines, OTAs, hotels, and travel companies.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    color: 'from-blue-600 to-cyan-600',
    solutions: ['Booking engines & reservation systems', 'OTA platform development', 'GDS integration (Amadeus, Sabre)', 'Travel CRM & loyalty platforms', 'Revenue management systems', 'AI-powered personalization'],
  },
  {
    icon: Landmark,
    title: 'Banking, Financial Services & Insurance',
    href: '/bfsi-solutions',
    desc: 'Secure, compliant technology for banks, insurers, and fintech companies.',
    image: 'https://images.pexels.com/photos/3945672/pexels-photo-3945672.jpeg?w=1920&q=80',
    color: 'from-purple-600 to-pink-600',
    solutions: ['Payment processing platforms', 'Digital lending & origination', 'AI fraud detection & prevention', 'Regulatory compliance automation', 'Risk assessment systems', 'Customer onboarding (KYC/AML)'],
  },
  {
    icon: ShoppingCart,
    title: 'Digital Commerce',
    href: '/digital-commerce-solutions',
    desc: 'Scalable commerce platforms for D2C brands, marketplaces, and retailers.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1920&q=80',
    color: 'from-pink-600 to-orange-600',
    solutions: ['Headless e-commerce platforms', 'Multi-vendor marketplace systems', 'Payment gateway integration', 'AI product recommendations', 'Omnichannel commerce', 'Inventory & fulfillment'],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <section className="w-full relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-4 sm:mb-6 text-center sm:text-left">Industries We Serve</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] max-w-5xl mb-4 sm:mb-6 leading-tight text-center sm:text-left">
              Deep Expertise in{' '}
              <span className="gradient-text">Three Industries</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl mb-8 sm:mb-10 leading-relaxed text-center sm:text-left">
              We focus exclusively on Travel, BFSI, and Digital Commerce—industries where technology creates the most business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-6 sm:px-8 h-12 sm:h-14 shadow-xl">
                  Discuss Your Project
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <a href="tel:+919811298451">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-8 h-12 sm:h-14">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries - Full Width Cards */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
          {industries.map((ind, i) => (
            <FadeIn key={ind.title}>
              <div className={`glass-effect rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${i % 2 === 0 ? '' : 'lg:mr-auto'}`}>
                <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-64 sm:h-80 lg:h-full min-h-[400px] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${ind.image})` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-80`}></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <ind.icon size={48} className="text-white" />
                      </div>
                    </div>
                    {ind.primary && (
                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                        <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold">
                          <Sparkles size={14} />
                          Primary Focus
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540] mb-3 sm:mb-4">{ind.title}</h3>
                    <p className="text-base sm:text-lg text-[#6B7280] mb-6 sm:mb-8 leading-relaxed">{ind.desc}</p>
                    
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {ind.solutions.map((sol, idx) => (
                        <motion.div
                          key={sol}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={14} className="text-white" />
                          </div>
                          <span className="text-sm sm:text-base text-[#6B7280]">{sol}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link href={ind.href}>
                      <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-6 sm:px-8 h-12 shadow-lg">
                        View {ind.title.split(' ')[0]} Solutions
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Ready to Get Started?</h2>
                <p className="text-base sm:text-lg text-[#6B7280] mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our industry expertise can accelerate your digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-8 h-12 sm:h-14 shadow-xl">
                      Contact Us <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+919811298451">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 h-12 sm:h-14">
                      <Phone className="mr-2" size={20} />
                      +91 9811298451
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
