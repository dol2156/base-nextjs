'use client';

import { pageScroll } from '@/js/common';

export default function BottomRightUtil_1() {
  return (
    <>
      <div id="BottomRightUtil" className={`z-[99] fixed bottom-[60px] right-[30px]`}>
        <div className="flex flex-col gap-[10px]">
          <button className="ScrollTopBtn bg-[#5D45FF] w-[40px] aspect-square rounded-full text-white text-[12px] font-[800]" onClick={pageScroll.Top}>
            TOP
          </button>
          <button className="ScrollTopBtn bg-[#5D45FF] w-[40px] aspect-square rounded-full text-white text-[12px] font-[800]" onClick={pageScroll.Bottom}>
            BTM
          </button>
        </div>
      </div>
    </>
  );
}
