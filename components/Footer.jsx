'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Travel Technology', href: '/travel-solutions' },
    { name: 'BFSI Solutions', href: '/bfsi-solutions' },
    { name: 'Digital Commerce', href: '/digital-commerce-solutions' },
  ],
  Services: [
    { name: 'Consulting', href: '/what-we-do/consulting' },
    { name: 'Development', href: '/what-we-do/development' },
    { name: 'Data & AI', href: '/what-we-do/data-ai' },
    { name: 'Resourcing', href: '/what-we-do/resourcing' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              IITCG
            </Link>
            <p className="mt-4 text-sm text-[#6B7280] leading-relaxed">
              AI-driven platforms for Travel, BFSI & Digital Commerce. Built by experts with 30+ years of enterprise experience.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:+919811298451" className="flex items-center gap-2 text-sm text-[#0066FF] hover:text-[#0055DD] font-medium transition-colors">
                <Phone size={16} />
                +91 9811298451
              </a>
              <a href="mailto:info@iitcg.com" className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0066FF] transition-colors">
                <Mail size={16} />
                info@iitcg.com
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[#0A2540] uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#6B7280] hover:text-[#0066FF] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B7280]">&copy; {new Date().getFullYear()} IITCG. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-[#6B7280] hover:text-[#0A2540]">Privacy</Link>
            <Link href="#" className="text-sm text-[#6B7280] hover:text-[#0A2540]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
