'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import ComponentList from '@/pub/ComponentList';
// import { Fragment } from 'react';


import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Textinput</h1>
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
