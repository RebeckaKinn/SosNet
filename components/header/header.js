
export function header(){
    return /*HTML*/`
    <header role="header" class="bottom-shadow">
        ${logo()}
        ${mainNav()}
    
    </header>
    
    `;
}

 function logo() {
    const isSmallScreen = window.matchMedia("(max-width: 1400px)").matches;
    const logoSrc = isSmallScreen ? "/../img/logo/SosNet-logoSymbol-cropped.svg" : "/../img/logo/SosNet-logo.svg";

    return /*HTML*/`
        <div class="menu">
            <a href="/index.html" class="logo hover-scale">
                <img src="${logoSrc}" alt="logo">
            </a> 
        </div>
    `;
}

//endre til at den lytter til klikk på mobil og ikke hover på popups. 

 function mainNav(){
    return /*HTML*/`
    <nav id="menu" aria-label="Hovedmeny">

        <input id="burger-menu" type="checkbox" aria-label="Åpne/lukk meny" aria-expanded="false" aria-controls="menu-list"/>
        <label for="burger-menu" class="wrapper-menu" aria-label="Åpne meny" role="button">
            <span class="line-menu half start"></span>
            <span class="line-menu"></span>
            <span class="line-menu half end"></span>
        </label>


        <ul id="menu-list" class="removeBullet menu" role="menubar">
            <li role="none">
                <a href="/index.html" role="menuitem">Hjem</a> 
            </li>
            <li role="none">
                <a aria-haspopup="true" aria-expanded="false" aria-controls="submenu-omSosnet">
                    <span class="arrow-indicator">${arrowSvg()}</span>
                    Om SosNet</a> 
                <ul class="removeBullet popUpSection column flex-gap-1rem" role="menu" hidden>
                    <li role="none" class="underline">
                        <a href="/pages/om_SosNet/om_oss/index.html" role="menuitem">Om oss</a>
                    </li>
                    <li role="none" class="underline">
                        <a href="/pages/om_SosNet/medlemmer/index.html" role="menuitem">Medlemmer</a>
                    </li>
                </ul>
            </li>

            <li role="none"><a href="/pages/aktuelt/index.html" role="menuitem">Aktuelt og arrangementer</a></li>
            <li role="none">
                <a aria-haspopup="true" aria-expanded="false" aria-controls="submenu-kunnskap"><span class="arrow-indicator">${arrowSvg()}</span>Kunnskap og inspirasjon</a>
                <ul class="removeBullet popUpSection column flex-gap-1rem" role="menu" hidden>
                    <li role="none" class="underline">
                        <a role="menuitem" href="/pages/kunnskap_og_inspirasjon/kunnskap_fra_omverdenen/index.html">Kunnskap fra omverdenen</a>
                    </li>
                    <li role="none" class="underline">
                        <a role="menuitem" href="/pages/kunnskap_og_inspirasjon/inspirasjon_fra_praksis/index.html">Inspirasjon fra praksis</a>
                    </li>
                </ul>    
            </li>
            <li role="none"><a role="menuitem" href="/pages/kontakt/index.html">Kontakt</a></li>
            <li role="none" class="searchbar">
                <input id="site-search" type="text" placeholder="Søk" role="searchbox">
                <div class="svg-mask" aria-hidden="true"></div>
            </li>
            <li role="none" aria-label="Språkvalg">
                ${flagIcons()}
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

function flagIcons(){
    return /*HTML*/`
    <div class="flex row justify-content-center align-items-center flex-gap-05rem">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#ac2431"></rect>
            <path fill="#fff" d="M31 12L17 12 17 4 9 4 9 12 1 12 1 20 9 20 9 28 17 28 17 20 31 20 31 12z"></path>
            <path fill="#061a57" d="M31 14L15 14 15 4 11 4 11 14 1 14 1 18 11 18 11 28 15 28 15 18 31 18 31 14z"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
            <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
            <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
            <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
            <rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
            <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect>
            <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
            <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
        </svg>
    </div>
    `;
}

