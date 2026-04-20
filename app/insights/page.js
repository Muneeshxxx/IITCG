'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, TrendingUp, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const categoryColors = {
  AI: 'text-blue-600 bg-blue-100',
  Cloud: 'text-sky-600 bg-sky-100',
  DevOps: 'text-green-600 bg-green-100',
  Travel: 'text-orange-600 bg-orange-100',
  Data: 'text-purple-600 bg-purple-100',
  Education: 'text-pink-600 bg-pink-100'
};

export default function InsightsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/api/blogs').then(r => r.json()).then(data => { if (data.success) setBlogs(data.data); }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const categories = ['All', ...new Set(blogs.map(b => b.category))];
  const filtered = filter === 'All' ? blogs : blogs.filter(b => b.category === filter);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero - Full Width */}
      <section className="w-full relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7C3AED 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mb-4 sm:mb-6 mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm font-semibold gradient-text uppercase tracking-widest mb-4 sm:mb-6 text-center sm:text-left">Insights & Perspectives</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] max-w-4xl mb-4 sm:mb-6 text-center sm:text-left">Latest Thinking</h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6B7280] max-w-3xl leading-relaxed text-center sm:text-left">
              Expert perspectives on AI, digital transformation, and enterprise technology from our team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Blogs - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14 justify-center sm:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all font-semibold ${
                    filter === cat ? 'gradient-bg text-white shadow-lg scale-105' : 'glass-effect text-[#6B7280] hover:text-[#0A2540] hover:shadow-md'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="glass-effect rounded-2xl p-6 sm:p-8 animate-pulse">
                  <div className="h-4 bg-[#E5E7EB] rounded w-20 mb-4" />
                  <div className="h-6 bg-[#E5E7EB] rounded w-full mb-3" />
                  <div className="h-4 bg-[#E5E7EB] rounded w-3/4 mb-2" />
                  <div className="h-4 bg-[#E5E7EB] rounded w-full" />
                </div>
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((blog, i) => (
                <FadeIn key={blog.id} delay={i * 0.05}>
                  <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all h-full flex flex-col group cursor-pointer">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-4 ${
                      categoryColors[blog.category] || 'text-[#6B7280] bg-[#F7F9FC]'
                    }`}>
                      {blog.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3 flex-1 group-hover:gradient-text transition-all">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-[#6B7280] pt-4 border-t border-[#E5E7EB]">
                      <span className="flex items-center gap-1">
                        <TrendingUp size={14} />
                        {blog.readTime}
                      </span>
                      <span className="font-medium">{blog.author}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-lg text-[#6B7280]">No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Stay Updated</h2>
                <p className="text-base sm:text-lg text-[#6B7280] mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Get our latest insights on AI, digital transformation, and enterprise technology delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto gradient-bg text-white hover:opacity-90 font-semibold px-8 h-12 sm:h-14 shadow-xl">
                      Subscribe <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <a href="tel:+919811298451">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 h-12 sm:h-14">
                      <Phone className="mr-2" size={20} />
                      Talk to Us
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
