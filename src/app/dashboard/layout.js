'use client';

import GlobalContext from '@/app/GlobalContext';
import Nav_1 from '@/components/layout/Nav_1';
import Nav_1_sm from '@/components/layout/Nav_1_sm';
import '@/scss/dashboard.scss';
import { useContext } from 'react';

export default function Layout({ children }) {
  const { GVar, setGVar } = useContext(GlobalContext);
  const { LEFT_OPEN } = GVar;
  console.log(`LEFT_OPEN == `, LEFT_OPEN);

  return (
    <div id="PageDashboard" className={`RRR flex flex-row gap-[0] h-[--vh-100] overflow-hidden`}>
      <div className={`Fc overflow-auto`}>
        <div className={`${!LEFT_OPEN ? 'hidden' : ''}`}>
          <Nav_1 />
        </div>
        <div className={`${!LEFT_OPEN ? 'block' : 'hidden'}`}>
          <Nav_1_sm />
        </div>
      </div>
      <div className={`Fc flex-1`}>{children}</div>
    </div>
  );
}
