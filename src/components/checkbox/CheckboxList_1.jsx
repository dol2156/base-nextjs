'use client';
import { Fragment } from 'react';

export default function CheckboxList_1() {
  return (
    <>
      <div className="SampleList p-[10px]">
        <label className="FormLabel_1">Basic</label>
        <div className="bg-white p-[10px] border-solid border-[1px] border-[#000] flex flex-col pc:grid pc:grid-cols-[repeat(auto-fit,minmax(0,1fr))] pc:gap-[10px] pc:items-center pc:justify-center">
          {['Xl', 'Lg', 'Md', 'Sm'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <div>
                  <div>{obj}</div>
                  <input className={`Checkbox_1 ${obj}`} type="checkbox" />
                </div>
              </Fragment>
            );
          })}
        </div>
        <label className="FormLabel_1">[disabled]</label>
        <div className="CenterLeft bg-white">
          <input className="Checkbox_1" type="checkbox" disabled />
        </div>
        <label className="FormLabel_1">+ Text</label>
        <div className="CenterLeft bg-white">
          <label className="FormLabelBox">
            <input className="Checkbox_1" type="checkbox" />
            <div className="text-[#161616] text-[12px] font-[400]">로그인 상태 유지</div>
          </label>
        </div>
      </div>
    </>
  );
}
