import clsx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";
import { Link } from "../link";
import { HoverEffect } from "./header.desktop-nav.hover-effect";
import { HEADER } from "../../content/pages";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const DesktopNav: FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('Header');

  return (
    <>
      <nav className="header-nav group relative isolate mt-auto hidden h-full md:flex">
        <HoverEffect />
        {HEADER.nav
          .filter(({ desktop }) => desktop)
          .map((link, i) => {
            const isActive = pathname.split(/[#?]/)[0] === link.href;
            return (
              <div
                className="my-auto flex h-full items-center px-2"
                key={link.href + link.title + i}
              >
                <Link
                  href={`/${locale}${link.href}`}
                  className={clsx(
                    "relative z-10 flex rounded-md border-2 border-transparent py-1.5 px-4 text-gray-500 outline-none transition-all hfa:text-gray-900 hfa:outline-none d:text-gray-300 d:hfa:text-gray-50",
                    isActive &&
                      "border-gray-700/5 bg-gray-100 bg-clip-padding d:border-gray-50/10 d:bg-gray-800 group-hfa:bg-gray-200/30"
                  )}
                >
                  <span className="text-sm font-medium ">{t(link.title)}</span>
                </Link>
              </div>
            );
          })}
      </nav>
    </>
  );
};
