import {header} from "../../../components/header/header.js"
import {footer} from "../../../components/footer/footer.js"
import { placeholder } from "../../../components/placeholder/placeholder_medlemmer.js";

window.header = header;
window.footer = footer;
window.placeholder = placeholder;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        ${placeholder()}
        <section class="main-margin flex column justify-content-center align-items-center">
               <h2>Spørsmål?</h2>
               <p class="text-align-center">Har du spørsmål om medlemskap eller annet? Ta kontakt!</p>
               <button>
                    <a href="/pages/kontakt/index.html">Kontakt oss</a>
                </button>
            </section>
    </main>
    ${footer()}
    `;
}