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

        ${content()}
    </main>
    ${footer()}
    `;
}


function content(){
    return /*html*/`
    <section class="grid-layout">
        <section class="main-margin">
            <h2>Hva er SosNet?</h2>
            <p>SosNet er et regionalt nettverk for sosial bærekraft og innovasjon i Vestfold og Telemark. Vi kobler mennesker, ideer og prosjekter på tvers av sektorer – med mål om å skape et mer inkluderende og rettferdig samfunn.</p>
        </section>

        <section class="main-margin">
            <div class="banner-img">
                <img src="/../../img/components/SOSNETfigurer.png" alt="">
            </div>
        </section>
    </section>

        <section class="flex column align-items-center background-color-green bottom-shadow">
            <h2 class="color-white">Våre verdier</h2>
            <div class="information-card-container">
                
                <article class="flex column align-items-center information-card text-align-center bottom-shadow">
                    <h3 class="main-color-3">Mangfold som styrke</h3>
                    <p>Ulike perspektiver skaper nye ideer, og det er i forskjellene vi finner mulighetene.</p>
                    <img src="/img/components/brikke.png" alt="">
                </article>
                <article class="flex column align-items-center information-card text-align-center">
                    <h3 class="main-color-3">Samarbeid på tvers</h3>
                    <p>Vi samler aktører fra næringsliv, offentlige tjenester og frivillighet for å finne løsninger sammen.</p>
                    <img src="/img/components/brikke_2.png" alt="">
                </article>
                <article class="flex column align-items-center information-card text-align-center">
                    <h3 class="main-color-3">Handling for bærekraft</h3>
                    <p>Sosial bærekraft er vårt felles ansvar. Hos oss blir idéer til handling.</p>
                    <img src="/img/components/brikke_3.png" alt="">
                </article>
            </div>
        </section>

        <section class="grid-layout">
         <section class="main-margin">
            <h2>Hva skjer?</h2>
            <p>Hold deg oppdatert på kommende samlinger, workshops og initiativer.</p>
            <ul class="">
                <li>🌿 Kickoff for nye medlemmer – høsten 2025 (kommer snart)</li>
                <li>💬 Webinar om sosial bærekraft i praksis</li>
                <li>🤝 Nettverksmøte i Skien – dato annonseres</li>
            </ul>
        </section>

         <section class="main-margin">
            <blockquote class="">
                «Det er ikke sant at like barn leker best. Når ulike barn kommer sammen, kan nye ideer og løsninger gro frem.»
            </blockquote>
        </section>

        <section class="main-margin">
            <h2>Bli med i fellesskapet</h2>
            <p>Vil du bidra til sosial bærekraft i regionen? Bli en del av SosNet-nettverket og koble deg på engasjerte mennesker med samme mål.</p>
            <button>
                <a href="/pages/om_SosNet/medlemmer/script.js" class="">Les mer om medlemskap</a>
            </button>
        </section>
    </section>
    `;
}


