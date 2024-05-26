import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components/home/hero';
import twitterInfo from "@/content/twitterInfo.json"; 
import { About } from '@/components/home/about';
import { Timeline } from '@/components/home/timeline';
import { PortfolioPreview } from '@/components/home/portfolio-preview';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <Hero twitterData={twitterInfo} />
      <About />
      <Timeline />
      <PortfolioPreview />
    </>
  );
}
