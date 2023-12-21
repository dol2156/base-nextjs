'use client';

import GlobalContext from '@/app/GlobalContext';
import AppInfo from '@/components/etc/AppInfo';
import Modal from '@/components/etc/Modal';
import Head_1 from '@/components/meta/Head_1';
import { appIsReady, initCssVar } from '@/js/common';
import '@/scss/global.scss';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  // 전역 변수 사용 위해 설정
  const [globalVar, setGlobalVar] = useState({ NAME: 'KSM' });

  useEffect(() => {
    // mount
    console.log('app unmount');
    initCssVar();
    appIsReady();
  }, []);

  return (
    <html className={`Loading`}>
      <Head_1 />
      <body>
        <GlobalContext.Provider
          value={{
            GVar: globalVar,
            setGVar: (set_key, set_value) => {
              const ori = { ...globalVar };
              ori[set_key] = set_value;
              setGlobalVar(ori);
            },
          }}
        >
          <AppInfo />
          <Modal />
          <div id="LoadingSpinner" className="hidden [&.On]:block z-[150] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px]">
            <img src="/icon/loading.svg" alt="" />
          </div>
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
