'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // mount
    console.log('page.js mount');
    window.location.href = '/basic/sitemap';
  }, []);

  return (
    <>
      <main>src/app/page.js</main>
    </>
  );
}
