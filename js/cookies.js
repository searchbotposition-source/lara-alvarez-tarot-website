document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.querySelector(".cookie-banner");
    const acceptBtn = document.querySelector(".cookie-button.accept");
    const rejectBtn = document.querySelector(".cookie-button.reject");
    const settingsBtn = document.querySelector(".cookie-button.settings");
    const saveSettingsBtn = document.querySelector(".save-settings");

    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block";
    }

    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });

    rejectBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "rejected");
        cookieBanner.style.display = "none";
    });

    settingsBtn.addEventListener("click", function() {
        $('#cookieSettingsModal').modal('show');
    });

    saveSettingsBtn.addEventListener("click", function() {
        $('#cookieSettingsModal').modal('hide');
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });
});
