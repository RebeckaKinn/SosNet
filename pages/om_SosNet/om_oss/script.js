import {header} from "/../../../components/header/header.js"
import {footer} from "/../../../components/footer/footer.js"

window.header = header;
window.footer = footer;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">
        
    <section class="main-margin">
        <article>
            <h1>Om SosNet</h1>
            
            <p><b>SosNet er et regionalt nettverk med aktører fra ulike sektorer som, gjennom sin ulikhet, vil  bidra med å øke sosial bærekraft i næringslivet, i offentlige tjenester og i sivilsamfunnet i Vestfold og Telemark.</b></p>
            
            <p>Det er ikke sant at like barn leker best. Det er kanskje harmonisk og stille da, men det er nok fordi de leker det de alltid har lekt. Når ulike barn kommer sammen kan det oppstå nye ideer, ny kunnskap i kombinasjoner av det hver av dem allerede vet, og nye løsninger kan gro fram, som hver av dem ikke hadde tenkt på. Det kan bli krangel og bråk av slikt, men ikke om ulikheten gror i tillit. SosNet skal derfor være et nettverk bygget på ulikhet, nysgjerrighet og tillit. </p>
            
            <p>På disse sidene vi vi spre kunnskap, dele gode eksempler, invitere til samlinger og bygge fellesskap om sosial bærekraft i regionen.</p>
            
            <p><b>Sosial bærekraft</b> handler både om å forebygge og reparere ulikhet i helse, urettferdighet, utenforskap og utrygghet i arbeidsliv og samfunnsliv. Det er ikke «de andres» ansvar – det er oss alles ansvar. Bli med, da vel!</p>
            
            <p>Tekst om medlemskap inn her. Priser, betingelser, fordeler, etc. </p>
        </article>
        
    </section>



    </main>
    ${footer()}
    `;
}
//legge inn bilder, fordele tekst eventuelt. 
//siste <p> må erstattes med informasjon