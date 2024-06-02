"use client";
import { siteConfig } from "@/components/links/site-config";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import GridItem from "@/components/links/grid-item";
import Social from "@/components/links/grid-items/social";
import Mentor from "@/components/links/grid-items/mentor";
import Project from "@/components/links/grid-items/project";
import Equipments from "@/components/links/grid-items/equipments";
import { useTranslations } from "next-intl";

const RightPanel = () => {
  const t = useTranslations("Links");
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.5,
  });

  // ANIMATION
  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [scope, animate, staggerGridItems]);

  return (
    <div ref={scope} className="grid w-full grid-cols-4 gap-6 py-6 xl:gap-10 xl:px-1 xl:py-10">
      {siteConfig.items.map((item, index) => {
        const background = item.background ?? "";
        const hoverBackground = item.hoverBackground ?? "";
        const translatedDescription = t(item.description);
        const translatedButtonTitle = t(item.buttonTitle);
        const translatedTitle = t(item.title);
        return (
          <GridItem
            key={item.title + item.type + index}
            size={item.layout}
            item={{ ...item, background, hoverBackground}}
          >
            {item.type === "social" ? (
              <Social item={{ ...item, description: translatedDescription, buttonTitle:  translatedButtonTitle, title: translatedTitle, }} />
            ) : item.type === "mentor" ? (
              <Mentor item={{ ...item, title: translatedTitle }} />
            ) : item.type === "project" ? (
              <Project item={{ ...item, title: translatedTitle }} />
            ) : item.type === "equipment" ? (
              <Equipments item={{ ...item, description: translatedDescription, title: translatedTitle, buttonTitle:  translatedButtonTitle }} />
            ) : (
              <div>Need to create new component type.</div>
            )}
          </GridItem>
        );
      })}
    </div>
  );
};

export default RightPanel;
