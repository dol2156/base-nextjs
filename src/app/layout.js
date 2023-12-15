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
        {children}
      </body>
    </html>
  );
}
