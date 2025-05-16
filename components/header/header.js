
export function header(){
    return /*HTML*/`
    <header role="header">
        ${logo()}
        ${mainNav()}
    
    </header>
    
    `;
}


//lage burgermeny uten "burger"-merkene. Et pluss-tegn?



 function logo(){
     return /*HTML*/`
    <div class="menu">
        <a href="/index.html" class="logo hover-scale">
            <img src="/../img/placeholder_logo_2.png" alt="logo ">
        </a>
        <i class="main-color">En sosial inovasjons hub</i>
    </div>
    `;
}


 function mainNav(){
    return /*HTML*/`
    <nav id="menu" aria-label="Primary navigation">

        <input id="burger-menu" type="checkbox" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu-list"/>
        <label for="burger-menu" class="hidden-on-desktop" aria-label="Open menu">
            <span></span>
            <span></span>
        </label>


        <ul class="removeBullet menu">
            <li>
                <a href="/index.html">Hjem</a> 
            </li>
            <li>
                <a href="/pages/om_SosNet/index.html">Om SosNet</a> 
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                        <a href="/pages/om_SosNet/index.html">Om oss</a>
                    </li>
                    <li class="underline">
                        <a href="/pages/medlemmer/index.html">Medlemmer</a>
                    </li>
                </ul>
            </li>

            <li><a href="/pages/aktuelt/index.html">Aktuelt</a></li>
            <li>
                <a href="/pages/kunnskap_og_inspirasjon/index.html">Kunnskap og inspirasjon</a>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                        <a href="">Kunnskap fra omverdenen</a>
                    </li>
                    <li class="underline">
                        <a href="">Inspirasjon fra praksis</a>
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