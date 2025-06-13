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


        <section class="flex column align-items-center">
                
                <section class="advisory_board_content">
                    <div>
                        <img src="/img/partners/iFokus.jpeg.png" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3>iFokus</h3>
                                </li>
                                <li>Kjetil Henrik Kristiansen, <i>daglig leder</i></li>
                                <li>
                                    <a href="mailto:kjetil.henrik.kristiansen@ifokus.as">kjetil.henrik.kristiansen@ifokus.as</a>
                                </li>
                                <li>
                                    <a href="https://ifokus.as" target="_blank">iFokus.as</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                    <div>
                        <img src="/img/partners/Sparebankstiftelsen.png" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3>Sparebankstiftelsen Telemark</h3>
                                </li>
                                <li>Dag Terje Olsen, <i>daglig leder</i></li>
                                <li>
                                    <a href="mailto:jto@sparebankstiftelsen-telemark.nos">jto@sparebankstiftelsen-telemark.no</a>
                                </li>
                                <li>
                                    <a href="https://sparebankstiftelsen-telemark.no" target="_blank">sparebankstiftelsen-telemark.no</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                    <div>
                        <img src="/img/partners/USN.png" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3>Universitetet i Sørøst-Norge</h3>
                                </li>
                                <li>Lars U. Kobro, <i>seniorforsker</i></li>
                                <li>
                                    <a href="mailto:kobro@usn.no">kobro@usn.no</a>
                                </li>
                                <li>
                                    <a href="https://usn.no/sesam" target="_blank">usn.no/sesam</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                   
                </section>
    </main>
    ${footer()}
    `;
}