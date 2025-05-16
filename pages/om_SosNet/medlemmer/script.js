import {header} from "/../../../components/header/header.js"
import {footer} from "/../../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        
    </main>
    ${footer()}
    `;
}