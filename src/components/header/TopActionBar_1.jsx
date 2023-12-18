'use client';
import { Fragment } from 'react';

export default function TopActionBar_1() {
  function onAsideOpenClick() {
    const $aside = document.querySelector('#Aside');
    $aside.classList.add('On');
  }

  return (
    <>
      <div className="bg-[#ffffd4] h-[--header-hei]">
        <section className="HBox h-full">
          <div className="Inner h-full">
            <article className="RRR CenterBetween h-full">
              <div className={`Fc`}>
                <a href="/" className="block">
                  <img className="w-[100px]" src="https://gifpng.com/140x40" alt="" />
                </a>
              </div>
              <div className={`Fc`}>
                <button className="Button_2 Lg w-[149px]" onClick={onAsideOpenClick}>
                  Aside Open
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
