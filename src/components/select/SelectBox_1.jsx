'use client';
export default function SelectBox_1() {
  return (
    <>
      <div className="SampleList">
        <div>
          <label className="FormLabel_1">Basic</label>
          <select className={`SelectBox_1`} defaultValue={''}>
            <option value="" disabled={true} hidden={true}>
              선택
            </option>
            <option value="aaa">AAA</option>
            <option value="bbb">BBB</option>
            <option value="ccc">CCC</option>
          </select>
        </div>
        <div>
          <label className="FormLabel_1">.Success</label>
          <div className="SelectBox_1">
            <select className="Success">
              <option value="" disabled={true} hidden={true}>
                선택
              </option>
              <option value="aaa">AAA</option>
              <option value="bbb">BBB</option>
              <option value="ccc">CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className="FormLabel_1">.Error</label>
          <div className="SelectBox_1">
            <select defaultValue={''} className="Error">
              <option value="" disabled={true} hidden={true}>
                선택
              </option>
              <option value="aaa">AAA</option>
              <option value="bbb">BBB</option>
              <option value="ccc">CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className="FormLabel_1">[disabled]</label>
          <div className="SelectBox_1">
            <select defaultValue={''} disabled={true}>
              <option value="" disabled={true} hidden={true}>
                선택
              </option>
              <option value="aaa">AAA</option>
              <option value="bbb">BBB</option>
              <option value="ccc">CCC</option>
            </select>
          </div>
        </div>
        <div>
          <label className="FormLabel_1">[selected]</label>
          <div className="SelectBox_1">
            <select defaultValue={'bbb'}>
              <option value="" disabled={true} hidden={true}>
                선택
              </option>
              <option value="aaa">AAA</option>
              <option value="bbb">BBB</option>
              <option value="ccc">CCC</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
