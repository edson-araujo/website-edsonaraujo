import { useTranslations } from 'next-intl';
import { Hero } from '@/components/home/hero';
import instagramInfo from "@/content/instagramInfo.json"; 
import { About } from '@/components/home/about';
import { Timeline } from '@/components/home/timeline';
import { PortfolioPreview } from '@/components/home/portfolio-preview';
import { Footer } from '@/components/footer';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <>
      <Hero instagramData={instagramInfo} />
      <About />
      <Timeline />
      <PortfolioPreview />
    </>
  );
}
