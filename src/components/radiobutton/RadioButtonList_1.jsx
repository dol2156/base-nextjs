'use client';
import { Fragment } from 'react';

export default function RadioButtonList_1() {
  return (
    <>
      <table className="BtnSampleTable">
        <thead>
          <tr>
            <th>Lg : 30px</th>
            <th>Md : 24px</th>
            <th>Sm : 24px</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {['Lg', 'Md', 'Sm'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <td>
                    <button className="text-left">
                      <label className="FormLabel_1">Basic</label>
                      <div className="CenterLeft">
                        <input className={`RadioButton_1 ${obj}`} type="checkbox" />
                      </div>
                    </button>
                    <button className="text-left">
                      <label className="FormLabel_1">Checked</label>
                      <div className="CenterLeft">
                        <input className={`RadioButton_1 ${obj}`} type="checkbox" defaultChecked />
                      </div>
                    </button>
                    <button className="text-left">
                      <label className="FormLabel_1">Disabled</label>
                      <div className="CenterLeft">
                        <input className={`RadioButton_1 ${obj}`} type="checkbox" disabled />
                      </div>
                    </button>
                    <button className="text-left">
                      <label className="FormLabel_1">LabalUi</label>
                      <div className="CenterLeft">
                        <label className="FormLabelBox">
                          <input className={`RadioButton_1 ${obj}`} type="checkbox" />
                          <div className="LabalUi">
                            Checkbox_{idx} {obj}
                          </div>
                        </label>
                      </div>
                    </button>
                    <button className="text-left">
                      <label className="FormLabel_1">LabalUi_Disabled</label>
                      <div className="CenterLeft">
                        <label className="FormLabelBox">
                          <input className={`RadioButton_1 ${obj}`} type="checkbox" disabled />
                          <div className="LabalUi">
                            Checkbox_{idx} {obj}
                          </div>
                        </label>
                      </div>
                    </button>
                  </td>
                </Fragment>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}
