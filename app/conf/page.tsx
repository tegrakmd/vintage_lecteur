import React from "react";
import ThreeCanvas from "./canvas";

export default function NextJSNights() {
  return (
    <div className="relative text-white bg-black min-h-lvh">
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="relative flex items-start min-[740px]:items-center h-full max-w-6xl mx-auto">
          <div className="grid w-full grid-cols-1 min-[740px]:grid-cols-2">
            <div className="relative p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 min-[740px]:fixed">
                <ThreeCanvas />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full max-w-md mx-auto">
                <img
                  data-galaxy-logo-target=""
                  aria-hidden="true"
                  alt=""
                  src="data:image/svg+xml,%3Csvg%20width%3D%22731%22%20height%3D%22998%22%20viewBox%3D%220%200%20731%20998%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_867_109)%22%3E%0A%3Crect%20width%3D%22731%22%20height%3D%22998%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.845%20201.923H57V757.062H150.476V320.584L720.623%201056.92C746.35%201039.71%20770.858%201020.82%20794%201000.42Z%22%20fill%3D%22url(%23paint0_linear_867_109)%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.845%20201.923H57V757.062M150.476%20757.062V320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint1_radial_867_109)%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.846%20201.923M150.477%20320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint2_linear_867_109)%22%20stroke-width%3D%226%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.846%20201.923M150.477%20320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint5_linear_867_109)%22%20stroke-width%3D%226%22%2F%3E%0A%3Cpath%20d%3D%22M620.5%20201.423V757.423H527.5V201.423H620.5Z%22%20fill%3D%22url(%23paint3_linear_867_109)%22%20stroke%3D%22url(%23paint4_linear_867_109)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_867_109%22%20x1%3D%22192%22%20y1%3D%22299.5%22%20x2%3D%22755.065%22%20y2%3D%221023.63%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%220.240385%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220.490385%22%2F%3E%0A%3Cstop%20offset%3D%220.845111%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CradialGradient%20id%3D%22paint1_radial_867_109%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(57%20202)%20rotate(78.078)%20scale(486.494%20419.352)%22%3E%0A%3Cstop%20offset%3D%220.467188%22%20stop-color%3D%22%2300FF00%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2300FF00%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FradialGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_867_109%22%20x1%3D%22280%22%20y1%3D%22490.5%22%20x2%3D%22649%22%20y2%3D%22965%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.322115%22%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%220.692308%22%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_867_109%22%20x1%3D%22574%22%20y1%3D%22201.923%22%20x2%3D%22572.442%22%20y2%3D%22609.501%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_867_109%22%20x1%3D%22574%22%20y1%3D%22201.923%22%20x2%3D%22574%22%20y2%3D%22756.923%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300FF00%22%2F%3E%0A%3Cstop%20offset%3D%220.831181%22%20stop-color%3D%22%2300FF00%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_867_109%22%20x1%3D%22280%22%20y1%3D%22490.5%22%20x2%3D%22649%22%20y2%3D%22965%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%230000FF%22%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.322115%22%20stop-color%3D%22%230000FF%22%2F%3E%0A%3Cstop%20offset%3D%220.692308%22%20stop-color%3D%22%230000FF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230000FF%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_867_109%22%3E%0A%3Crect%20width%3D%22731%22%20height%3D%22998%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                  className="max-w-full max-h-full opacity-0 max-[740px]:max-h-[40vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center max-w-6xl mx-auto min-h-lvh">
        <div className="grid min-h-lvh w-full grid-cols-1 min-[740px]:grid-cols-2 px-8">
          <div className="p-4">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-md mx-auto">
              <img
                aria-hidden="true"
                alt=""
                src="data:image/svg+xml,%3Csvg%20width%3D%22731%22%20height%3D%22998%22%20viewBox%3D%220%200%20731%20998%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_867_109)%22%3E%0A%3Crect%20width%3D%22731%22%20height%3D%22998%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.845%20201.923H57V757.062H150.476V320.584L720.623%201056.92C746.35%201039.71%20770.858%201020.82%20794%201000.42Z%22%20fill%3D%22url(%23paint0_linear_867_109)%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.845%20201.923H57V757.062M150.476%20757.062V320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint1_radial_867_109)%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.846%20201.923M150.477%20320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint2_linear_867_109)%22%20stroke-width%3D%226%22%2F%3E%0A%3Cpath%20d%3D%22M794%201000.42L173.846%20201.923M150.477%20320.584L720.623%201056.92%22%20stroke%3D%22url(%23paint5_linear_867_109)%22%20stroke-width%3D%226%22%2F%3E%0A%3Cpath%20d%3D%22M620.5%20201.423V757.423H527.5V201.423H620.5Z%22%20fill%3D%22url(%23paint3_linear_867_109)%22%20stroke%3D%22url(%23paint4_linear_867_109)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_867_109%22%20x1%3D%22192%22%20y1%3D%22299.5%22%20x2%3D%22755.065%22%20y2%3D%221023.63%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%220.240385%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220.490385%22%2F%3E%0A%3Cstop%20offset%3D%220.845111%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CradialGradient%20id%3D%22paint1_radial_867_109%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(57%20202)%20rotate(78.078)%20scale(486.494%20419.352)%22%3E%0A%3Cstop%20offset%3D%220.467188%22%20stop-color%3D%22%2300FF00%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2300FF00%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FradialGradient%3E%0A%3ClinearGradient%20id%3D%22paint2_linear_867_109%22%20x1%3D%22280%22%20y1%3D%22490.5%22%20x2%3D%22649%22%20y2%3D%22965%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.322115%22%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%220.692308%22%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint3_linear_867_109%22%20x1%3D%22574%22%20y1%3D%22201.923%22%20x2%3D%22572.442%22%20y2%3D%22609.501%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23FF0000%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FF0000%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint4_linear_867_109%22%20x1%3D%22574%22%20y1%3D%22201.923%22%20x2%3D%22574%22%20y2%3D%22756.923%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%2300FF00%22%2F%3E%0A%3Cstop%20offset%3D%220.831181%22%20stop-color%3D%22%2300FF00%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22paint5_linear_867_109%22%20x1%3D%22280%22%20y1%3D%22490.5%22%20x2%3D%22649%22%20y2%3D%22965%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%230000FF%22%20stop-opacity%3D%220%22%2F%3E%0A%3Cstop%20offset%3D%220.322115%22%20stop-color%3D%22%230000FF%22%2F%3E%0A%3Cstop%20offset%3D%220.692308%22%20stop-color%3D%22%230000FF%22%2F%3E%0A%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230000FF%22%20stop-opacity%3D%220%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3CclipPath%20id%3D%22clip0_867_109%22%3E%0A%3Crect%20width%3D%22731%22%20height%3D%22998%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                className="max-w-full max-h-full opacity-0 max-[740px]:max-h-[40vh]"
              />
            </div>
          </div>

          <main className="p-4 min-[740px]:flex min-[740px]:items-center max-[740px]:pb-[40svh]">
            <div className="flex flex-col justify-center w-full min-[740px]:h-full max-w-md gap-12 mx-auto">
              <h1 className="sr-only">Next.js Nights</h1>

              <div
                className="grid items-center w-full grid-cols-3 animate-fade-slide-up"
                style={{ animationDelay: "200ms" }}>
                <span className="justify-self-start font-mono text-[14px] text-white/40">
                  NEXT.JS NIGHTS
                </span>
                <svg
                  viewBox="0 0 76 65"
                  fill="white"
                  className="w-8 h-8 justify-self-center"
                  aria-label="Vercel">
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                <span className="justify-self-end font-mono text-[14px] text-white/40">
                  JUNE 2026
                </span>
              </div>

              <div className="-mx-3 flex w-[calc(100%+24px)] flex-col gap-2">
                <a
                  href="https://lu.ma/vercel-408x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end justify-between w-full px-3 py-3 transition-colors rounded animate-fade-slide-up hover:bg-white/8"
                  style={{ animationDelay: "275ms" }}>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-mono text-[14px] font-medium text-white">
                      SAN FRANCISCO
                    </span>
                    <span className="font-mono text-[14px] text-white/40">
                      TUESDAY, JUNE 9, 17:30 PDT
                    </span>
                  </span>
                  <span className="font-mono text-[14px] text-white/40">
                    RSVP›
                  </span>
                </a>

                <a
                  href="https://lu.ma/34nqdfc3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end justify-between w-full px-3 py-3 transition-colors rounded animate-fade-slide-up hover:bg-white/8"
                  style={{ animationDelay: "350ms" }}>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-mono text-[14px] font-medium text-white">
                      AMSTERDAM
                    </span>
                    <span className="font-mono text-[14px] text-white/40">
                      THURSDAY, JUNE 11, 18:30 CEST
                    </span>
                  </span>
                  <span className="font-mono text-[14px] text-white/40">
                    RSVP›
                  </span>
                </a>

                <a
                  href="https://lu.ma/lfr946sc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-end justify-between w-full px-3 py-3 transition-colors rounded animate-fade-slide-up hover:bg-white/8"
                  style={{ animationDelay: "425ms" }}>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-mono text-[14px] font-medium text-white">
                      LONDON
                    </span>
                    <span className="font-mono text-[14px] text-white/40">
                      THURSDAY, JUNE 18, 17:30 BST
                    </span>
                  </span>
                  <span className="font-mono text-[14px] text-white/40">
                    RSVP›
                  </span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
