import {header} from "./components/header.js"

window.header = header;

renderLandingPage()
function renderLandingPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main>
    <h1>hallo</h1>
    
    </main>
    <footer></footer>
    `;
}

