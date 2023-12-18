'use client';

import Confirm_1 from '@/app/example/alert/Confirm_1';
import ToolTip_1 from '@/components/layerpop/ToolTip_1';
import { modalControl } from '@/js/common';
import { useRef } from 'react';

export default function Page() {
  const ref_layerpop = useRef();

  function onOpenLayerPop() {
    modalControl.On();

    const $layerpop = ref_layerpop.current;
    $layerpop.classList.add('On');
  }

  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Layerpop</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className="H2 mb-[10px]">AAA</h2>
            <button className={`Button_1`} onClick={onOpenLayerPop}>
              Open ToolTip_1
            </button>
            <br />
            <button className={`Button_1`} onClick={onOpenLayerPop}>
              Open Confirm_1
            </button>
          </div>
        </section>
      </main>
      <div ref={ref_layerpop} className={`LayerPopup`}>
        <ToolTip_1 />
      </div>
      <div ref={ref_layerpop} className={`LayerPopup`}>
        <Confirm_1 />
      </div>
    </>
  );
}
