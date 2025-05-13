
export function header(){
    return /*HTML*/`
    <header>
        ${logo()}
        ${mainNav()}
    
    </header>
    
    `;
}






 function logo(){
     return /*HTML*/`
    <div class="flexRow">
        <div>
            <img class="logo" src="img/default_img.jpg" alt="logo">
        </div>
        <p>noe kult</p>
    </div>
    `;
}


 function mainNav(){
    return /*HTML*/`
    <nav>
        <ul class="removeBullet menu">
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