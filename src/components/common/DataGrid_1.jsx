'use client';
import { Fragment } from 'react';

export default function DataGrid_1() {
  return (
    <>
      <div className={`DataGrid_1`}>
        <div className={`Inner`}>
          <div className={`Head`}>
            <div className={`w-[70px]`}>A</div>
            <div className={`flex-1`}>B</div>
            <div className={`w-[100px]`}>C</div>
          </div>
          <div className={`Body h-[360px]`}>
            {[...Array(100).keys()].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <article>
                    <div className={`w-[70px]`}>{idx + 1}</div>
                    <div className={`flex-1`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                    <div className={`w-[100px]`}>{idx * 10}</div>
                  </article>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
