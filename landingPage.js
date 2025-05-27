import {header} from "./components/header/header.js"
import {footer} from "./components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        <section class="landingPageVideo background-color-green" aria-live="polite">
            <video class="frontPageVideo" playsinline autoplay muted loop>
                <source src="/video/placeholder/buissness_talking.mp4" type="video/mp4">
            </video>

          
            <div class="overlay"></div>
            <div class="overlayText">
 
                    <div class="logo">
                        <img src="./../img/logo/SosNet-logo.svg" alt="logo">
                    </div>
                   
               
                <h1>En <span class="main-color-3">sosial innovasjons</span> hub</h1>
                <h2 class="font-responsive">for inspirasjon og kunnskap om sosial bærekraft og sosialt entreprenærskap i Vestfold og Telemark.</h2>
            </div>
        </section>

        <h1>Tittel</h1>
    </main>
    ${footer()}
    `;
}

// <h1><span class="main-color">Sos</span>Net</h1>
/*

  <iframe class="landingPageVideo" aria-live="polite"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1">
            </iframe>

*/

