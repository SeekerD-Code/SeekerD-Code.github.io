// Aspetta che l'HTML sia completamente caricato prima di eseguire la traduzione
document.addEventListener("DOMContentLoaded", () => {

    const baseTexts = {
            title: "Seeker D. Code | Vetrina App",
            missionTitle: "La filosofia di Seeker D. Code☁️",
            missionText: "Sviluppo applicazioni web e mobile mettendo al centro l'esperienza dell'utente. Credo in un web pulito ed efficiente: i miei progetti sono ottimizzati per consumare pochissimi dati e sono studiati per integrare inserzioni discrete, <strong>rifiutando totalmente pubblicità invasive, pop-up o interruzioni fastidiose</strong> che rovinano l'esperienza d'uso.",
            catUtility: "Utility & Produttività",
            app1Text: "Strumento immediato e leggero per la trascrizione vocale dal vivo. Parla e guarda il testo generarsi in tempo reale, pronto per essere copiato o condiviso.",
            app1Btn: "Apri l'App",
            catUpcoming: "Disponibile a breve",
            app2Text: "La guida definitiva per consultare eventi, fiere del fumetto e gaming in tutta Italia. L'applicazione perfetta per non perdere nessuna data, scoprire i programmi completi e pianificare le tue tappe nel mondo dei comics e dell'intrattenimento.",
            app2Status: "Prossimamente",
            footerRights: "Tutti i diritti riservati.",
        };
        
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