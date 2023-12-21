'use client';

import MyContext from '@/app/MyContext';
import AppInfo from '@/components/etc/AppInfo';
import Modal from '@/components/etc/Modal';
import Head_1 from '@/components/meta/Head_1';
import {appIsReady, initCssVar} from '@/js/common';
import '@/scss/global.scss';
import {useEffect, useState} from 'react';

export default function RootLayout({ children }) {
  const [value, setValue] = useState('Hello, Context!');

  // Context value에 상태 업데이트 함수도 포함시켜서 전달합니다.
  const contextValue = {
    data: value,
    updateData: setValue,
  };
  console.log(`value == `, value);

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
        <MyContext.Provider value={contextValue}>
          <AppInfo />
          <Modal />
          <div id="LoadingSpinner" className="hidden [&.On]:block z-[150] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px]">
            <img src="/icon/loading.svg" alt="" />
          </div>
          {children}
        </MyContext.Provider>
      </body>
    </html>
  );
}
