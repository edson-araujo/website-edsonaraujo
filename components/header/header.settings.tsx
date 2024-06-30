import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { FC } from 'react';
import { SiGithub } from 'react-icons/si';
import DarkmodeIcon from '../darkmode-icon';
import SelectLanguage from '../selectLanguage';
import { useTranslations } from "next-intl";
import { TbFileDownload } from 'react-icons/tb';
import { Link } from '../link';
import { HiOutlineDocumentDownload } from "react-icons/hi";

type ProfileNavProps = {
  showNav: boolean;
};

export const ProfileNav: FC<ProfileNavProps> = ({ showNav }) => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Header');
  const { locale } = useRouter();
  const resumePath = locale === 'pt' ? '/docs/pt/Curriculo-Edson-Araujo.pdf' : '/docs/en/English-Curriculo-EdsonAraujo.pdf';
  return (
    <nav className="z-10 ml-auto flex gap-1 pl-4">
      <SelectLanguage />
      <button
        type="button"
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900",
          showNav ? "h:text-gray-200" : "h:text-gray-900"
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="sr-only">Switch Color Theme</span>
        <DarkmodeIcon />
      </button>
      <Link
        href={resumePath}
        target="_blank"
        download="Curriculo-Edson-Araujo.pdf" 
        aria-label="Downlod Resume"
        data-tip={t('Curriculo')}
        className={clsx(
          "rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900",
          showNav ? "h:text-gray-200" : "h:text-gray-900"
        )}
      >
        <span className="sr-only">Curriculo</span>
        <HiOutlineDocumentDownload  className="h-5 w-5" />
      </Link>
      <Link
        target="_blank"
        href="mailto:edsonaraujo.dev@gmail.com"
        className="button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex"
      >
        {t('ContactMe')}
      </Link>
    </nav>
  );
};
