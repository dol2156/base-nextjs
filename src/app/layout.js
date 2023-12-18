'use client';

import AppInfo from '@/components/etc/AppInfo';
import Modal from '@/components/etc/Modal';
import BottomRightUtil_1 from '@/components/layout/BottomRightUtil_1';
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
        <Modal />
        <div id="LoadingSpinner" className="hidden [&.On]:block z-[150] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px]">
          <img src="/icon/loading.svg" alt="" />
        </div>
        {children}
        <BottomRightUtil_1 />
      </body>
    </html>
  );
}
