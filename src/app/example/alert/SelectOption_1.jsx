'use client';
import { layerControl } from '@/js/common';

export default function SelectOption_1() {
  return (
    <>
      <div className="SelectOption_1 w-[302px]">
        <div className="Body">
          <div className="Title">프로필 사진 설정</div>
          <button className="Button">사진 보관함</button>
          <button className="Button">사진찍기</button>
          <button className="Button">기본 이미지로 변경 </button>
          <button className="Button" onClick={layerControl.Off}>
            취소
          </button>
        </div>
      </div>
    </>
  );
}
