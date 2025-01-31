'use client';

import { LSMessageKey } from '@/shared/types';
import { createContext, useContext } from 'react';
import { ToastMessage, useToast } from '@/lib/useToast';

const AppContext = createContext<AppContext>(null);
export const useApp = () => useContext<AppContext>(AppContext);

type AppContext = {
  setToast?: (message: ToastMessage, localStorageKey?: LSMessageKey) => void;
};

export const AppProvider = ({ children }) => {
  const { Toast, setToast } = useToast();

  return (
    <AppContext.Provider value={{ setToast }}>
      <div className={'fixed flex w-full flex-row items-center justify-center'}>
        <Toast />
      </div>
      {children}
    </AppContext.Provider>
  );
};
