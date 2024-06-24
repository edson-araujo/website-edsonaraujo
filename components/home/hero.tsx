"use client";

import {
  DevicePhoneMobileIcon,
  LinkIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { Link } from "components/link";
import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Badge } from "../badge";
import { CodeEditor } from "../code-editor";
import ToggleSwitch from "../toggle-switch";
import { InstagramProfile } from "../instagram-profile";
import { useHeroContent } from "../home/heroContent";
import { useLocale, useTranslations } from "next-intl";
import party from "party-js";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

type HeroProps = {
  instagramData: {
    profile_image_url: string;
    name: string;
    username: string;
    description: string;
    following_count: string;
    followers_count: string;
  };
};

export const Hero: FC<{ instagramData: any }> = ({ instagramData }) => {
  const { theme, setTheme } = useTheme();
  const HERO = useHeroContent();
  const t = useTranslations("Hero");
  const locale = useLocale();

  useEffect(() => {
    // Isso garante que a manipulação do DOM só ocorra no cliente
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.party-js.woff";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="hero relative overflow-hidden pb-40">
      <div className="relative mx-auto flex max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 py-16 md:px-8 md:py-20 lg:grid">
        <section className="col-span-2">
          <header>
            <div className="heading-pre">{HERO.pre}</div>
            <h1 className="heading-hero">{HERO.heading}</h1>
            <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
              {HERO.tech.map(({ name, Icon }) => (
                <li
                  className="flex items-center gap-2 text-gray-500 d:text-gray-400"
                  key={name}
                >
                  <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
                  {name}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <p className="mb-3 max-w-full font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
              {t("body1")}
              <em
                className="relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
                onClick={(e) => {
                  e.currentTarget.classList.remove("before:absolute");
                  party.confetti(e.currentTarget, { count: 100 });
                }}
              >
                {t("great")}
              </em>
              <span className="mt-4 block" />
              {t("body2")}
              <Link
                target="_blank"
                href="https://nextjs.org/"
                className="underline hfa:text-sky-500"
              >
                Next.js
              </Link>{" "}
              {t('and')}{" "}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="underline hfa:text-sky-500"
              >
                Tailwind
              </Link>
              .
            </p>
          </main>
          <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
            {HERO.cta1 ? (
              <Link
                href={HERO.cta1.href}
                className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12"
              >
                {HERO.cta1.name}
              </Link>
            ) : null}

            {HERO.cta2 ? (
              <Link
                href={`/${locale}${HERO.cta2.href}`}
                className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12"
              >
                {HERO.cta2.name}
              </Link>
            ) : null}
          </footer>
        </section>
        <div className="background pointer-events-none absolute inset-0 select-none">
          <div className="relative top-1/2 left-1/2 h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-cyan-500/30 to-sky-600/30 blur-3xl"></div>
        </div>
        <section className="relative md:h-[420px]">
          <div className="relative flex h-full min-w-[460px] flex-col gap-4 sm:min-w-[660px] lg:absolute lg:left-6 lg:left-8 lg:top-16 lg:top-24 lg:min-w-[460px]">
            <div className="relative z-20 flex justify-start gap-1.5">
              <Badge style="info">{t("Badge.Cinephile")}</Badge>
              <Badge style="success">{t("Badge.Geek")}</Badge>
              <Badge style="warning">{t("Badge.Gym")}</Badge>
              <Badge style="plain">{t("Badge.Technology")}</Badge>
            </div>
            <div className="relative flex h-full flex-col">
              <CodeEditor code={HERO.code} language="tsx" />
              <div className="absolute -bottom-5 -right-5 -z-10 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] rounded-lg border border-gray-400/20 bg-gray-100/70 [mask-image:linear-gradient(-30deg,#fff_16.35%,rgb(255_255_255_/_0%)_61.66%)] d:border-gray-700/20 d:bg-gray-900/40"></div>
            </div>
            <div className="z-10 mt-1 flex gap-2 lg:-mt-2 lg:ml-16">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/edson-alves-araujo/"
                className="group flex items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding px-3 py-1.5 text-sm font-medium text-primary-800 transition-all hfa:border-primary-800/30 hfa:bg-primary-800 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-primary-800"
                data-tip={t("FollowLinkedin")}
              >
                <span className="p-1 rounded-full bg-primary-800">
                  <FaLinkedinIn color="white" fontSize="0.7em" />
                </span>
                <span className="pl-1">Linkedin</span>
              </Link>
              <Link
                target="_blank"
                href="https://wa.me/5513988473945?text=Edson%21"
                className="group flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding text-sm font-medium text-gray-600 transition-all hfa:border-green-600/30 hfa:bg-green-50 hfa:text-green-50 d:bg-gray-700 d:text-gray-50 d:hfa:bg-green-50"
                data-tip="Whatsapp"
              >
                <span className="sr-only">Whatsapp</span>
                <span className="p-1 rounded-full bg-green-50">
                  <SiWhatsapp color="white" fontSize="0.7em"/>
                </span>
              </Link>
              <ToggleSwitch
                enabled={theme === "dark"}
                setEnabled={(bool) => setTheme(bool ? "dark" : "light")}
                enabledIcon={<MoonIcon className="h-3 w-3 text-slate-400" />}
                disabledIcon={<SunIcon className="h-4 w-4 text-orange-400" />}
              />
            </div>
          </div>
          <div className="absolute hidden sm:-right-5 sm:top-24 sm:block lg:-left-64 lg:top-full">
            <InstagramProfile {...instagramData} />
          </div>
        </section>
        
      </div>
    </section>
  );
};
