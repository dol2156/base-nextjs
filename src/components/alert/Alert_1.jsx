'use client';
export default function Alert_1() {
  return (
    <>
      <div className="w-[360px] text-[#161616] text-[16px] font-[600] leading-[26px] text-center rounded-[12px] bg-white shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)] p-[40px]">
        <div className="Body">
          <div>
            입력하신 정보로 가입된 계정을
            <br />
            <span className="text-[#f3436d]">확인할 수 없습니다.</span>
          </div>
          <div className="mt-[20px] text-[14px] font-[400]">가입정보를 다시 확인해주시기 바랍니다.</div>
        </div>
        <div className="Foot">
          <button className="Button_2 Lg NoRounded w-full">확인</button>
        </div>
      </div>
    </>
  );
}
