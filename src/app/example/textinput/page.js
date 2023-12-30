'use client';

import ComponentList from '@/pub/ComponentList';
// import { Fragment } from 'react';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Textinput</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className={`H2`}>Style & State</h2>
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center justify-center gap-[10px]`}>
              {[...Array(20).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`outline-dashed outline-[red] outline-[1px] p-[5px] space-y-[5px]`}>
                      <div className={`TextInput_${idx + 1} w-full`}>
                        <input placeholder={`TextInput_${idx + 1}`} />
                      </div>
                      <div className={`TextInput_${idx + 1} w-full`}>
                        <input placeholder="placeholder" defaultValue={`HasValue`} />
                      </div>
                      <div className={`TextInput_${idx + 1} w-full Success`}>
                        <input placeholder=".Success" />
                      </div>
                      <div className={`TextInput_${idx + 1} w-full`}>
                        <input placeholder="[readonly]" readOnly={true} />
                      </div>
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
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center justify-center gap-[10px]`}>
              {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`TextInput_1 ${obj} w-full`}>
                      <input placeholder={`TextInput_1.${obj}`} />
                      <button>
                        <img className={`w-[24px]`} src="/icon/input_delete.svg" alt="" />
                      </button>
                      <button>
                        <img className={`w-[24px]`} src="/icon/input_search.svg" alt="" />
                      </button>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
        {ComponentList.textinput.map((obj, idx) => {
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
