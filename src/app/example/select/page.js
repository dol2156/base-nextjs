'use client';

import ComponentList from '@/pub/ComponentList';
// import { Fragment } from 'react';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Select</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className={`H2`}>Style & State</h2>
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
              {[...Array(20).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`outline-dashed outline-[red] outline-[1px] p-[5px] space-y-[5px]`}>
                      <select className={`SelectBox_${idx + 1}`} defaultValue={``}>
                        <option className={`hidden`} value="" disabled={true}>
                          SelectBox_{idx + 1}
                        </option>
                        <option value="aaa">AAA</option>
                        <option value="bbb">BBB</option>
                        <option value="ccc">CCC</option>
                      </select>
                      <select className={`SelectBox_${idx + 1} Success`} defaultValue={``}>
                        <option className={`hidden`} value="" disabled={true}>
                          .Success
                        </option>
                        <option value="aaa">AAA</option>
                        <option value="bbb">BBB</option>
                        <option value="ccc">CCC</option>
                      </select>
                      <select className={`SelectBox_${idx + 1}`} defaultValue={''} disabled={true}>
                        <option className={`hidden`} value="" disabled={true}>
                          [disabled]
                        </option>
                        <option value="aaa">AAA</option>
                        <option value="bbb">BBB</option>
                        <option value="ccc">CCC</option>
                      </select>
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
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
              {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <select className={`SelectBox_1 ${obj} w-full`} defaultValue={''}>
                        <option value="" disabled={true} hidden={true}>
                          SelectBox_1.{obj}
                        </option>
                        <option value="aaa">AAA</option>
                        <option value="bbb">BBB</option>
                        <option value="ccc">CCC</option>
                      </select>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
        {ComponentList.select.map((obj, idx) => {
          const { 경로, 컴포넌트 } = obj;

          return (
            <Fragment key={idx}>
              <section className="HBox mt-[50px]">
                <div className="Inner">
                  <h2 className="H2 mb-[10px]">{경로}</h2>
                  <컴포넌트 />
                </div>
              </section>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
