function kalkulal() {
    //Űrlapadatok
    const szelesseg = document.querySelector("#szelesseg").value;
    const magassag = document.querySelector("#magassag").value;
    const papir = document.querySelector("#papirtipus").value;
    //Számítások
    let terulet = Math.round((Number(szelesseg) * Number(magassag)) / 10000);
    let koltseg = terulet * Number(papir);
    document.querySelector("#terulet").innerHTML = terulet;
    document.querySelector("#papir").innerHTML = papir;
    document.querySelector("#koltseg").innerHTML = koltseg;
    //Megjelenítés
    document.querySelector("#valasz").style.visibility = "visible";
}