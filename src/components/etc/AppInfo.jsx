'use client';
import { useEffect } from 'react';
import UAParser from 'ua-parser-js';

const up = new UAParser();
const UA = UAParser();

export default function AppInfo() {
  // https://www.npmjs.com/package/ua-parser-js

  useEffect(() => {
    // mount
    infoDeviceOS();
    infoWhellDirection();
    infoOnTouch();
    infoScrollDirection();
    infoReadyState();
    infoPath();
    infoScrollTop();
    infoBreakPoint();
    infoiOSSafeArea();
  }, []);

  return (
    <>
      <div id="AppInfo" className="hidden [[data-scroll-top='0']_&]:flex z-[9999] fixed top-[0] left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,.7)] p-[5px] text-[yellow] text-[12px] font-[400] whitespace-nowrap flex-row items-center justify-center gap-[10px]">
        <div>
          <a href="/" className="flex flex-row items-center justify-center gap-[5px]">
            <div>
              <div className="hidden xs:max-sm:block">Xs</div>
              <div className="hidden sm:max-md:block">Sm</div>
              <div className="hidden md:max-lg:block">Md</div>
              <div className="hidden lg:max-xl:block">Lg</div>
              <div className="hidden xl:max-2xl:block">Xl</div>
              <div className="hidden 2xl:max-3xl:block">2Xl</div>
              <div className="hidden 3xl:block">3Xl</div>
            </div>
            <div>🔴</div>
            <div>
              <div className="pc:hidden">MO</div>
              <div className="hidden pc:block">PC</div>
            </div>
            <div>🔴</div>
            <div className="wid">wid</div>
            <div>x</div>
            <div className="hei">hei</div>
          </a>
        </div>
        <div>
          <button
            onClick={(evt) => {
              const $cr = document.querySelector(`#ContentsRuler`);
              $cr.classList.toggle('On');
            }}
            className="bg-[linear-gradient(45deg,_#b8cbb8_0%,_#b8cbb8_0%,_#b465da_0%,_#cf6cc9_33%,_#ee609c_66%,_#ee609c_100%)] text-white font-[800] px-[5px] rounded-[5px]"
          >
            Ruler
          </button>
        </div>
      </div>
      <div id="ContentsRuler" className="HBox opacity-0 [&.On]:opacity-50 pointer-events-none z-[999999] fixed w-full text-[16px] text-center top-[--mouse-y] translate-y-[-50%] left-0 bg-[#0a7feb]">
        <div className="RR Inner bg-[yellow]">컨텐츠 너비 줄자</div>
      </div>
    </>
  );
}

function infoDeviceOS() {
  const device = UA.device;
  const os = UA.os;
  const cpu = UA.cpu;
  const browser = UA.browser;
  const engine = UA.engine;

  const el_html = document.querySelector('html');
  el_html.setAttribute(`data-device-model`, device.model);
  el_html.setAttribute(`data-device-type`, device.type);
  el_html.setAttribute(`data-device-vendor`, device.vendor);

  el_html.setAttribute(`data-os-name`, os.name);
  el_html.setAttribute(`data-os-version`, os.version);

  el_html.setAttribute(`data-cpu`, cpu.architecture);

  el_html.setAttribute(`data-browser-model`, browser.major);
  el_html.setAttribute(`data-browser-name`, browser.name);
  el_html.setAttribute(`data-browser-version`, browser.version);

  el_html.setAttribute(`data-engine-name`, engine.name);
  el_html.setAttribute(`data-engine-version`, engine.version);
}

function infoWhellDirection() {
  const el_html = document.querySelector('html');

  window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      el_html.setAttribute(`data-wheel-direction`, 'up');
    } else if (event.deltaY > 0) {
      el_html.setAttribute(`data-wheel-direction`, 'down');
    }
  });
}

function infoOnTouch() {
  const el_html = document.querySelector('html');
  el_html.setAttribute('data-is-touch', false);

  document.addEventListener('touchstart', (evt) => {
    el_html.setAttribute('data-is-touch', true);
  });

  document.addEventListener('touchend', (evt) => {
    el_html.setAttribute('data-is-touch', false);
  });
}

function infoScrollDirection() {
  const el_html = document.querySelector('html');
  el_html.setAttribute('data-scroll-diretion', '');

  let prevSt = 0;
  let prevDir;
  let distance = 0;

  function update() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st <= 0) st = 0;
    const limit_y = el_html.scrollHeight - el_html.clientHeight;
    if (limit_y <= st) st = limit_y;

    if (st > 0 && limit_y > st) {
      let dir;
      if (prevSt - st > 0) {
        dir = 'up';
      } else {
        dir = 'down';
      }

      distance += prevSt - st;

      if (prevDir != dir) {
        // console.log('dir change!');
        distance = 0;
      }

      const distance_k = 0;
      if (Math.abs(distance) > distance_k) {
        el_html.setAttribute('data-scroll-diretion', dir);
      }

      prevDir = dir;
      prevSt = st;
    }
  }

  update();

  window.addEventListener('scroll', (evt) => {
    update();
  });
}

function infoReadyState() {
  document.addEventListener('readystatechange', () => {
    const el_html = document.querySelector('html');
    el_html.setAttribute(`data-ready-state`, document.readyState);
    if (document.readyState === 'complete') {
      el_html.setAttribute(`data-is-loading`, false);
    } else {
      el_html.setAttribute(`data-is-loading`, true);
    }
  });
}

function infoPath() {
  const el_html = document.querySelector('html');
  const path = window.location.pathname;
  el_html.setAttribute(`data-path`, path);
}

function infoBreakPoint() {
  const el_html = document.querySelector('html');

  function update() {
    const wid = window.innerWidth;
    let prefix = '';
    if (wid < 640) prefix = 'xs';
    if (640 <= wid && wid < 768) prefix = 'sm';
    if (768 <= wid && wid < 1024) prefix = 'md';
    if (1024 <= wid && wid < 1280) prefix = 'lg';
    if (1280 <= wid && wid < 1536) prefix = 'xl';
    if (1536 <= wid && wid < 1800) prefix = '2xl';
    if (1800 <= wid) prefix = '3xl';
    el_html.setAttribute(`data-app-breakpoint`, prefix);

    const el_wid = document.querySelector(`#AppInfo .wid`);
    el_wid.textContent = wid;

    const el_hei = document.querySelector(`#AppInfo .hei`);
    el_hei.textContent = window.innerHeight;
  }

  update();

  window.addEventListener('resize', (evt) => {
    update();
  });
}

function infoiOSSafeArea() {
  const el_html = document.documentElement;
  const html_style = getComputedStyle(el_html);
  const sab = html_style.getPropertyValue('--sab');
  el_html.setAttribute(`data-safe-area-bottom`, sab);
}

function infoScrollTop() {
  const el_html = document.querySelector('html');

  function update() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    el_html.setAttribute('data-scroll-top', st);
  }

  update();

  window.addEventListener('scroll', (evt) => {
    update();
  });
}
