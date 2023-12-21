'use client';

import MyContext from '@/app/MyContext';
import Footer_2 from '@/components/layout/Footer_2';
import Header_2 from '@/components/layout/Header_2';
import Nav_2 from '@/components/layout/Nav_2';
import { Fragment, useContext } from 'react';

export default function Page() {
  const { data, updateData } = useContext(MyContext);

  return (
    <>
      <Header_2 />
      <main className={`RR h-[calc(var(--vh-100)-var(--dashboard-header-hei))] overflow-hidden`}>
        <div>data : {data}</div>
        <div className={`RRR flex flex-row gap-[0] h-full`}>
          <div className={`Fc h-full overflow-auto`}>
            <Nav_2 />
          </div>
          <div className={`Fc h-full overflow-auto flex-1`}>
            <section>
              <div>START</div>
              {Array.from(Array(30)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  </Fragment>
                );
              })}
              <div>END</div>
            </section>
            <Footer_2 />
          </div>
        </div>
      </main>
    </>
  );
}
