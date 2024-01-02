'use client';

import {Fragment} from 'react';
import {ReactSVG} from 'react-svg';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Button</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className={`H2`}>Style & State</h2>
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
              {[...Array(20).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`outline-dashed outline-[red] outline-[1px] p-[5px] space-y-[5px]`}>
                      <button className={`Button_${idx + 1} w-full`}>.Button_{idx + 1}</button>
                      <button className={`Button_${idx + 1} w-full On`}>.On</button>
                      <button className={`Button_${idx + 1} w-full`} disabled={true}>
                        [disabled]
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
        <section className="HBox mt-[50px]">
          <div className="Inner">
            <h2 className="H2">Size</h2>
            {
              [...Array(10).keys()].map((obj2, idx2) => {
                return (
                  <Fragment key={idx2}>
                    <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
                      {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <div>
                              <button className={`Button_${idx2+1} ${obj} w-full`}>Button_{idx2+1}.{obj}</button>
                            </div>
                          </Fragment>
                        );
                      })}
                    </article>
                  </Fragment>
                );
              })
            }
          </div>
        </section>
        <section className="HBox">
          <div className="Inner">
            <h2 className="H2">ETC</h2>
            <br/>
            <ul className={`p-[10px] space-y-[30px]`}>
              <li>
                <h3 className="H3">Btn_0</h3>
                <article className="CenterLeft gap-[10px]">
                  <button className="Btn_0 group">
                    Btn_0
                    <img className={`group-hover:hidden`} src="/icon/warn.svg" alt=""/>
                    <img className={`hidden group-hover:block group-active:hidden`} src="/icon/warn_hover.svg" alt=""/>
                    <img className={`hidden group-active:block`} src="/icon/wran_active.svg" alt=""/>
                  </button>
                </article>
              </li>
              <li>
                <h3 className="H3">Btn_1</h3>
                <article className="CenterLeft gap-[10px]">
                  <button className="Btn_1 group">
                    Btn_1
                    <ReactSVG className={`group-hover:text-[yellow] group-active:text-[lime]`} src={`/icon/warn.svg`}/>
                  </button>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
