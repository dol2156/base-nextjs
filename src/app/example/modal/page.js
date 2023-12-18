'use client';

export default function Page() {
  
  function onOpenLayerPop(){
    console.log('[page.js : onOpenLayerPop : 6]');
  }
  
  return (
    <>
      <main>
        <h1 className="H1 Sticky Top">Layerpop</h1>
        <section className={`HBox`}>
          <div className="Inner">
            <h2 className="H2 mb-[10px]">AAA</h2>
            <button className={`Button_1`} onClick={onOpenLayerPop}>Open ToolTip_1</button>
          </div>
        </section>
      </main>
    </>
  );
}
