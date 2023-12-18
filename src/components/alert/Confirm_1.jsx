'use client';
import { layerControl } from '@/js/common';

export default function Confirm_1() {
  return (
    <>
      <div className="w-[280px] bg-[white] rounded-t-[8px] pt-[32px] text-[#303030] text-[12px] font-[400] leading-[18px]">
        <div className="Body px-[24px] pb-[32px]">
          <div>
            로그인이 필요한 기능입니다.
            <br />
            지금 로그인 하시겠습니까?
          </div>
        </div>
        <div className="Foot border-t-[1px] border-t-[#f4f4f4]">
          <article className="CenterCenter divide-x-[1px] divide-[#f4f4f4] divide-solid">
            <button className="flex-1 h-[36px]" onClick={layerControl.Off}>
              취소
            </button>
            <button className="flex-1 h-[36px]">로그인</button>
          </article>
        </div>
      </div>
    </>
  );
}
