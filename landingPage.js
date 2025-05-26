import {header} from "./components/header/header.js"
import {footer} from "./components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        <section class="landingPageVideo" aria-live="polite">
            <video class="frontPageVideo" playsinline autoplay muted loop>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video">
            </video>

          
            <div class="overlay"></div>
            <div class="overlayText">
 
                    <div class="logo">
                        <img src="./../img/logo/SosNet-logo.svg" alt="logo">
                    </div>
                   
               
                <h2>En <span class="main-color">sosial innovasjons</span> hub</h2>
                <h3>for inspirasjon og kunnskap om sosial bærekraft og sosialt entreprenærskap i Vestfold og Telemark.</h3>
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

