

updateView()
function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/`
    <header>
    ${logo()}
    ${header()}</header>
    <main>
    <h1>hallo</h1>
    
    </main>
    <footer></footer>
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


function header(){
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