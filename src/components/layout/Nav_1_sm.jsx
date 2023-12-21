'use client';
import { Fragment } from 'react';

export default function Nav_1_sm() {
  return (
    <>
      <nav className={`p-[20px]`}>
        <button className={`RR CenterCenter w-[40px] h-[40px] mx-auto`}>
          <img src="/icon/star.svg" alt="" />
        </button>
        <div className={`mt-[10px] CenterCenter`}>
          닫힌
          <br />
          메뉴
        </div>
      </nav>
    </>
  );
}
