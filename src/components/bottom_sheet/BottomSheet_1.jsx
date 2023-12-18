'use client';
import { Fragment } from 'react';

export default function BottomSheet_1() {
  return (
    <>
      <div className="BottomSheet_1 w-[360px] relative rounded-t-[30px] bg-white px-[20px] pb-[calc(60px+var(--sab,0px))]">
        <div className="Head">
          <button className="Handlebar mx-auto w-[56px] text-[0] [&:before]:block [&:before]:my-[16px] [&:before]:rounded-[3px] [&:before]:bg-[rgba(0,0,0,0.5)] [&:before]:content-[''] [&:before]:w-full [&:before]:h-[3px]" />
        </div>
        <div className="Body">
          <div>
            {Array.from(Array(4)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <button className={`${idx == 0 ? 'On' : ''} w-full h-[42px] text-[#a6a6a6] [&.On]:text-[#303030] text-[14px] font-[500]`}>Option {idx}</button>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
