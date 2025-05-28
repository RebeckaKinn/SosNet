import {header} from "../../components/header/header.js"
import {footer} from "../../components/footer/footer.js"
import { placeholder } from "../../components/placeholder/placeholder.js";

window.header = header;
window.footer = footer;
window.placeholder = placeholder;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        ${placeholder()}
    </main>
    ${footer()}
    `;
}