
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
        <a href="index.html" class="logo">
            <img src="img/placeholder_logo_2.png" alt="logo">
        </a>
        <i class="main-color">En sosial inovasjons hub</i>
    </div>
    `;
}


 function mainNav(){
    return /*HTML*/`
    <nav>
        <ul class="removeBullet menu flex-gap-1-5rem">
            <li>
                <a href="pages/om_SosNet/index.html">Om SosNet</a>
                
            </li>

            <li><a href="pages/aktuelt/index.html">Aktuelt</a></li>
            <li>
                <a href="pages/kunnskap_og_inspirasjon/index.html">Kunnskap og inspirasjon</a>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                    Kunnskap fra omverdenen</li>
                    <li class="underline">Inspirasjon fra praksis</li>
                </ul>    
            </li>
            <li><a href="pages/medlemmer/index.html">Medlemmer</a></li>
            <li><a href="pages/kontakt/index.html">Kontakt</a></li>
            <li>
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}