function JelszoEllenorzes() {
    let jelszo = document.querySelector("#passwd").value;
    let jelszoIsmet = document.querySelector("#repasswd").value;
    if (jelszo !== jelszoIsmet) {
        return alert("A két jelszó nem egyezik!");
    }
    else if (jelszo == "" || jelszoIsmet == "") {
        return alert("A jelszó nem lehet üres!");
    }
}