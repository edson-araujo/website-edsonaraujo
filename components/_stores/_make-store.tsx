"use client";

import React, { createContext, Dispatch, SetStateAction, useContext, useState, useMemo, ReactNode } from 'react';

export function makeStore<S>(defaultValue: S, displayName = "") {
  const context = createContext<[S, Dispatch<SetStateAction<S>>]>([defaultValue, () => {}]);

  if (displayName !== "") {
    context.displayName = displayName;
  }

  const Provider = ({ init = defaultValue, children }: { children: ReactNode; init?: S }) => {
    const [state, setState] = useState<S>(init);
    const contextValue: [S, Dispatch<SetStateAction<S>>] = useMemo(() => [state, setState], [state]);
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = () => useContext(context);

  return { Provider, useStore };
}
