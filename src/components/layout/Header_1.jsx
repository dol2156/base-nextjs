'use client';
import Aside_1 from '@/components/header/Aside_1';
import TopActionBar_1 from '@/components/header/TopActionBar_1';

export default function Header_1() {
  return (
    <>
      <header className="Header_1-a Sticky Top">
        <section>
          <TopActionBar_1 />
        </section>
      </header>
      <Aside_1 />
    </>
  );
}
