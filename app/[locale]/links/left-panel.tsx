"use client";
import { siteConfig } from "@/components/links/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LeftPanel = () => {
  const t = useTranslations("Links");
  return (
    <aside
      key="left-panel"
      className="top-[144px] mb-auto flex max-h-min flex-col justify-between py-6 lg:sticky lg:spacing-8 xl:h-full xl:max-w-sm xl:py-10 print:!hidden"
    >
      {/* Top Container */}
      <div>
        <div>
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="https://avatars.githubusercontent.com/u/79815326?v=4"
            width={120}
            height={120}
            blurDataURL="https://avatars.githubusercontent.com/u/79815326?v=4"
            style={{ borderRadius: "100px" }}
          />
        </div>

        {/* Text Container */}
        <div className="mt-6">
          <h1 className="mt-2 justify-center text-4xl font-bold">{siteConfig.creator}</h1>
          <p className="text-2xl font-light text-neutral-500">{t(siteConfig.bio)}</p>
        </div>
        {/* Buttons Container */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex w-full items-center gap-2 rounded-md border border-neutral-100 px-4 py-2 text-sm font-medium dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex w-full items-center gap-2 rounded-md border border-neutral-100 px-4 py-2 text-sm font-medium dark:border-neutral-800"
          >
            <Mail size="14" />
            {t("contateMe")}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
