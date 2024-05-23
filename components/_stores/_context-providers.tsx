"use client";

import React, { FC, PropsWithChildren } from "react";
import { NotificationsProvider } from "@/components/_stores/notifications-store";
import { PreloadedImagesProvider } from "@/components/_stores/preloaded-images-store";
import { TooltipProvider } from "@/components/_stores/tooltip-store";
import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion";
import { GloballyMountedProvider } from "./is-globally-mounted-store";

export const ContextProviders: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <PreloadedImagesProvider>
      <NotificationsProvider>
        <ThemeProvider attribute="class" defaultTheme="system">
          <LazyMotion features={domAnimation}>
            <TooltipProvider>
              <GloballyMountedProvider>{children}</GloballyMountedProvider>
            </TooltipProvider>
          </LazyMotion>
        </ThemeProvider>
      </NotificationsProvider>
    </PreloadedImagesProvider>
  );
};
