

export function footer(){
    return /*HTML*/`
    <footer role="footer">
        <section class="justify-self-end">
            <div class="logo">
            <img src="img/placeholder_logo_2.png" alt="logo">
            </div>
        </section>
        <section class="justify-self-start width-100">
            <address class="flex column flex-gap-1rem">
                <ul class="flex column flex-gap-05rem">
                    <li>SosNet</li>
                    <li>Åmundsgate 33,</li>
                    <li>3255 Larvik</li>
                </ul>

                <ul class="flex column flex-gap-05rem">
                    <li>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                    <li>
                        <a href="tel:+4712345678">+47 123 45 678</a>
                    </li>
                </ul>
            </address>

            <p class="text-align-center">&copy; 2025 SosNet. All rights reserved.</p>
        </section>
        <section>del 3</section>
    </footer>
    
    `;
}