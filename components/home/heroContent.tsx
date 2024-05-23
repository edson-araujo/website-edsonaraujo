// @ts-ignore
import heroCode from "!!raw-loader!content/code-blocks/heroCode.tsx"; // Adding `!!` to a request will disable all loaders specified in the configuration
import { Link } from "components/link";
import party from "party-js";
import { DiJava } from "react-icons/di";
import { SiLaravel, SiReact, SiSpring, SiTypescript } from "react-icons/si";
import { useTranslations } from 'next-intl';

interface IconProps {
  className: string;
}

export const useHeroContent = () => {
  const t = useTranslations('Hero');

  return {
    pre: t('pre'),
    heading: t.rich('heading', {
      strong: (children) => <strong>{children}</strong>,
    }),
    tech: [
      {
        name: t('tech.Java'),
        Icon: ({ className }: IconProps) => <DiJava className={className} />,
      },
      {
        name: t('tech.Spring Boot'),
        Icon: ({ className }: IconProps) => <SiSpring className={className} />,
      },
      {
        name: t('tech.TypeScript'),
        Icon: ({ className }: IconProps) => <SiTypescript className={className} />,
      },
      {
        name: t('tech.React'),
        Icon: ({ className }: IconProps) => <SiReact className={className} />,
      },
      {
        name: t('tech.Laravel'),
        Icon: ({ className }: IconProps) => <SiLaravel className={className} />,
      }
    ],
    body: '',
    cta1: {
      href: t('cta1.href'),
      name: t('cta1.name'),
    },
    cta2: {
      href: t('cta2.href'),
      name: t('cta2.name'),
    },
    code: `${heroCode}`,
  };
};
