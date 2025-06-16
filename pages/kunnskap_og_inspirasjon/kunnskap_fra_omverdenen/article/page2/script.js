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
                    <img src="/img/partners/images/get.webp" alt="">
                </div>
                <div class="main-margin article-header-text">
                    <h1 class="main-color-3">GET Academy</h1>
                    <p>GET Academy er en nytenkende digital IT-skole og sosial entreprenør som jobber for å redusere utenforskap og har de som står utenfor jobb og utdanning som målgruppe. Målet er å gi unge voksne med IT-interesse en ny sjanse og vei inn i arbeidslivet og livsendrende karrieremuligheter.</p>          
                </div>
            </section>
        
            <section class="main-margin grid-layout">
                <section>
                    <h2></h2>
                    <p>Man trenger ingen formell utdannelse for å starte på GET Academy, det blir bare gjort 
                    en kort opptaksprøve for å se at motivasjonen er der. Selve utdanningsløpet starter 
                    med Start IT som er 20 uker grunnleggende opplæring i koding og programmering.</p>
                    <p>Videre kommer GET Prepared som forbereder studenten på praksis med ytterligere forbedring av kompetansen før man kan søke seg videre til GET IT som er et års praksis kombinert med skreddersydd opplæring i samråd med bedriften studenten er i praksis hos.</p>    
                </section>

                <section>
                
                </section>

                <section>
                    <h2>Fra IT-interesse til IT-jobb</h2>
                    <p>Skolen har siden 2017 tatt over 100 studenter ut i fast jobb etter GET IT med 1 års praksis 
                    i bedrift. I 2024 fikk 91% av studenter på GET IT jobb etter endt praksis og 95 studenter gjennomførte Start IT. Dette er en økning på 14% fra 2023. <i>(ferd.no/fse-prosjekter/get-academy)</i></p>
                    <p>Det som gjør GET Academy unikt er fokuset på å utvikle studenter gjennom nøkkelkompetanser som er ettertraktet av arbeidsgivere. Det blir en styrke for både student
                    og bedrift, noe som er reflektert i det gode arbeidet de i praksis gjør og hvor raskt de setter seg inn i arbeidsoppgavene de får. Også det med yrkesrettet undervisning der studentene lærer å kode i C#, Javascript og jobber med React.</p>
                    <p>Denne tilnærmingen gir studentene basiskunnskapene de trenger for å raskt komme i gang i arbeid både under praksis, men og arbeidslivet generelt til forhold til høyskoleutdanning der teori og mer tradisjonell skolegang er mer i fokus.</p>
                </section>

                <section>
                    <h2>Skreddersydd praksis - samarbeid med bedrift</h2>
                    <p>Studenter i praksis får en skreddersydd opplæring i samarbeid med praksisbedrift for å få et så godt samarbeid som mulig etter bedriftens behov og hvilke systemer de bruker i arbeidet.</p>
                    <p>Bedriften betaler for praksisplass, noe som er rimeligere enn tradisjonell rekruttering og GET Academy håndterer hele rekrutteringsprosessen og gir støtte og veiledning som øker studentens læringsutbytte.</p>
                    <p>Nøkkelkompetanser innenfor lærling og tenking, samarbeid & kommunikasjon, selvledelse og refleksjon.</p>
                </section>

                  <section>
                    <h2>En ny sjanse – og en ny start</h2>
                    <p>GET Academy viser at det finnes løsninger på utenforskap når man tør å tenke nytt. 
                    Ved å fokusere på motivasjon og potensial, og ikke bare vitnemål, får unge voksne mulighet til å ny karriere. Samtidig får næringslivet tilgang på ny kompetanse, verdifulle medarbeidere og et konkret bidrag til samfunnsansvaret.</p>

                </section>


            </section>
        
        
        </article>
    </main>
    ${footer()}
    `;
}