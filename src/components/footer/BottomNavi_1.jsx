'use client';
import { Fragment } from 'react';

export default function BottomNavi_1() {
  return (
    <>
      <article className="bg-[#ffffd4] grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-[0] items-center justify-center shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.1)] px-[10px] pt-[4px] pb-[calc(3px+var(--sab,10px))]">
        {Array.from(Array(5)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button className={`${idx == 1 ? 'On' : ''} text-[#333] [&.On]:text-[red] text-[12px] font-[400] [&.On]:font-[900] h-[50px]`}>
                <div className="CenterCenter">
                  <img className="RR w-[24px] aspect-square" src="/icon/empty.svg" alt="" />
                </div>
                <div className="mt-[5px]">{idx}</div>
              </button>
            </Fragment>
          );
        })}
      </article>
    </>
  );
}
