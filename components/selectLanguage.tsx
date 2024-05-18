// src/components/selectLanguage.tsx
'use client';

import React, { FC, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Flag from 'react-world-flags';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

const SelectLanguage: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('SelectLanguage');

  const getBrowserLocale = () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const locale = navigator.language.split('-')[0];
      return ['en', 'fr', 'pt', 'es'].includes(locale) ? locale : 'en';
    }
    return 'en';
  };

  const initialLocale = pathname.split('/')[1] || getBrowserLocale();
  const [selectedLocale, setSelectedLocale] = useState(initialLocale);

  useEffect(() => {
    setSelectedLocale(initialLocale);
  }, [initialLocale]);

  const changeLocale = (locale: string) => {
    const basePathname =
      pathname.startsWith('/en') ||
      pathname.startsWith('/fr') ||
      pathname.startsWith('/pt') ||
      pathname.startsWith('/es')
        ? pathname.replace(/^\/(en|fr|pt|es)/, '')
        : pathname;
    const newPathname = `/${locale}${basePathname}`;
    router.push(newPathname);
    setSelectedLocale(locale);
  };

  const renderFlag = (locale: string) => {
    switch (locale) {
      case 'en':
        return <Flag code="US" className="inline-block" width="20" />;
      case 'fr':
        return <Flag code="FR" className="inline-block" width="20" />;
      case 'pt':
        return <Flag code="BR" className="inline-block" width="20" />;
      case 'es':
        return <Flag code="ES" className="inline-block" width="20" />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="flex items-center justify-center p-2">
          {renderFlag(selectedLocale)}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={5}
        align="center"
        className="mt-2 w-12 border border-gray-800/10 dark:border-gray-800 bg-white/50 backdrop-blur dark:bg-gray-900/40 shadow-lg rounded-md"
      >
        <DropdownMenuItem
          className="flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
          onClick={() => changeLocale('en')}
        >
          {renderFlag('en')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
          onClick={() => changeLocale('fr')}
        >
          {renderFlag('fr')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
          onClick={() => changeLocale('pt')}
        >
          {renderFlag('pt')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer"
          onClick={() => changeLocale('es')}
        >
          {renderFlag('es')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLanguage;
