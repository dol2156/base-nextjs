'use client';

import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <section className={`HBox`}>
          <div className="Inner">src/app/basic/test/page.js</div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
