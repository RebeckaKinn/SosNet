import {header, initAccessibleMenus} from "./components/header/header.js"
import {footer} from "./components/footer/footer.js"

window.header = header;
window.initAccessibleMenus = initAccessibleMenus;
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
    initAccessibleMenus();
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
            <button onclick="location.href='/pages/aktuelt/index.html'">
                Se hva som skjer
            </button>
        </section>

         <section class="main-margin">
            <h2>Kommende arrangementer</h2>
            <section>
                <h3>Informasjons og rekrutteringsmøte</h3>
                <p>I begynnelsen av september blir det informasjon og mobiliseringsmøter for etablering av SosNet. Velg ut ett av de tre følgende møtene. De vil være like i innhold, så du trenger bare å velge det som passer deg/dere best mht. tid eller lokalitet. Møtet varer fra 10.00 – 11.30. Vi serverer lunsj fra 11.30 – 12.00.</p>
                <ul>
                    <li><b>Tirsdag 2.9. Kl. 10.00 – 12.00.</b> <i>Colab Larvik sentrum. Vertskap/sted: NHO.</i></li>
                    <li><b>Onsdag 3.9. Kl. 10.00 – 12.00.</b> <i>Campus Vestfold. Bakkenteigen. Vertskap/sted: USN.</i></li>
                    <li><b>Torsdag 4.9. kl. 10.00 – 12.00.</b> <i>Fylkeshuset i Skien. Vertskap/sted: TFK.</i></li>
                </ul>
                <p>
                    Det vil være enkelt program, med eksempler og konkretisering av SosNets mål og arbeidsform. Vi vil ikke forvente signering av noe forpliktende dokumenter/innmelding til nettverket på møtet. Det vil foregå, for interesserte i dagene/ukene, etterpå. Vi vil sette pris på å vite om dere kommer, og i tilfelle hvem. Møtet er gratis, men vi vil vite hvem som kommer!
                </p>
                <div>
                    <p><b>Meld deg på Informasjons og rekrutteringsmøtet her:</b></p>
                    <a href="https://nettskjema.no/a/537671" target="_blank">
                        <button>Påmelding</button>
                    </a>
                </div>
            </section>
            
        </section>

         <section class="image-under-content">
            <div class="frontPageVideo">
                <img src="/img/placeholders/person_stock_photo.jpg" alt="">
            </div>
            
            <blockquote class="image-under-content-overlayText bottom-shadow">
                «Det er ikke sant at like barn leker best. Når ulike barn kommer sammen, kan nye ideer og løsninger gro frem.»
            </blockquote>
        </section>

      

        <section class="main-margin">
            <h2>Bli med i fellesskapet</h2>
            <p>Vil du bidra til sosial bærekraft i regionen? Bli en del av SosNet-nettverket og koble deg på engasjerte mennesker med samme mål.</p>
            <button onclick="location.href='/pages/om_SosNet/medlemmer/index.html'">
                Les mer om medlemskap
            </button>
        </section>
    </section>
    `;
}


