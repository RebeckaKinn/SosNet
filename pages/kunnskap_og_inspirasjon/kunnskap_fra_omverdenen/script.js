import {header} from "../../../components/header/header.js"
import {footer} from "../../../components/footer/footer.js"
import { placeholder } from "../../../components/placeholder/placeholder.js";

window.header = header;
window.footer = footer;
window.placeholder = placeholder;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        ${placeholder()}

        <section>
            
               
                <section class="article_board_content">
                    <article>
                        <h3>Søkelys på sosialt entreprenørskap</h3>
                        <a href="https://wera.no/konferansen-om-sosialt-entreprenorskap/" target="_blank" class="article-illustration-container">
                            <img src="/img/placeholders/default_img.jpg" alt="">
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