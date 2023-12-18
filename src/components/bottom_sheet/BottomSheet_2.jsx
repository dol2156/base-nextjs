'use client';
export default function BottomSheet_2() {
  return (
    <>
      <div className="BottomSheet_1 w-[360px] relative rounded-t-[30px] bg-white px-[20px] pb-[calc(60px+var(--sab,0px))]">
        <div className="Head">
          <button className="Handlebar mx-auto w-[56px] text-[0] [&:before]:block [&:before]:my-[16px] [&:before]:rounded-[3px] [&:before]:bg-[rgba(0,0,0,0.5)] [&:before]:content-[''] [&:before]:w-full [&:before]:h-[3px]" />
        </div>
        <div className="Body">
          <div className="TitleBar flex flex-row items-center justify-center gap-[0] text-[#161616] text-[16px] font-[600] py-[20px] border-b-[1px] border-b-[#ebebeb]">판매방법 안내</div>
          <div className="mt-[20px] text-center text-[#000] text-[12px] font-[400] leading-[20px]">
            <p>현재 고객님은</p>
            <p>
              <strong className="Color1">컬쳐랜드에 판매</strong>를 선택하셨습니다.
            </p>
            <p>컬쳐랜드 판매의 경우 정해진 매입가로 컬쳐랜드에서</p>
            <p>즉시 매입하여 정산해드립니다.</p>
            <br />
            <p>
              * 판매금액 직접선택을 원하시면 취소 후, <strong className="Color2">개인판매를</strong>진행해주세요.
            </p>
          </div>
          <article className="mt-[25px] CenterCenter">
            <button className="Fc flex-1">취소</button>
            <button className="Fc flex-1">확인</button>
          </article>
        </div>
      </div>
    </>
  );
}
