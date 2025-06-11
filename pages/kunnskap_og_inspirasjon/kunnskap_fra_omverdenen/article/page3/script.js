import {header} from "../../../../../components/header/header.js"
import {footer} from "../../../../../components/footer/footer.js"
import { placeholder } from "../../../../../components/placeholder/placeholder.js";

window.header = header;
window.footer = footer;
window.placeholder = placeholder;

renderPage()
function renderPage(){
    document.body.innerHTML = /*HTML*/`
    ${header()}
    <main role="main">

        <article>
            <section class="grid-layout article-header background-color-green-linear bottom-shadow">
                <div class="article-header-img bottom-shadow">
                    <img src="/img/placeholders/meeting_stock_photo.jpg" alt="">
                </div>
                <div class="main-margin article-header-text">
                    <h1 class="main-color-3">Sosial bærekraft på styrets bord!</h1>
                    <p>Synes du det blir for mye snakk om bærekraft? Er det litt uklart hva bærekraft egentlig er, sier du? Da må du passe deg litt, så du ikke havner i bærekraftsamtalenes utenforskap. For nå drar det seg bare mere til!</p>          
                </div>
            </section>
        
            <section class="main-margin grid-layout">
                <section>
                    <h2>Nå drar det seg til!</h2>
                    <p>Den 11. oktober 2024 vedtok regjeringen nye regler for bærekraftrapportering. De trådte i kraft fra 1. november 2024. Lovendringen er en respons på EØS-direktiv om selskapers bære-kraftrapportering (CRSD). Den nye tilpasningen av de europeiske reglene er basert på et forslag i norske Prop. 57 L (2023–2024), pluss forslag til endringer i regnskapsloven mv.</p>
                    <p>I de nye reglene løftes arbeid med sosial bærekraft ut fra skyggen av «all annen» bærekraft, hvor fokuset på klima, energi og forurensning av sjø, luft og jord har hatt dominerende oppmerksomhet.</p>
                    <p>CSRD utvider kravene til rapportering av foretakers virkeområdet vesentlig på miljømessige, sosiale og styringsmessige forhold. Kravene vil i første omgang gjelde store foretak, men mindre selskaper vil også påvirkes fordi CSRD vil kreve at de store foretakene henter dokumentasjon fra underleverandører og øvrige deler av verdikjeden.</p>
                </section>

                <section>
                    <h2>Kort om bakgrunn</h2>
                    <p>CSRD er ett av flere regelverk som inngår i EUs handlingspakke for bærekraft. Ett av hovedformålene er å likestille ikke-finansiell rapportering, den såkalte bærekraftrapporteringen, med ordinær finansiell rapportering. Dette er motivert ut fra målet om å fremskynde et mer bærekraftig arbeidsliv. Tradisjonelt har det vært et skille mellom finansiell og ikke-finansiell rapportering, dette smelter nå mer sammen og begrepet «ikke-finansiell rapportering» erstattes med bærekraftrapportering i CSRD. Sosial bærekraft flyttes dermed høyere opp på dagsorden.</p>
                    <p>Myndighetene ser at investorer trenger pålitelig informasjon om foretakenes påvirkning på klima og sosialt miljø, sammen med fremtidige utsikter og risiko for slik påvirkning. Med CSRD på plass, vil investorer og samarbeidspartnere lettere kunne identifisere hvilke selskaper som er best rustet for bærekraftig drift. I første runde av CSRD-rapportering, som vi etter hvert har vendt oss litt til, har det vært et hovedfokus på «grønt» miljø; klima, energi, avfall, utslipp, etc. Fra 2024 ble oppmerksomheten dreid mer mot også å inkludere sosiale forhold; sosiale verdier, i dokumentasjon og rapportering.</p>
                </section>

                <section>
                    <h2>Hva da, sosiale forhold, liksom?</h2>
                    <p>Rapporteringen under CSRD er basert på prinsippet om dobbel vesentlighet. Prinsippet innebæ-rer at foretakene skal analysere og rapportere hvilken påvirkning de har på omgivelsene, og motsatt; hvilken påvirkning omgivelsene har på foretaket. En dobbelt vesentlighetsanalyse på det sosiale området, skal derfor gi et kvalifisert helhetlig bilde av hvilke positive (eventuelt negative effekter) virksomheten har på sine lokale/regionale omgivelser med hensyn til menneskelige faktorer, kort sagt. Her vil bedriftens vilje og anstrengelse for å ta inn arbeidstakere fra såkalte sårbare grupper; innvandrere, funksjonshemmede, andre utenforskap. Nå er naturligvis ikke poenget med å koble potensiell arbeidskraft «under radaren» for ordinære rekrutteringsrutiner, med et arbeidsliv som roper etter arbeidskraft, bare være et svar på rapporteringskrav. Det er sannsynligvis en god idé i seg selv – det kan skape vinn-vinn effekt på begge sider av det såkalte utenforskapet.</p>
                    <p>SosNet skal være en hub hvor bedrifter med krav og ambisjoner om sosial bærekraft, treffer mennesker, miljøer og organisasjoner som står tett på «utenforskapet».</p>
                </section>

                  <section>
                    <h2>Tiden er inne og alt håp er ikke ute!</h2>
                    <p>Den «omsorgskrisen» mange snakker om, skapes ikke av eldrebølgen. Den skapes av forestillingen om at omsorg ikke kan gjøres annerledes enn i dag. (Morgendagens omsorg, Meld. St. 29 (2012-2013)).</p>
                    <p>Det er ikke tvil om at CSRD-rapportering, nå også på det sosiale området, vil medføre mye arbeid for foretakene som omfattes. Men det er åpenbart også en oppside her! Endringene vil gi drivkraft til ideer, nye koblinger og løsninger på samfunnets velferdsutfordringer. Kvalifisert kunnskap om sosial bærekraft viser at bred involvering fra personer og miljøer som står tett på samfunnets sosiale utfordringer, sosialfaglige kompetanser og mennesker med egne erfaringer fra psykisk uhelse, funksjonshemming eller annet utenforskap, er viktige ressurser å trekke med i arbeidet. Den sosiale bærekraften som CSRD-regimet forutsetter, åpner for strategiske samarbeidsavtaler mellom sosiale-humanitære aktører, sosiale entreprenører og lokalt næringsliv.</p>
                    <p>Slik utvikling, læring og kobling trenger et økosystem å vokse i. SosNet skal være en sentral HUB i et slikt økosystem.</p>
                </section>


            </section>
        
        
        </article>
    </main>
    ${footer()}
    `;
}