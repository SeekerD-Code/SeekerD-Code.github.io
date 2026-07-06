// Aspetta che l'HTML sia completamente caricato prima di eseguire qualsiasi logica
document.addEventListener("DOMContentLoaded", () => {

    // =========================================================================
    // GESTIONE AUTOMATICA SOTTOLINEATURA MENU
    // =========================================================================
    
    // Recupera l'ultimo segmento del percorso attuale (es. "about.html")
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }
    currentPage = currentPage.toLowerCase();

    // Funzione per ripulire l'href e prendere solo il nome del file
    const getFileName = (href) => {
        if (!href) return "";
        return href.split("#")[0].split("?")[0].split("/").pop().toLowerCase();
    };

    // 1. Link standard della nav
    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach(link => {
        const linkFile = getFileName(link.getAttribute("href"));
        
        if (linkFile === currentPage) {
            link.classList.add("current-page");
        }
    });

    // 2. Menu a tendina (dropdown)
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(dropdown => {
        const subLinks = dropdown.querySelectorAll(".dropdown-menu a");
        let isDropdownActive = false;

        subLinks.forEach(subLink => {
            const subLinkFile = getFileName(subLink.getAttribute("href"));
            
            if (subLinkFile === currentPage) {
                isDropdownActive = true;
                subLink.classList.add("current-page");
            }
        });

        if (isDropdownActive) {
            dropdown.classList.add("current-page");
            // Applica la classe anche al trigger interno per sicurezza visiva
            const trigger = dropdown.querySelector(".dropdown-trigger");
            if (trigger) trigger.classList.add("current-page");
        }
    });
        
    document.title = baseTexts.title;
    
    if (document.getElementById('mission-title')) document.getElementById('mission-title').innerHTML = baseTexts.missionTitle;
    if (document.getElementById('mission-text')) document.getElementById('mission-text').innerHTML = baseTexts.missionText;
    if (document.getElementById('cat-utility')) document.getElementById('cat-utility').innerText = baseTexts.catUtility;
    if (document.getElementById('app1-text')) document.getElementById('app1-text').innerText = baseTexts.app1Text;
    if (document.getElementById('app1-btn')) document.getElementById('app1-btn').innerText = baseTexts.app1Btn;
    if (document.getElementById('cat-upcoming')) document.getElementById('cat-upcoming').innerText = baseTexts.catUpcoming;
    if (document.getElementById('app2-text')) document.getElementById('app2-text').innerText = baseTexts.app2Text;
    if (document.getElementById('app2-status')) document.getElementById('app2-status').innerText = baseTexts.app2Status;
    if (document.getElementById('footer-rights')) document.getElementById('footer-rights').innerText = baseTexts.footerRights;
    });