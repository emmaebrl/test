function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "tonMotDePasse") {
        document.getElementById("passwordForm").style.display = "none";
        document.getElementById("hiddenContent").style.display = "block";
    } else {
        alert("Mot de passe incorrect. Réessaie !");
    }
}
