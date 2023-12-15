'use client';

import AppInfo from '@/components/etc/AppInfo';
import Head_1 from '@/components/meta/Head_1';
import { appIsReady, initCssVar } from '@/js/common';
import '@/scss/global.scss';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
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
        <AppInfo />
        <div id="Modal" className="hidden [&.On]:block bg-[rgba(0,0,0,0.5)] z-[100] fixed top-0 left-0 w-full h-full"></div>
        <div id="LoadingSpinner" className="hidden [&.On]:block z-[150] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px]">
          <img src="/icon/loading.svg" alt="" />
        </div>
        {children}
      </body>
    </html>
  );
}
