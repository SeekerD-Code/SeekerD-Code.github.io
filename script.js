const translations = {
    it: {
        title: "Seeker D. Code | Vetrina App",
        missionTitle: "La nostra filosofia",
        missionText: "Sviluppiamo applicazioni web e mobile mettendo al centro l'esperienza dell'utente. Crediamo in un web pulito ed efficiente: i nostri progetti sono ottimizzati per consumare pochissimi dati e sono studiati per integrare inserzioni discrete, <strong>rifiutando totalmente pubblicità invasive, pop-up o interruzioni fastidiose</strong> che rovinano l'esperienza d'uso.",
        catUtility: "Utility & Produttività",
        app1Text: "Strumento immediato e leggero per la trascrizione vocale dal vivo. Parla e guarda il testo generarsi in tempo reale, pronto per essere copiato o condiviso.",
        app1Btn: "Apri l'App",
        catEntertainment: "Intrattenimento & Eventi",
        app2Text: "La guida definitiva per consultare eventi, fiere del fumetto e gaming in tutta Italia. Resta sempre aggiornato sulle date e i programmi. (In Sviluppo)",
        app2Status: "Prossimamente",
        footerRights: "Tutti i diritti riservati.",
        adTop: "Spazio Pubblicitario (Banner AdSense Top)",
        adBottom: "Spazio Pubblicitario (Banner AdSense Bottom)"
    },
    en: {
        title: "Seeker D. Code | App Showcase",
        missionTitle: "Our Philosophy",
        missionText: "We develop web and mobile applications focusing entirely on user experience. We believe in a clean and efficient web: our projects are optimized to consume very little data and are designed to integrate discrete ads, <strong>totally rejecting invasive advertising, pop-ups, or annoying interruptions</strong> that ruin usability.",
        catUtility: "Utility & Productivity",
        app1Text: "A lightweight, instant tool for live voice transcription. Speak and watch the text generate in real time, ready to be copied or shared.",
        app1Btn: "Open App",
        catEntertainment: "Entertainment & Events",
        app2Text: "The ultimate guide to checking comic cons, gaming events, and festivals across Italy. Stay updated on dates and schedules. (In Development)",
        app2Status: "Coming Soon",
        footerRights: "All rights reserved.",
        adTop: "Advertising Space (AdSense Top Banner)",
        adBottom: "Advertising Space (AdSense Bottom Banner)"
    }
};

// Rileva la lingua del dispositivo
const userLang = (navigator.language || navigator.userLanguage).slice(0, 2);

// Forza l'inglese se la lingua non è l'italiano
const lang = translations[userLang] ? userLang : 'en';

// Esegui la traduzione degli elementi al caricamento
document.title = translations[lang].title;
document.getElementById('mission-title').innerHTML = translations[lang].missionTitle;
document.getElementById('mission-text').innerHTML = translations[lang].missionText;
document.getElementById('cat-utility').innerText = translations[lang].catUtility;
document.getElementById('app1-text').innerText = translations[lang].app1Text;
document.getElementById('app1-btn').innerText = translations[lang].app1Btn;
document.getElementById('cat-entertainment').innerText = translations[lang].catEntertainment;
document.getElementById('app2-text').innerText = translations[lang].app2Text;
document.getElementById('app2-status').innerText = translations[lang].app2Status;
document.getElementById('footer-rights').innerText = translations[lang].footerRights;
document.getElementById('ad-top').innerText = translations[lang].adTop;
document.getElementById('ad-bottom').innerText = translations[lang].adBottom;
