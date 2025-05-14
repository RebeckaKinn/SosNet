
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
                <a>Om SosNet</a>
                
            </li>

            <li><a>Aktuelt</a></li>
            <li>
                <a>Kunnskap og inspirasjon</a>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">
                    Kunnskap fra omverdenen</li>
                    <li class="underline">Inspirasjon fra praksis</li>
                </ul>    
            </li>
            <li><a>Medlemmer</a></li>
            <li><a>Kontakt</a></li>
            <li>
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}