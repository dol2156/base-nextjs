'use client';
export default function EmptyList_1() {
  return (
    <>
      <div className="bg-white py-[90px] text-center text-[#767676] leading-[20px]">
        <article className="flex flex-col items-center justify-center gap-[0]">
          <div>
            <img src="https://gifpng.com/50x50/ffd4d4/ff4444" alt="" />
          </div>
          <div className="mt-[17px] text-[14px] font-[600]">
            판매중인 상품이 없습니다.
          </div>
          <div className="mt-[12px] text-[12px] font-[400]">
            관심상품으로 등록하시면 상품이 들어올 때
            <br />
            알림을 받아보실 수 있습니다.
          </div>
        </article>
      </div>
    </>
  );
}
