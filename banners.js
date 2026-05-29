// Questo file centralizza la gestione di tutti i banner pubblicitari del sito
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CODICE DEL BANNER LATERALE (Skyscraper)
    const skyscraperCode = `
        <div class="adsense-skyscraper">
            <!-- Incolla qui sotto il codice HTML che ti darà Google AdSense -->
            <p style="font-size: 12px; color: #999; margin-bottom: 5px;">SPONSOR</p>
            <div style="width: 160px; height: 600px; background: rgba(33, 158, 188, 0.05); border: 1px dashed rgba(33, 158, 188, 0.2); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 11px;">
                Spazio Pubblicitario<br>(Left Skyscraper 160x600)
            </div>
        </div>
    `;

    // 2. CODICE DEL BANNER IN BASSO (Bottom Banner)
    const bottomBannerCode = `
        <div class="adsense-bottom">
            <!-- Incolla qui sotto il codice HTML che ti darà Google AdSense -->
            <p style="font-size: 11px; color: #999; margin-bottom: 5px;">SPONSOR</p>
            <div style="width: 100%; max-width: 728px; height: 90px; background: rgba(33, 158, 188, 0.05); border: 1px dashed rgba(33, 158, 188, 0.2); display: flex; align-items: center; justify-content: center; text-align: center; font-size: 12px; margin: 0 auto;">
                Spazio Pubblicitario<br>(Bottom Leaderboard 728x90)
            </div>
        </div>
    `;

    // Iniezione automatica nei punti corretti della pagina
    const topAdContainer = document.getElementById('ad-top');
    const bottomAdContainer = document.getElementById('ad-bottom');

    if (topAdContainer) topAdContainer.innerHTML = skyscraperCode;
    if (bottomAdContainer) bottomAdContainer.innerHTML = bottomBannerCode;
});