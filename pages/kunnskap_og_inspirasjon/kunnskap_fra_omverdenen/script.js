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

        <section class="main-margin">
            
               
                <section class="article_board_content">
                    <article>
                        <h2>Søkelys på sosialt entreprenørskap</h2>
                        <div>
                            <img src="/img/placeholders/default_img.jpg" alt="">
                        </div>
                        <p>Den 18. juni møttes nesten 100 mennesker fra ulike sektorer og miljøer i Sandefjord, hvor de satte søkelyset på hvilken rolle sosialt entreprenørskap kan spille for å styrke sosial bærekraft i vår region. Det ble et program til både ettertanke og inspirasjon for handling.</p> 
                        <a href="https://wera.no/konferansen-om-sosialt-entreprenorskap/" target="_blank">Se mer.</a>
                    </article>
                    <article>
                        <h2>GET Academy løser floker!</h2>
                        <div>
                            <img src="/img/placeholders/default_img.jpg" alt="">
                        </div>
                        <p>Kort tekst som sier noe informativt/journalist’aktig om GET sin tilnærming. Se mer: peke til en lengre artikkel om en suksess som handler om å koble bedrift, student og GET. Feel free!</p> 
                        <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page2/index.html">Se mer.</a>
                    </article>
                    <article>
                        <h2>Sosial bærekraft på styrets bord!</h2>
                        <div>
                            <img src="/img/placeholders/default_img.jpg" alt="">
                        </div>
                        <p>Synes du det blir for mye snakk om bærekraft? Er det litt uklart hva bærekraft egentlig er, sier du? Da må du passe deg litt, så du ikke havner i bærekraftsamtalenes utenforskap. For nå drar det seg bare mere til!</p> 
                        <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/article/page3/index.html">Se mer.</a>
                    </article>
                </section>

        </section>
    </main>
    ${footer()}
    `;
}