import React from "react";

const Slider = () => {
  return (
    <div className="relative bg-[url('/slider_bg.jpg')] bg-cover bg-center text-center">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xs"></div>
      <div className="text-gray-900 relative z-10 flex flex-col items-center justify-center font-main py-12">
        <div className="max-w-3xl text-lg leading-relaxed mx-3">
          <p className="mb-4 text-[24px]"><strong>Rólunk</strong></p>
          {/* <p className="mb-4">Tisztelt leendő megrendelőink!</p> */}
          <p className="mb-4">
            Cégünk bútorok <strong>felújításával, gyártásával</strong> foglalkozik. <br /> Jelen vagyunk
            <strong> lakásokban, irodákban, várótermekben</strong> és  <strong>bankokban</strong>.
          </p>
          <p className="mb-4">
            Hajóktól, színházaktól és nagyobb munkáktól sem riadunk vissza.
            Számos visszatérő ügyfelünk van, akik <strong>bizalommal</strong>  ajánlják cégünket.
          </p>
          <p>
            Reméljük ön is ügyfelünk lesz és mihamarabb bizonyíthatjuk <strong>rátermettségünket</strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
