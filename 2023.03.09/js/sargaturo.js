letszamMennyiseg.addEventListener("change", MennyisegSzamolo);

function MennyisegSzamolo() {
    let letszam = document.querySelector("#letszamMennyiseg").value;
    let tej = Number(letszam) * 0.2;
    let tojas = Number(letszam) * 2;
    let kristalyCukor = Number(letszam) * 1;
    document.querySelector("#tej").innerHTML = tej.toFixed(1);
    document.querySelector("#tojas").innerHTML = tojas;
    document.querySelector("#cukor").innerHTML = kristalyCukor;
}