'use client';
import { Fragment } from 'react';

export default function Nav_1() {
  return (
    <>
      <nav className={`w-[314px] px-[28px] py-[20px]`}>
        <div className={`p-[12px]`}>
          <img src="https://gifpng.com/100x20" alt="" />
        </div>
        <div>열린 좌측 메뉴</div>
        <div>
          <div>START</div>
          {Array.from(Array(10)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
              </Fragment>
            );
          })}
          <div>END</div>
        </div>
      </nav>
    </>
  );
}
