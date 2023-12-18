'use client';
import { Fragment } from 'react';

export default function BottomNavi_1() {
  return (
    <>
      <article className="BottomNavi_1">
        {Array.from(Array(5)).map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <button className={`${idx == 0 ? 'On' : ''}`}>
                <div className="Icon CenterCenter">
                  <img className="RR w-[24px] aspect-square" src="/icon/empty.svg" alt="" />
                </div>
                <div className="Label mt-[5px]">{idx}</div>
              </button>
            </Fragment>
          );
        })}
      </article>
    </>
  );
}
