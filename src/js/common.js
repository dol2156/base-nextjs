const initCssVar = () => {
  const setCssVar = (evt) => {
    const el_html = document.documentElement;
    el_html.style.setProperty('--vh-100', `${window.innerHeight}px`);
    el_html.style.setProperty('--vh-50', `${window.innerHeight / 2}px`);

    // 컨텐츠 줄자
    const $ruler = document.querySelector(`#ContentsRuler`);
    if ($ruler) {
      const $ruler_inner = document.querySelector(`#ContentsRuler > .Inner`);
      if ($ruler_inner.clientWidth) {
        const ruler_inner_wid = $ruler_inner.clientWidth;
        const real_side_padding = ($ruler.clientWidth - ruler_inner_wid) / 2;
        $ruler_inner.innerText = `${real_side_padding}px + ${ruler_inner_wid}px + ${real_side_padding}px`;
        el_html.style.setProperty('--real-side-padding', `${real_side_padding}px`);
      }
    }

    if (evt && evt.type == 'mousemove') {
      var mouseX = event.clientX; // 마우스의 X 좌표
      var mouseY = event.clientY; // 마우스의 Y 좌표

      el_html.style.setProperty('--mouse-x', `${mouseX}px`);
      el_html.style.setProperty('--mouse-y', `${mouseY}px`);
    }
  };

  document.addEventListener('mousemove', setCssVar);
  window.addEventListener('resize', setCssVar);
  setCssVar();
};

const appIsReady = () => {
  const el_html = document.documentElement;
  el_html.classList.remove('Loading');
};
export { initCssVar, appIsReady };
