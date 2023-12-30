'use client';

// import { Fragment } from 'react';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Checkbox</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className={`H2`}>Style & State</h2>
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
              {[...Array(20).keys()].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`RRR outline-dashed outline-[red] outline-[1px] p-[5px] space-y-[5px] bg-white text-[0]`}>
                      <div>
                        <input className={`Checkbox_${idx + 1}`} type="checkbox" />
                      </div>
                      <div>
                        <label className="FormLabelBox">
                          <input className={`Checkbox_${idx + 1}`} type="checkbox" />
                          <div className="text-[#161616] text-[16px] font-[400]">Checkbox_{idx + 1}</div>
                        </label>
                      </div>
                      <div>
                        <label className="FormLabelBox">
                          <input className={`Checkbox_${idx + 1}`} type="checkbox" disabled={true} />
                          <div className="text-[#161616] text-[16px] font-[400]">[disabled]</div>
                        </label>
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
            <article className={`mt-[20px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[0] items-center justify-center gap-[10px]`}>
              {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={`outline-dashed outline-[red] outline-[1px] p-[5px] space-y-[5px] bg-white text-[0]`}>
                      <label className="FormLabelBox">
                        <input className={`Checkbox_1 ${obj}`} type="checkbox" />
                        <div className="text-[#161616] text-[16px] font-[400]">Checkbox_1.{obj}</div>
                      </label>
                    </div>
                  </Fragment>
                );
              })}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
