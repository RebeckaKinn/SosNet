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
               <button onclick="location.href='/pages/kontakt/index.html'">
                    Kontakt oss
                </button>
            </section>


        <section class="flex column align-items-center">
                
                <section class="advisory_board_content">
                    
                    <div>
                        <img src="/img/partners/Sparebankstiftelsen.png" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3 class="name">Jan Terje Olsen</h3>
                                    <i>daglig leder</i>
                                </li>
                                
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
                                    <h3 class="name">Lars U. Kobro</h3>
                                    <i>seniorforsker</i>
                                </li>
                        
                                <li>
                                    <a href="mailto:kobro@usn.no">kobro@usn.no</a>
                                </li>
                                <li>
                                    <h3 class="name">Ramona Lorentsen</h3>
                                    <i>Daglig Leder SESAM</i>
                                </li>
                                <li>
                                    <a href="mailto:ramona.lorentsen@usn.no">ramona.lorentsen@usn.no</a>
                                </li>
                                <li>
                                    <a href="https://usn.no/sesam" target="_blank">usn.no/sesam</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                     <div>
                        <img src="/img/partners/telemark_fylkeskommune_logo.png" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3 class="name">Jon Steinar Tufte</h3>
                                    <i>Fylkessjef samfunnsutvikling</i>
                                </li>
                                <li>
                                    <a href="mailto:jon.steinar.tufte@telemarkfylke.no">jon.steinar.tufte@telemarkfylke.no</a>
                                </li>
                                <li>
                                    <a href="tel:92292468">922 92 468</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                     <div>
                        <img src="/img/partners/START_Logo_H.jpg" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3 class="name">Merete Østerud</h3>
                                    <i></i>
                                </li>
                                <li>
                                    <a href="mailto:Merete.Osterud@sandefjord.kommune.no">Merete.Osterud@sandefjord.kommune.no</a>
                                </li>
                                <li>
                                    <a href="tel:90654828">906 54 828</a>
                                </li>
                            </ul>
                        </address>
                    </div>
                   
                </section>
    </main>
    ${footer()}
    `;
}