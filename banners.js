// Questo file centralizza la gestione di tutti i banner pubblicitari del sito
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCRITTA IDENTIFICATIVA PER IL BANNER LATERALE (Skyscraper)
    const skyscraperLabel = `
        <p style="font-size: 12px; color: #999; margin-bottom: 5px; text-align: center; text-transform: uppercase; letter-spacing: 1px;">SPONSOR</p>
    `;

    // 2. SCRITTA IDENTIFICATIVA PER IL BANNER IN BASSO (Bottom Banner)
    const bottomBannerLabel = `
        <p style="font-size: 11px; color: #999; margin-bottom: 5px; text-align: center; text-transform: uppercase; letter-spacing: 1px;">SPONSOR</p>
    `;

    // 3. INIEZIONE DELLO STILE PULITO (Rimosso lo sfondo opaco e i bordi tratteggiati segnaposto)
    const style = document.createElement('style');
    style.innerHTML = `
        /* Struttura pulita per il contenitore laterale su PC */
        .ads-sidebar {
            width: 160px; 
            min-height: 600px; 
            margin: 0 auto;
            text-align: center;
        }

        /* Struttura pulita per il banner in basso */
        .ads-banner {
            width: 100%;
            max-width: 728px;
            min-height: 90px;
            margin: 20px auto 
            text-align: center;
        }

        /* 📱 Ottimizzazione per schermi piccoli (Smartphone) */
            @media screen and (max-width: 768px) {
                .ads-sidebar {
                    width: 100%;
                    max-width: 320px;   /* Adatta lo spazio per i banner mobile (es. 320x50 o 320x100) */
                    min-height: 50px;
                    margin-bottom: 20px;
                }
            }
        `;
    document.head.appendChild(style);

// Iniezione delle sole etichette "SPONSOR" PRIMA del codice AdSense, evitando duplicati
    const topAdContainer = document.getElementById('ad-top');
    const bottomAdContainer = document.getElementById('ad-bottom');

    // Usiamo insertAdjacentHTML controllando prima che la scritta non sia già stata inserita!
    if (topAdContainer && !topAdContainer.querySelector('.ad-label-checked')) {
        // Aggiungiamo una classe di controllo 'ad-label-checked' alla stringa HTML
        const safeSkyscraperLabel = skyscraperLabel.replace('<p ', '<p class="ad-label-checked" ');
        topAdContainer.insertAdjacentHTML('afterbegin', safeSkyscraperLabel);
    }
    
    if (bottomAdContainer && !bottomAdContainer.querySelector('.ad-label-checked')) {
        // Aggiungiamo la stessa classe di controllo per il banner in basso
        const safeBottomLabel = bottomBannerLabel.replace('<p ', '<p class="ad-label-checked" ');
        bottomAdContainer.insertAdjacentHTML('afterbegin', safeBottomLabel);
    }
});