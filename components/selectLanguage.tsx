'use client';

import React, { FC, useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Flag from 'react-world-flags';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const SelectLanguage: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('SelectLanguage');
  const [selectedLocale, setSelectedLocale] = useState(router.locale);

  useEffect(() => {
    setSelectedLocale(router.locale);
  }, [router.locale]);

  const changeLocale = (locale: string) => {
    const newPathname = pathname.replace(/^\/(en|fr|pt|es)/, `/${locale}`);
    router.push(`${newPathname}?${searchParams.toString()}`);
    setSelectedLocale(locale);
  };

  const renderFlag = (locale: string) => {
    switch (locale) {
      case 'en':
        return <Flag code="US" className="inline-block mr-2" width="20" />;
      case 'fr':
        return <Flag code="FR" className="inline-block mr-2" width="20" />;
      case 'pt':
        return <Flag code="BR" className="inline-block mr-2" width="20" />;
      case 'es':
        return <Flag code="ES" className="inline-block mr-2" width="20" />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center">
          {renderFlag(selectedLocale)}
          <span>{t(selectedLocale)}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          {renderFlag('en')} {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('fr')}>
          {renderFlag('fr')} {t('french')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('pt')}>
          {renderFlag('pt')} {t('portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('es')}>
          {renderFlag('es')} {t('spanish')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLanguage;
