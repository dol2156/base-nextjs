'use client';
import { Fragment } from 'react';

export default function LinkList_1() {
  return (
    <>
      <div className="LinkList_1">
        <ul>
          {Array.from(Array(10)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <li>
                  <a href="https://www.google.com" target="_blank">
                    <div>Lorem Ipsum {idx}</div>
                    <div>
                      <img src="/icon/arrow_right.svg" alt="" />
                    </div>
                  </a>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}
