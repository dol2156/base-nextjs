const initCssVar = () => {
  const setCssVar = (evt) => {
    const $html = document.documentElement;

    // 컨텐츠 줄자
    const $ruler = document.querySelector(`#ContentsRuler`);
    if ($ruler) {
      const $ruler_inner = document.querySelector(`#ContentsRuler > .Inner`);
      if ($ruler_inner.clientWidth) {
        const ruler_inner_wid = $ruler_inner.clientWidth;
        const real_side_padding = ($ruler.clientWidth - ruler_inner_wid) / 2;
        $ruler_inner.innerText = `${real_side_padding}px + ${ruler_inner_wid}px + ${real_side_padding}px`;
        $html.style.setProperty('--real-side-padding', `${real_side_padding}px`);
      }
    }

    // 스크린 높이
    $html.style.setProperty('--vh-100', `${window.innerHeight}px`);
    $html.style.setProperty('--vh-50', `${window.innerHeight / 2}px`);

    // 마우스 위치
    if (evt && evt.type == 'mousemove') {
      var mouseX = event.clientX; // 마우스의 X 좌표
      var mouseY = event.clientY; // 마우스의 Y 좌표

      $html.style.setProperty('--mouse-x', `${mouseX}px`);
      $html.style.setProperty('--mouse-y', `${mouseY}px`);
    }

    // 대쉬보드 헤더 높이
    const $dheader = document.querySelector(`#DashBoardHeader`);
    if ($dheader) {
      const dheader_hei = $dheader.clientHeight;
      $html.style.setProperty('--dashboard-header-hei', `${dheader_hei}px`);
    }
  };

  document.addEventListener('mousemove', setCssVar);
  window.addEventListener('resize', setCssVar);
  setCssVar();
};

/* 2023-11-30 :: START :: pageScroll */
const pageScroll = {};

pageScroll.Top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

pageScroll.Bottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};
/* // 2023-11-30 :: END :: pageScroll */

/* 2023-10-21 :: START :: modalControl */
const modalControl = {};

modalControl.On = () => {
  const $modal = document.querySelector(`#Modal`);
  $modal.classList.add(`On`);
};

modalControl.Off = () => {
  const $modal = document.querySelector(`#Modal`);
  $modal.classList.remove(`On`);
};
/* // 2023-10-21 :: END :: modalControl */

/* 2023-10-21 :: START :: layerControl */
const layerControl = {};

/**
 *
 * @param layer_id
 * @constructor
 */
layerControl.On = (layer_id, callback) => {
  modalControl.On();

  const el_layer_id = document.querySelector(layer_id);
  el_layer_id.classList.add(`On`);
};

/**
 * @param layer_id
 * @constructor
 */
layerControl.Off = () => {
  modalControl.Off();

  const el_layer_list = document.querySelectorAll(`.LayerPopup`);
  el_layer_list.forEach((el_layer, idx) => {
    el_layer.classList.remove(`On`);
  });
};
/* // 2023-10-21 :: END :: layerControl */

const appIsReady = () => {
  const $html = document.documentElement;
  $html.classList.remove('Loading');
};
export { initCssVar, appIsReady, pageScroll, modalControl, layerControl };
