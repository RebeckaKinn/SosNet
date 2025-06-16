

export function placeholder(){
    return /*HTML*/`
        <section>

            <section class="landingPageVideo landingPageImageContainer background-color-green bottom-shadow" aria-live="polite">
                <video class="frontPageVideo" playsinline autoplay muted loop>
                    <source src="/video/placeholder/buissness_working.mp4" type="video/mp4">
                </video>
            
                <div class="overlay"></div>
                <div class="overlayText">
                    <h1 class="main-color-3">Under oppbygging</h1>
                    <p class="font-responsive">Denne siden er under oppbygging. Vi jobber med å få innholdet på plass her.</p>
                    <p class="font-responsive">Takk for tålmodigheten!</p>
                </div>

            </section>
            <section class="main-margin flex column justify-content-center align-items-center">
               <h2>Spørsmål?</h2>
               <p class="text-align-center">Har du spørsmål om denne siden eller trenger mer informasjon? Ta gjerne kontakt med oss – vi hjelper deg gjerne!</p>
               <button onclick="location.href='/pages/kontakt/index.html'">
                   Kontakt oss
                </button>
            </section>
        </section>
    `;
}