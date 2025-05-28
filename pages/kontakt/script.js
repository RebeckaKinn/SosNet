import {header} from "../../components/header/header.js"
import {footer} from "../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    const mapIframe = embedMapByAddress("Kjølnes ring 56, 3918 Porsgrunn, Norway")
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main" class="flex-gap-2rem">
       


        <section class="landingPageVideo landingPageImageContainer bottom-shadow background-color-green">
            <div class="frontPageVideo ">
                <img src="/img/placeholders/ai_people.webp" alt="">
            </div>
        
            <div class="overlay"></div>
            <div class="overlayText">
                <h1 class="main-color-3">Kontakt oss</h1>
                <p class="font-responsive">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

             <div class="gradient-line gradient-background"></div>
        </section>

        <section class="grid-layout main-margin">
            <section class="grid-layout-x2fr">

                <div class="flex column">
                    <h2>Ta kontakt</h2>
                
                    <div class="profile-img-mask">
                        <img src="/img/placeholders/man.png" alt="">
                    </div>
                </div>
                
                    <address class="flex column flex-gap-1rem text-align-right">
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

        <section class="">
            <h2>Finn oss</h2>
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
        <section class="map">
            <div class="">${mapIframe}</div>
        </section>

    </main>
    ${footer()}
    `;
}

 function embedMapByAddress(address) {
  const encodedAddress = encodeURIComponent(address);
  return /*HTML*/ `
    <iframe
      width="100%"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=${encodedAddress}&output=embed">
    </iframe>
  `;
}