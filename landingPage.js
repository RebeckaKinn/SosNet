import {header} from "./components/header/header.js"
import {footer} from "./components/footer/footer.js"

window.header = header;
window.footer = footer;

renderLandingPage()
function renderLandingPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main>
    <h1>hallo</h1>
    
    </main>
    ${footer()}
    `;
}

