'use client';
import { Fragment } from 'react';

export default function Aside_1() {
  function onCloseButtonClick() {
    const $aside = document.querySelector('#Aside');
    $aside.classList.remove('On');
  }

  return (
    <>
      <aside id="Aside" className="left-[100vw] [&.On]:left-0 overflow-hidden fixed z-[110] top-0 w-full h-[100dvh] duration-300 ease-out will-change-auto">
        <div className="z-0 absolute top-0 left-0 w-full h-full" />
        <div className="z-10 relative h-full">
          <article className="TopRight h-full">
            <div className="Fc w-[100px] h-full text-[0]">좌측 여백</div>
            <div className="RR Fc flex-1 h-full bg-gray-300">
              <div className={`h-full flex flex-col`}>
                <div className="CenterRight p-[10px] border-b-[1px] border-b-[#161616] bg-white">
                  <button className="Button_1" onClick={onCloseButtonClick}>
                    CLOSE
                  </button>
                </div>
                <div className="flex-1 h-full overflow-auto">
                  <ul className="p-[10px] space-y-[10px]">
                    {Array.from(Array(10)).map((obj1, idx1) => {
                      return (
                        <Fragment key={idx1}>
                          <li>
                            <a href="#" target="_blank" className="CenterCenter bg-white h-[46px]">
                              LINK {idx1}
                            </a>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
                <div className="CenterCenter p-[10px] border-t-[1px] border-t-[#161616] bg-white">© Copyrights by ㅇㅇㅇ. All Rights Reserved.</div>
              </div>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
}
