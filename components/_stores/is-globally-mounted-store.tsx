"use client";

import { createContext, useContext, useState, useMemo, Dispatch, SetStateAction, ReactNode } from 'react';

const GloballyMountedContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {}]);

export const GloballyMountedProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false);
  const contextValue: [boolean, Dispatch<SetStateAction<boolean>>] = useMemo(() => [state, setState], [state]);
  return <GloballyMountedContext.Provider value={contextValue}>{children}</GloballyMountedContext.Provider>;
};

export const useIsGloballyMounted = () => useContext(GloballyMountedContext);
