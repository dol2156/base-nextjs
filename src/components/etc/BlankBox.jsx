'use client';
export default function BlankBox({ text = 'BlankBox' }) {
  return (
    <>
      <div
        className={`CenterCenter border-solid border-[1px] border-[#ddd] bg-[#ededed] text-[14px] text-[#999]`}
      >
        {text}
      </div>
    </>
  );
}
