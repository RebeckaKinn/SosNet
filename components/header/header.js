
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
        <div class="logo">
            <img src="img/placeholder_logo_2.png" alt="logo">
        </div>
        <i class="main-color">En sosial inovasjons hub</i>
    </div>
    `;
}


 function mainNav(){
    return /*HTML*/`
    <nav>
        <ul class="removeBullet menu flex-gap-1-5rem">
            <li>
                <span>Om SosNet</span>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">test</li>
                    <li class="underline">test en lang setning</li>
                    <li class="underline">test</li>
                </ul>
            </li>

            <li><span>Aktuelt</span></li>
            <li>
                <span>Kunnskap og inspirasjon</span>
                <ul class="removeBullet popUpSection column flex-gap-1rem">
                    <li class="underline">Kunnskap fra omverdenen</li>
                    <li class="underline">Inspirasjon fra praksis</li>
                </ul>    
            </li>
            <li><span>Medlemmer</span></li>
            <li><span>Kontakt</span></li>
            <li>
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}