function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".kontaktform");
    const success = document.getElementById("success-message");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // verhindert Seitenreload

            // Erfolgsmeldung anzeigen
            success.style.display = "block";

            // Formular leeren
            form.reset();

            // Meldung nach 6 Sekunden automatisch ausblenden
            setTimeout(() => {
                success.style.display = "none";
            }, 6000);
        });
    }
});
