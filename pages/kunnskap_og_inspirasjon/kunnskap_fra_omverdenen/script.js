import {header} from "../../../components/header/header.js"
import {footer} from "../../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">

     <section class="page-header bottom-shadow">
            <div class="page-header-img" >
                 <img src="/img/placeholders/person_stock_photo_2.jpg" alt="">
            </div>

          
            <div class="page-header-overlay"></div>
            <div class="page-header-overlayText">
                <h1 class="main-color-3">Kunnskap fra omverdenen</h1>
               <p>Her deler vi historier, refleksjoner og innblikk som gir påfyll – enten du jobber med bærekraft, samfunnsutvikling, innovasjon eller bare er nysgjerrig. Oppslagene varierer i format og innhold, men har det til felles at de løfter frem initiativ, perspektiver og løsninger som kan bidra til en mer bærekraftig og inkluderende framtid.</p>
            </div>
        </section>
        
        

        <section>
            
            <h2 class="main-margin article-title">Nyeste artikler</h2>
               
                <section class="article_board_content">
                    <article>
                        <h3>Søkelys på sosialt entreprenørskap</h3>
                        <a href="https://wera.no/konferansen-om-sosialt-entreprenorskap/" target="_blank" class="article-illustration-container">
                            <img src="/img/partners/images/hjertnes.jpg" alt="">
                        </a>
                        <div>
                            <p>Den 18. juni møttes nesten 100 mennesker fra ulike sektorer og miljøer i Sandefjord, hvor de satte søkelyset på hvilken rolle sosialt entreprenørskap kan spille for å styrke sosial bærekraft i vår region. Det ble et program til både ettertanke og inspirasjon for handling.</p> 
                            <a href="https://wera.no/konferansen-om-sosialt-entreprenorskap/" target="_blank">Se mer.</a>
                        </div>
                    </article>
                    <article>
                        <h3>GET Academy løser floker!</h3>
                        <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page2/index.html" class="article-illustration-container">
                            <img src="/img/partners/images/get.webp" alt="">
                        </a>
                        <div>
                            <p>Legg til tekst</p> 
                            <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page2/index.html">Se mer.</a>
                        </div>
                    </article>
                    <article>
                        <h3>Sosial bærekraft på styrets bord!</h3>
                        <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page3/index.html" class="article-illustration-container">
                            <img src="/img/placeholders/meeting_stock_photo.jpg" alt="">
                        </a>
                        <div>
                            <p>Synes du det blir for mye snakk om bærekraft? Er det litt uklart hva bærekraft egentlig er, sier du? Da må du passe deg litt, så du ikke havner i bærekraftsamtalenes utenforskap. For nå drar det seg bare mere til!</p> 
                            <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page3/index.html">Se mer.</a>
                        </div>
                    </article>
                </section>

        </section>
    </main>
    ${footer()}
    `;
}

/*
<section class="main-margin">
            <h1 class="main-color">Kunnskap og inspirasjon</h1>
            <section class="grid-layout">
                <p>Her deler vi historier, refleksjoner og innblikk som gir påfyll – enten du jobber med bærekraft, samfunnsutvikling, innovasjon eller bare er nysgjerrig. Oppslagene varierer i format og innhold, men har det til felles at de løfter frem initiativ, perspektiver og løsninger som kan bidra til en mer bærekraftig og inkluderende framtid.</p>
                <div class="article-title-img">
                    <img src="/img/components/SOSNETpuslespill.png" alt="">
                </div>
            </section>
        </section>
*/