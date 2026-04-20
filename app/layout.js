import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IITCG - AI-Driven IT Consulting & Digital Marketing Solutions | Travel, BFSI & Digital Commerce',
  description: 'Leading IT consulting company specializing in AI automation, digital marketing, cloud solutions, and digital transformation for Travel, BFSI, and Digital Commerce. 30+ years expertise. Call +91 9811298451',
  keywords: 'IT consulting, digital marketing, AI consulting, digital transformation, travel technology solutions, BFSI solutions, digital commerce, DevOps consulting, cloud consulting, AI automation, enterprise technology consulting, digital marketing agency',
  authors: [{ name: 'IITCG' }],
  openGraph: {
    title: 'IITCG - AI-Driven IT Consulting & Digital Marketing Solutions',
    description: 'Transform your business with cutting-edge IT consulting and digital marketing services. AI, Cloud, Data Analytics, and Digital Transformation experts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IITCG - IT Consulting & Digital Marketing',
    description: 'AI-driven platforms for Travel, BFSI & Digital Commerce',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
