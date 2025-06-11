import {header} from "../../components/header/header.js"
import {footer} from "../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
   
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main" class="flex-gap-2rem">
       <section class="background-color-green-linear banner bottom-shadow">
            <article class="main-margin flex column justify-content-center flex-gap-1rem">
                <h1 class="main-color-3">Kontakt oss</h1>
                <p>SosNet er et handlingsorientert nettverk, ikke en organisasjon. Vi har derfor ikke et styre i konvensjonell forstand. I stedet styrer vi nettverkets retning og aktiviteter mest mulig kollektivt, i form av fire åpne nettverksmøter årlig. Mellom møtene er det et Advisory Board som snakker seg framover og oppover mot nettverks målsetting om mer og bedre sosial bærekraft i Vestfold og Telemark.</p>
                
                </article>
            <div class="banner-img">
                <img src="/img/placeholders/ai_people.webp" alt="">
            </div>
            <div class="gradient-line gradient-background"></div>
        </section>
       

        <section class="grid-layout main-margin">
            <section>
            
            <div class="flex justify-content-center align-items-baseline flex-gap-1rem">
            <div class="contact-logo-container">
                    <img src="/img/some/phone.svg" alt="">
                </div>
                <h2>Ta kontakt</h2>
                </div>
            <section class="grid-layout-x2fr">

                
                    <div class="profile-img-mask">
                        <img src="/img/people/Lars_Kobro_portrett.JPG" alt="">
                    </div>
                
                    <address class="flex column flex-gap-1rem ">
                        <ul class="flex column flex-gap-05rem">
                            <li>
                            <h3>Lars U. Kobro</h3>
                            <i>SosNet koordinator og seniorforsker</i>
                            </li>
                            <li>
                                <a class="font-responsive" href="mailto:kobro@usn.no">kobro@usn.no</a>
                            </li>
                            <li>
                                <a class="font-responsive" href="tel:+4790942561">+47 909 42 561</a>
                            </li>
                        </ul>
                    </address>
        
            </section>
            </section>

            <section>
                <div class="flex justify-content-center align-items-baseline flex-gap-1rem">
                <div class="contact-logo-container">
                    <img src="/img/some/location.svg" alt="">
                </div>
                    <h2>Finn oss</h2>
                </div>
            <address class="flex column flex-gap-1rem">
                <ul class="flex column flex-gap-05rem font-responsive">
                    <li>
                        <p><b  class="font-responsive">Universitetet I Sørøst-Norge</b></p>
                        <p><i>Senter for sosialt entreprenørskap og samskapende sosial innovasjon, SESAM.</i></p>
                    </li>
                    <li>Kjølnes ring 56</li>
                    <li>3918 Porsgrunn</li>
                </ul>
            </address>
            </section>

            </section>

            <section class="flex column align-items-center">
                <h3>Advisory board er under rekruttering.</h3>
                <section class="advisory_board_content">
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                        <address>
                            <ul>
                                <li>
                                    <h3>Navn</h3>
                                </li>
                                <li>Organisasjon</li>
                                <li>Mail</li>
                                <li>Telefonnummer</li>
                            </ul>
                        </address>
                    </div>
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                    </div>
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                    </div>
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                    </div>
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                    </div>
                    <div>
                        <img src="/img/placeholders/default_profile_img.jpg" alt="">
                    </div>
                </section>
            </section>

        
        

    </main>
    ${footer()}
    `;
}


/*
alternativ header image:
 <section class="landingPageVideo landingPageImageContainer bottom-shadow background-color-green">
            <div class="frontPageVideo ">
                <img src="/img/placeholders/ai_people.webp" alt="">
            </div>
        
            <div class="overlay"></div>
            <div class="overlayText">
                <h1 class="main-color-3">Kontakt oss</h1>
                <p class="font-responsive">SosNet er et handlingsorientert nettverk, ikke en organisasjon. Vi har derfor ikke et styre i konvensjonell forstand. I stedet styrer vi nettverkets retning og aktiviteter mest mulig kollektivt, i form av fire åpne nettverksmøter årlig. Mellom møtene er det et Advisory Board som snakker seg framover og oppover mot nettverks målsetting om mer og bedre sosial bærekraft i Vestfold og Telemark.</p>
            </div>

             <div class="gradient-line gradient-background"></div>
        </section>

*/