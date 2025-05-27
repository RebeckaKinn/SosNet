
export function header(){
    return /*HTML*/`
    <header role="header" class="bottom-shadow">
        ${logo()}
        ${mainNav()}
    
    </header>
    
    `;
}

 function logo() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const logoSrc = isSmallScreen ? "/../img/logo/SosNet-logoSymbol-cropped.svg" : "/../img/logo/SosNet-logo.svg";

    return /*HTML*/`
        <div class="menu">
            <a href="/index.html" class="logo hover-scale">
                <img src="${logoSrc}" alt="logo">
            </a> 
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
                <a>
                    <span class="arrow-indicator">${arrowSvg()}</span>
                    Om SosNet</a> 
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                        <a href="/pages/om_SosNet/om_oss/index.html">Om oss</a>
                    </li>
                    <li class="underline">
                        <a href="/pages/om_SosNet/medlemmer/index.html">Medlemmer</a>
                    </li>
                </ul>
            </li>

            <li><a href="/pages/aktuelt/index.html">Aktuelt og arrangementer</a></li>
            <li>
                <a><span class="arrow-indicator">${arrowSvg()}</span>Kunnskap og inspirasjon</a>
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
            <li class="searchbar">
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}


function arrowSvg(){
    return /*HTML*/`
      <svg width="114" height="223" viewBox="0 0 114 223" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112.7 156.1L113.1 67.8999L1.49994 0.699951L1.29993 65.7L77.9999 111.9L0.999939 157.5L0.699951 222.5L112.7 156.1Z" fill="#EA00A6"/>
        </svg>

    `;
}