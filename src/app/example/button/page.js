'use client';

import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Button</h1>
        <section className="HBox mt-[50px]">
          <div className="Inner">
            <h2 className="H2">Button List</h2>
            <table className="BtnSampleTable">
              <thead>
                <tr>
                  <th>Xl : 60px</th>
                  <th>Lg : 52px</th>
                  <th>Md : 48px</th>
                  <th>Sm : 40px</th>
                  <th>On</th>
                  <th>[disabled]</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(Array(10)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tr>
                        {['Xl', 'Lg', 'Md', 'Sm', 'On'].map((obj2, idx2) => {
                          return (
                            <Fragment key={idx2}>
                              <td>
                                <button className={`Button_${idx + 1} w-full ${obj2}`}>
                                  Button_{idx + 1} {obj2}
                                </button>
                              </td>
                            </Fragment>
                          );
                        })}
                        <td>
                          <button className={`Button_${idx + 1} w-full`} disabled={true}>
                            Button
                          </button>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <section className="HBox">
          <div className="Inner">
            <h2 className="H2">ETC Buttons</h2>
            <br />
            <h3 className="H3">Btn_0</h3>
            <article className="CenterLeft gap-[10px]">
              <button className="Btn_0">
                <div>인기순</div>
                <div className="[button:hover>&]:text-[red]">
                  <img src="/icon/star.svg" alt="" />
                </div>
              </button>
              <button className="Btn_0">
                랭킹기준
                <img className="Default Hover" src="/icon/warn.svg" alt="" />
                <img className="Active" src="/icon/wran_active.svg" alt="" />
              </button>
              <button className="Btn_0">
                랭킹기준
                <img className="Default" src="/icon/warn.svg" alt="" />
                <img className="Hover" src="/icon/warn_hover.svg" alt="" />
                <img className="Active" src="/icon/wran_active.svg" alt="" />
              </button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
