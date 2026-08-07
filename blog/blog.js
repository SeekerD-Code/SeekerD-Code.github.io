const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz42rluHPkQlJ-oVyBqxkp_IV8Evg21oZhk_NpS9-qCV2gx6xjpbYImJvO8Y3KxiUppwg/exec";

async function caricaBlog() {
    const contentContainer = document.getElementById('content-container');
    const sidebar = document.getElementById('sidebar-blog');

    try {
        sidebar.innerHTML = "<h3>Caricamento...</h3>";

        const response = await fetch(SCRIPT_URL);
        const data = await response.json();

        renderMenu(data);
        renderArticolo(data);

    } catch (error) {
        console.error("Errore:", error);
        contentContainer.innerHTML = `<p style="color:red;">Errore nel caricamento del blog. Riprova più tardi.</p>`;
    }
}

function renderMenu(data) {
    const sidebar = document.getElementById('sidebar-blog');
    const categorie = [...new Set(data.map(item => item.categoria))];

    sidebar.innerHTML = categorie.map(cat => {
        const articoli = data.filter(item => item.categoria === cat);
        return `
            <details>
                <summary>${cat}</summary>
                <ul>
                    ${articoli.map(a => `<li><a href="?articolo=${encodeURIComponent(a.nome_rivelato)}">${a.nome_rivelato}</a></li>`).join('')}
                </ul>
            </details>
        `;
    }).join('');
}

function renderArticolo(data) {
    const params = new URLSearchParams(window.location.search);
    const titoloSelezionato = params.get('articolo');

    if (titoloSelezionato) {
        const articolo = data.find(item => item.nome_rivelato === titoloSelezionato);
        if (articolo) {
            const urlFestMap = "https://seekerdcode.it/FestMap/index.html";

            // Mostra il box della CTA solo se l'articolo ha una CTA (es. è un evento)
            let htmlCta = "";
            if (articolo.cta && articolo.cta.trim() !== "") {
                htmlCta = `
                    <div class="cta-festmap" style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p>${articolo.cta}</p>
                        <a href="${urlFestMap}" target="_blank" style="display: inline-block; font-weight: bold; color: #0066cc; text-decoration: underline;">Vai alla Home di FestMap</a>
                    </div>
                `;
            }

            document.getElementById('content-container').innerHTML = `
                <h1>${articolo.nome_rivelato}</h1>
                <img src="${articolo.locandina}" alt="${articolo.nome_rivelato}" style="max-width:100%; border-radius:8px;">
                <p style="font-weight: bold; margin-top: 15px;">${articolo.descrizioneIniziale}</p>
                <div style="margin: 20px 0; line-height: 1.6;">${articolo.descrizioneCentrale}</div>
                ${htmlCta}
                <p style="margin-top: 15px;">${articolo.descrizioneFinale}</p>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', caricaBlog);
