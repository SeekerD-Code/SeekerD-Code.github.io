// Questo file centralizza la gestione di tutti i banner pubblicitari del sito
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CODICE DEL BANNER LATERALE (Skyscraper)
    const skyscraperCode = `
        <div class="adsense-skyscraper">
            <p style="font-size: 12px; color: #999; margin-bottom: 5px;">SPONSOR</p>
            <div class="banner-box-lateral">
                Spazio Pubblicitario<br><span class="desktop-only">(Left Skyscraper 160x600)</span>
            </div>
        </div>
    `;

    // 2. CODICE DEL BANNER IN BASSO (Bottom Banner)
    const bottomBannerCode = `
        <div class="adsense-bottom">
            <p style="font-size: 11px; color: #999; margin-bottom: 5px;">SPONSOR</p>
            <div style="width: 100%; max-width: 728px; height: 90px; background: rgba(33, 158, 188, 0.05); border: 1px dashed rgba(33, 158, 188, 0.2); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 12px; margin: 0 auto;">
                Spazio Pubblicitario<br>(Bottom Leaderboard 728x90)
            </div>
        </div>
    `;

    // 3. INIEZIONE DELLO STILE RESPONSIVE (Evita di dover toccare il file CSS separato)
    const style = document.createElement('style');
    style.innerHTML = `
        /* Stile di base per il banner laterale su PC */
        .banner-box-lateral {
            width: 160px; 
            height: 600px; 
            background: rgba(33, 158, 188, 0.05); 
            border: 1px dashed rgba(33, 158, 188, 0.2); 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            text-align: center; 
            font-size: 11px;
            margin: 0 auto;
        }
        .desktop-only { display: inline; }

        /* 📱 Trasformazione per schermi piccoli (Smartphone) */
        @media screen and (max-width: 768px) {
            .banner-box-lateral {
                width: 100%;
                max-width: 320px;   /* Dimensione standard dei banner mobile */
                height: 75px;       /* Diventa un banner orizzontale sottile */
                font-size: 12px;
            }
            .desktop-only { display: none; } /* Nasconde il "160x600" che non avrebbe senso su mobile */
        }
    `;
    document.head.appendChild(style);

    // Iniezione automatica nei punti corretti della pagina
    const topAdContainer = document.getElementById('ad-top');
    const bottomAdContainer = document.getElementById('ad-bottom');

    if (topAdContainer) topAdContainer.innerHTML = skyscraperCode;
    if (bottomAdContainer) bottomAdContainer.innerHTML = bottomBannerCode;
});