
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
            <li>Om SosNet</li>
            <li>Aktuelt</li>
            <li>Kunnskap og inspirasjon</li>
            <li>Medlemmer</li>
            <li>Kontakt</li>
            <li>
                <input type="text" placeholder="Søk">
            </li>
        </ul>
    </nav>
    
    `;
}