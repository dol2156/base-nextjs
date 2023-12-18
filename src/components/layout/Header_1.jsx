'use client';
import TopActionBar_1 from '@/components/header/TopActionBar_1';
import Aside_1 from '@/components/layout/Aside_1';

export default function Header_1() {
  return (
    <>
      <header className="Sticky Top">
        <section>
          <TopActionBar_1 />
        </section>
      </header>
      <Aside_1 />
    </>
  );
}
