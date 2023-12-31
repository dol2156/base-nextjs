'use client';

import DataGrid_1 from '@/components/common/DataGrid_1';
import Footer_1 from '@/components/layout/Footer_1';
import Header_1 from '@/components/layout/Header_1';
import { Fragment } from 'react';

export default function Page() {
  return (
    <>
      <Header_1 />
      <main>
        <section className={`HBox`}>
          <div className="Inner">
            <br />
            <br />
            <DataGrid_1 />
          </div>
        </section>
      </main>
      <Footer_1 />
    </>
  );
}
