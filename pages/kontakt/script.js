import {header} from "../../components/header/header.js"
import {footer} from "../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    const mapIframe = embedMapByAddress("Kjølnes ring 56, 3918 Porsgrunn, Norway")
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
    
    
        <div class="gradient-line top gradient-background"></div>
    <section class="grid-layout">
        <section class="contact-img-section">
            <div class="img-container bottom-shadow outline">

                <img src="/img/placeholders/ai_people.webp" alt="">
            </div>
           
        </section>
        <section class="main-margin">
            <h1 class="">Kotakt oss</h1>
            <address class="flex column flex-gap-1rem">
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

        <section class="main-margin text-align-right">
            <h1>Finn oss</h1>
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
        <section>
            <div class="outline-2">${mapIframe}</div>
        </section>
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