letszamMennyiseg.addEventListener("change", MennyisegSzamolo);

function MennyisegSzamolo() {
    let letszam = document.querySelector("#letszamMennyiseg").value;
    let tej = Number(letszam) * 0.2;
    let tojas = Number(letszam) * 2;
    let kristalyCukor = Number(letszam) * 1;
    if (letszam >= 1) {
        document.querySelector("#tej").innerHTML = tej.toFixed(1);
        document.querySelector("#tojas").innerHTML = tojas;
        document.querySelector("#cukor").innerHTML = kristalyCukor;
    }
    else {
        document.querySelector("#tej").innerHTML = "0.2";
        document.querySelector("#tojas").innerHTML = "2";
        document.querySelector("#cukor").innerHTML = "1";
    }
}