'use client';

import SiteMapLink from '@/components/etc/SiteMapLink';
import menu_data from '@/js/menu_data';
import '@/scss/sitemap.scss';
import { Fragment } from 'react';

export default function Page() {
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
