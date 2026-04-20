'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'What We Do', href: '#', dropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'AI', href: '/ai-solutions' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
];

const dropdownLinks = [
  { name: 'Consulting', href: '/what-we-do/consulting' },
  { name: 'Development', href: '/what-we-do/development' },
  { name: 'Data & AI', href: '/what-we-do/data-ai' },
  { name: 'BFSI Solutions', href: '/what-we-do/bfsi' },
  { name: 'Digital Commerce', href: '/what-we-do/digital-commerce' },
  { name: 'Travel Technology', href: '/what-we-do/travel-technology' },
  { name: 'Resourcing', href: '/what-we-do/resourcing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith('/admin')) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-[#E5E7EB]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text tracking-tight">
            IITCG
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                    pathname?.startsWith('/what-we-do') ? 'text-[#0066FF]' : 'text-[#6B7280] hover:text-[#0A2540]'
                  }`}>
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-[#E5E7EB] shadow-lg py-2"
                      >
                        {dropdownLinks.map((dl) => (
                          <Link
                            key={dl.href}
                            href={dl.href}
                            className="block px-4 py-2.5 text-sm text-[#6B7280] hover:text-[#0066FF] hover:bg-[#F7F9FC] transition-colors"
                          >
                            {dl.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href ? 'text-[#0066FF]' : 'text-[#6B7280] hover:text-[#0A2540]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+919811298451" className="flex items-center gap-2 text-xs font-semibold text-[#0066FF] hover:text-[#0055DD] transition-colors">
              <Phone size={14} />
              <span className="hidden xl:inline">+91 9811298451</span>
            </a>
            <Link href="/contact">
              <Button className="gradient-bg text-white hover:opacity-90 font-semibold px-5 h-10 shadow-lg text-sm">
                Contact Us
              </Button>
            </Link>
          </div>

          <button className="lg:hidden text-[#0A2540] p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E5E7EB]"
          >
            <div className="px-4 sm:px-6 py-6 space-y-3 max-w-7xl mx-auto">
              <Link href="/" className="block py-2 text-[#0A2540] font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              <div>
                <button onClick={() => setMobileDropdown(!mobileDropdown)} className="flex items-center gap-1 py-2 text-[#0A2540] font-medium w-full">
                  What We Do <ChevronDown size={14} className={`transition-transform ${mobileDropdown ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {dropdownLinks.map((dl) => (
                      <Link key={dl.href} href={dl.href} className="block py-2 text-sm text-[#6B7280]" onClick={() => setMobileOpen(false)}>
                        {dl.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/industries" className="block py-2 text-[#0A2540] font-medium" onClick={() => setMobileOpen(false)}>Industries</Link>
              <Link href="/ai-solutions" className="block py-2 text-[#0A2540] font-medium" onClick={() => setMobileOpen(false)}>AI</Link>
              <Link href="/insights" className="block py-2 text-[#0A2540] font-medium" onClick={() => setMobileOpen(false)}>Insights</Link>
              <Link href="/about" className="block py-2 text-[#0A2540] font-medium" onClick={() => setMobileOpen(false)}>About</Link>
              <a href="tel:+919811298451" className="flex items-center gap-2 py-3 text-[#0066FF] font-semibold border-t border-[#E5E7EB] mt-2">
                <Phone size={18} />
                +91 9811298451
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gradient-bg text-white font-semibold h-12 shadow-lg">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
