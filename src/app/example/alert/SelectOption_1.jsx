'use client';
import { layerControl } from '@/js/common';

export default function SelectOption_1() {
  return (
    <>
      <div className="w-[302px] bg-white rounded-[15px] text-[#161616] text-[16px] font-[500] text-center">
        <div className="Body">
          <div className="Title py-[20px]">프로필 사진 설정</div>
          <div className={`text-[#0a7feb] text-[16px] font-[400]`}>
            <button className="Button w-full py-[14px] border-solid border-t-[1px] border-t-[#ddd]">사진 보관함</button>
            <button className="Button w-full py-[14px] border-solid border-t-[1px] border-t-[#ddd]">사진찍기</button>
            <button className="Button w-full py-[14px] border-solid border-t-[1px] border-t-[#ddd]">기본 이미지로 변경 </button>
            <button className="Button w-full py-[14px] border-solid border-t-[1px] border-t-[#ddd]" onClick={layerControl.Off}>
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
