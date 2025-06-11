import {header} from "../../../../../components/header/header.js"
import {footer} from "../../../../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
         <article>
            <section class="grid-layout article-header background-color-green-linear bottom-shadow">
                <div class="article-header-img bottom-shadow">
                    <img src="/img/partners/images/hjertnes.jpg" alt="">
                </div>
                <div class="main-margin article-header-text">
                    <h1 class="main-color-3">Tittel</h1>
                    <p>Tekst</p>          
                </div>
            </section>
        
            <section class="main-margin grid-layout">
                <section>
                    <h2></h2>
                    <p></p>
                </section>

                <section>
                    <h2></h2>
                    <p></p>
                </section>

                <section>
                    <h2></h2>
                    <p></p>
                </section>

                  <section>
                    <h2></h2>
                    <p></p>
                </section>


            </section>
        
        
        </article>
    </main>
    ${footer()}
    `;
}