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

const getCss = (var_name) => {
  let rootStyles = window.getComputedStyle(document.documentElement);
  return rootStyles.getPropertyValue(var_name).trim();
};

const appIsReady = () => {
  const $html = document.documentElement;
  $html.classList.remove('Loading');
};
export { appIsReady, pageScroll, modalControl, layerControl, getCss };
