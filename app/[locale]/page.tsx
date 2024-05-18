import LanguageToggle from '@/components/LanguageToggle';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ClientComponent from '@/components/ClientComponent';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <div className="flex justify-between w-full px-8 py-8 mx-auto items-center container text-white mt-20">
        <div>
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}
