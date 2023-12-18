'use client';
import { layerControl } from '@/js/common';

export default function ToolTip_1() {
  return (
    <>
      <div className="ToolTip_1 w-[172px]">
        <div className="CenterRight">
          <button onClick={layerControl.Off}>
            <img src="/icon/star.svg" alt="" />
          </button>
        </div>
        <div className="text-[#303030] text-[12px] font-[600] leading-[18px]">랭킹 노출 기준</div>
        <div className=" mt-[4px] text-[#767676] text-[11px] font-[400] leading-[16px]">브랜드 및 쿠폰 별 최근 판매횟수가 높은 순으로 정렬합니다.</div>
      </div>
    </>
  );
}
