
export function header(){
    return /*HTML*/`
    <header role="header">
        ${logo()}
        ${mainNav()}
    
    </header>
    
    `;
}



 function logo(){
     return /*HTML*/`
    <div class="menu">
        <a href="/index.html" class="logo hover-scale">
            <img src="/../img/logo/SosNet-logoSymbol.svg" alt="logo ">
        </a>
        <i class="main-color">SosNet - En sosial innovasjons hub</i>
    </div>
    `;
}

//bytte ut pilene med noe som fungerer på mobil også. Lage noen egne ? 
//endre til at den lytter til klikk på mobil og ikke hover på popups. 

 function mainNav(){
    return /*HTML*/`
    <nav id="menu" aria-label="Primary navigation">

        <input id="burger-menu" type="checkbox" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu-list"/>
        <label for="burger-menu" class="wrapper-menu" aria-label="Open menu">
            <span class="line-menu half start"></span>
            <span class="line-menu"></span>
            <span class="line-menu half end"></span>
        </label>


        <ul class="removeBullet menu">
            <li>
                <a href="/index.html">Hjem</a> 
            </li>
            <li>
                <a><span class="arrow-indicator">&#129170;</span>Om SosNet</a> 
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                        <a href="/pages/om_SosNet/om_oss/index.html">Om oss</a>
                    </li>
                    <li class="underline">
                        <a href="/pages/om_SosNet/medlemmer/index.html">Medlemmer</a>
                    </li>
                </ul>
            </li>

            <li><a href="/pages/aktuelt/index.html">Aktuelt</a></li>
            <li>
                <a><span class="arrow-indicator">&#129170;</span>Kunnskap og inspirasjon</a>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                        <a href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/index.html">Kunnskap fra omverdenen</a>
                    </li>
                    <li class="underline">
                        <a href="/pages/kunnskap_og_inspirasjon/inspirasjon_fra_praksis/index.html">Inspirasjon fra praksis</a>
                    </li>
                </ul>    
            </li>
            <li><a href="/pages/kontakt/index.html">Kontakt</a></li>
            <li>
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}