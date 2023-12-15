'use client';

import SiteMapLink from '@/components/etc/SiteMapLink';
import '@/scss/sitemap.scss';
import { Fragment, useEffect, useState } from 'react';
import readXlsxFile from 'read-excel-file';

export default function Page() {
  let [menu_data, setMenuData] = useState([]);

  useEffect(() => {
    // mount

    console.log('page.js mount');

    fetch('/MENU_DATA.xlsx')
      .then((response) => response.blob())
      .then((blob) => readXlsxFile(blob))
      .then((rows) => {
        // json 가공
        // 첫번째 row 를 기준으로 비어있는 값에 null 값을 넣어준다.
        var first_row_data = rows[0];
        var col_len = first_row_data.length;

        rows.forEach((obj, idx) => {
          let i = 0;
          while (i < col_len) {
            if (obj[i]) {
              // console.log(obj[i]);
            } else {
              obj[i] = null;
            }
            ++i;
          }
        });

        let result_array = [];
        // index 값 기반을 첫번째 row 의 값 기준 데이터로 변환
        rows.forEach((obj, idx) => {
          const new_obj = {};
          if (idx != 0) {
            // console.log(first_row_data);
            obj.forEach((obj2, idx2) => {
              new_obj[first_row_data[idx2]] = obj2;
              //console.log(obj2);
            });

            result_array.push(new_obj);
          }
        });

        let data = [];
        let d1, d2, d3, d4;
        result_array.forEach((obj, idx) => {
          const { D_1, D_2, D_3, D_4, PAGE_KEY } = obj;

          if (D_1) {
            d1 = obj;
            data.push(obj);
          }
          if (D_2) {
            d2 = obj;
            if (!d1.CHILD) d1.CHILD = [];
            d1.CHILD.push(d2);
          }
          if (D_3) {
            d3 = obj;
            if (!d2.CHILD) d2.CHILD = [];
            d2.CHILD.push(d3);
          }
          if (D_4) {
            d4 = obj;
            if (!d3.CHILD) d3.CHILD = [];
            d3.CHILD.push(d4);
          }
        });
        setMenuData(data);
      });

    return () => {
      // unmount
      console.log('page.js unmount');
    };
  }, []);

  return (
    <>
      <main className="pb-[20px]">
        <h1 className="H1 Sticky Top px-[20px]">
          <article className="CenterLeft gap-2">
            SiteMap
            <span className="hidden [[data-env='development']_&]:block">Development</span>
            <span className="hidden [[data-env='production']_&]:block">Production</span>
          </article>
        </h1>
        <div id="Sitemap">
          <ul>
            {menu_data.map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <SiteMapLink data={obj} />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
