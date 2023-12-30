'use client';
import { Fragment } from 'react';

export default function Dropdown_1() {
  return (
    <>
      <div className="SampleList">
        <div>
          <label className="text-[#161616] text-[20px] font-[600]">Basic</label>
          <div className="Dropdown_1">
            <input type="hidden" />
            <div className="Head">선택</div>
            <div className="Body">
              <div className="OptionBtn" data-value="AAA">
                AAA
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="text-[#161616] text-[20px] font-[600]">.Selected</label>
          <div className="Dropdown_1 On">
            <input type="hidden" />
            <div className="Head">선택</div>
            <div className="Body">
              <div className="OptionBtn" data-value="AAA">
                AAA
              </div>
              <div className="OptionBtn Selected" data-value="BBB">
                BBB
              </div>
              <div className="OptionBtn" data-value="CCC">
                CCC
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <label className="text-[#161616] text-[20px] font-[600]">.Top</label>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="Dropdown_1 On">
            <input type="hidden" />
            <div className="Head">선택</div>
            <div className="Body Top">
              <div className="OptionBtn" data-value="AAA">
                AAA
              </div>
              <div className="OptionBtn" data-value="BBB">
                BBB
              </div>
              <div className="OptionBtn" data-value="CCC">
                CCC
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
