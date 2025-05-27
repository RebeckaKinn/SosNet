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
        
    <section class="grid-layout">
        <section class="contact-img-section">
            <div class="img-container">

                <img src="/img/placeholders/default_img.jpg" alt="">
            </div>
            <div class="gradient-line gradient-background"></div>
        </section>
        <section>
            <h1>Kotakt oss</h1>
            <div>${mapIframe}</div>
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