'use client';
export default function TextInput_1() {
  return (
    <>
      <div className="SampleList">
        <div>
          <label className="FormLabel_1">Basic</label>
          <div className="TextInput_1 w-full">
            <input placeholder="placeholder" />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.HasValue</label>
          <div className="TextInput_1 HasValue w-full">
            <input placeholder="placeholder" defaultValue="Has Value" />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.Focus</label>
          <div className="TextInput_1 Focus w-full">
            <input placeholder="placeholder" defaultValue="Focus Value" />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.Success</label>
          <div className="TextInput_1 Success w-full">
            <input placeholder="placeholder" defaultValue="Success Value" />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.Error</label>
          <div className="TextInput_1 Error w-full">
            <input placeholder="placeholder" defaultValue="Error Value" />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.ReadOnly [readonly]</label>
          <div className="TextInput_1 ReadOnly w-full">
            <input placeholder="placeholder" defaultValue="ReadOnly Value" readOnly={true} />
          </div>
        </div>
        <div>
          <label className="FormLabel_1">Reset Button</label>
          <div className="TextInput_1 w-full">
            <input placeholder="placeholder" />
            <button className="ResetBtn">
              <img src="/icon/input_delete.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <label className="FormLabel_1">Search Button</label>
          <div className="TextInput_1 w-full">
            <input placeholder="placeholder" />
            <button className="ResetBtn">
              <img src="/icon/input_delete.svg" alt="" />
            </button>
            <button className="Search">
              <img src="/icon/input_search.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <label className="FormLabel_1">EyeBtn Button</label>
          <div className="TextInput_1 w-full">
            <input type="password" placeholder="placeholder" />
            <button className="ResetBtn">
              <img src="/icon/input_delete.svg" alt="" />
            </button>
            <button className="EyeBtn">
              <img className="[input[type='text']~button>&]:hidden" src="/icon/eye.svg" alt="" />
              <img className="[input[type='password']~button>&]:hidden" src="/icon/eye_on.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
