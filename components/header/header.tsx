'use client';

import React, { FC, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { DesktopNav } from "./header.desktop-nav";
import { ProfileNav } from "./header.settings";
import { MobileNav } from "./header.mobile-nav";

export const Header: FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 w-full border-b border-gray-800/10 bg-white/50 backdrop-blur d:border-gray-100/10 d:bg-gray-900/40 print:hidden">
      <div className="mx-auto flex h-full max-w-6xl grid-cols-2 items-center gap-1 px-4 md:grid md:gap-4 md:px-8">
        <DesktopNav />
        <ProfileNav showNav={showNav} />
        <MobileNav showNav={showNav} setShowNav={setShowNav}/>
        <div className="background pointer-events-none absolute inset-0 z-0 select-none ">
          
        </div>
      </div>
    </header>
  );
}
