'use client';
import { Fragment } from 'react';

export default function DataGrid_1() {
  return (
    <>
      <div className={`DataGrid_1 h-[calc(36px*9)]`}>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>C</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(100).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td>
                      <div className={`p-[6px_12px]`}>키워드 {idx}</div>
                    </td>
                    <td>{idx * 10}</td>
                    <td>{idx * 10}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
