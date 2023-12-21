'use client';

import GlobalContext from '@/app/GlobalContext';
import { Fragment, useContext, useEffect } from 'react';

export default function Header_2() {
  const { GVar, setGVar } = useContext(GlobalContext);
  console.log(`GVar.LEFT_OPEN == `, GVar.LEFT_OPEN);

  useEffect(() => {
    // mount
    console.log('Header_2.jsx mount');
    setTimeout(() => {
      setGVar('LEFT_OPEN', false);
    }, 3000);
    return () => {
      // unmount
      console.log('Header_2.jsx unmount');
    };
  }, []);

  return (
    <>
      {/*<header id="DashBoardHeader" className="Sticky Top h-[72px] px-[36px]" onClick={(e) => GVar.setVal('대시보드_좌측네비_열림', false)}>*/}
      <header id="DashBoardHeader" className="Sticky Top h-[72px] px-[36px]">
        {/*<div>{GVar.getVal('대시보드_좌측네비_열림').toString()}</div>*/}
        <article className="RRR CenterBetween h-full">
          <div className={`Fc`}>
            <article className="CenterLeft">
              <button className={`RR CenterCenter w-[30px] aspect-square`}>
                <img src="/icon/menu_btn.svg" alt="" />
              </button>
              <ul className={`ml-[80px] flex flex-row items-center justify-center gap-[60px] text-[#26262C] text-[16px] font-[600] leading-[16px]`}>
                {['회사소개', '블로그', '서비스 문의'].map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <li>
                        <a href={`#`}>{obj}</a>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </article>
          </div>
          <div className={`Fc`}>
            <article className="CenterRight gap-[12px]">
              {['로그아웃', '마이페이지', '솔루션 START'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`w-[145px] Button_1`}>{obj}</button>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </article>
      </header>
    </>
  );
}
