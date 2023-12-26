'use client';
import { Fragment } from 'react';

export default function SiteMapLink({ data }) {
  let { LABEL, LAYOUT, PAGE_KEY, CHILD, EXTERNAL_LINK } = data;

  const getHref = () => {
    let href = null;
    if (PAGE_KEY) {
      if (!LAYOUT) LAYOUT = 'basic';
      href = `/${LAYOUT}/${PAGE_KEY}`;
    }
    return href;
  };

  return (
    <li>
      <a className={`${PAGE_KEY && `PageLink`} ${EXTERNAL_LINK && `ExternalLink`}`} href={getHref()} target={`_blank`}>
        {PAGE_KEY && <div className={`${PAGE_KEY && `PageKey`}`}>[{PAGE_KEY}]</div>}
        {LABEL}
      </a>
      {CHILD && (
        <ul>
          {CHILD.map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <SiteMapLink data={obj} />
              </Fragment>
            );
          })}
        </ul>
      )}
    </li>
  );
}
