// Függvények kiíratása:
tombA = Tomb(10, 30, 10);
tombB = Tomb(15, 55, 10);
Kiiratas();

// Kiíratás

function Kiiratas() {
    document.write(`<hr>Az "A" tömb elemei: `);
    for (let i = 0; i < tombA.length; i++) {
        document.write(`${tombA[i]}, `);
    }
    document.write(`<hr>A "B" tömb elemei: `);
    for (let j = 0; j < tombB.length; j++) {
        document.write(`${tombB[j]}, `);
    }
    document.write(`<hr>Az "A" tömb elemeinek összege: ${Osszeg(tombA)}, <hr>`);
    document.write(`Az "A" tömb elemeinek átlaga(i): ${Atlag(tombA, Osszeg(tombA))}, <hr>`);
    document.write(`A "B" tömb elemeinek összege: ${Osszeg(tombB)}, <hr>`);
    document.write(`A "B" tömb elemeinek átlaga(i): ${Atlag(tombB, Osszeg(tombB))}, <hr>`);
    document.write(`Az "A" és "B" tömb UNIÓ eleme(i): ${AesBunio(tombA, tombB)}<hr>`);
    document.write(`Az "A" és "B" tömb METSZET eleme(i): ${AesBmetszet(tombA, tombB)}<hr>`);
    document.write(`Az "A" és "B" tömb KÜLÖNBSÉG eleme(i): ${AkulB(tombA, tombB)}<hr>`);
    document.write(`A "B" és "A" tömb KÜLÖNBSÉG eleme(i): ${AkulB(tombB, tombA)}<hr>`);
    document.write(`Az "A" tömb PÁROS eleme(i): ${ParosSzamok(tombA)}<hr>`);
    document.write(`A "B" tömb PÁROS eleme(i): ${ParosSzamok(tombB)}<hr>`);
    document.write(`Az "A" tömb PRÍMSZÁM értéke(i): ${PrimSzamKivalasztas(tombA)}<hr>`);
    document.write(`A "B" tömb PRÍMSZÁM értéke(i): ${PrimSzamKivalasztas(tombB)}<hr>`);
    document.write(`Az "A" tömb MAXIMUM értéke: ${MaxErtek(tombA)}<hr>`);
    document.write(`A "B" tömb MAXIMUM értéke: ${MaxErtek(tombB)}<hr>`);
    document.write(`Az "A" tömb MINIMUM értéke: ${MinErtek(tombA)}<hr>`);
    document.write(`A "B" tömb MINIMUM értéke: ${MinErtek(tombB)}<hr>`);
}

// Ramdom szám generálás

function Rn(alsoHatar, felsoHatar) {
    let also;
    let felso;
    if (alsoHatar < felsoHatar) {
        also = alsoHatar;
        felso = felsoHatar;
    }
    else {
        also = felsoHatar;
        felso = alsoHatar;
    }
    return (Math.round(Math.random() * (felso - also) + also));
}

// Tömb generálás

function Tomb(alsoHatar, felsoHatar, elemSzam) {
    tomb = [];
    for (let i = 0; i < elemSzam; i++) {
        tomb.push(Rn(alsoHatar, felsoHatar));
    }
    return tomb;
}

// Tömb összegének kiírása

function Osszeg(tomb) {
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    return osszeg;
}

// Tömb átlagának kiírása

function Atlag(tomb, osszeg) {
    let atlag = osszeg / tomb.length;
    return atlag;
}

// SzerepelE

function SzerepelE(tomb, tomb2) {
    let szerepelE = false;
    for (let j = 0; j < tomb2.length; j++) {
        if (tomb == tomb2[j]) {
            szerepelE = true;
        }
    }
    return szerepelE;
}

// EgyenloE

function EgyenloE(tomb1, tomb2) {
    let egyenloE = false;
    for (let i = 0; i < tomb2.length; i++) {
        if (tomb1 == tomb2[i]) {
            egyenloE = true;
        }
    }
    return egyenloE;
}

// Unió

function AesBunio(tomb1, tomb2) {
    let unio = [];
    let szerepel = 0;
    for (let i = 0; i < tomb1.length; i++) {
        szerepel = SzerepelE(tomb1[i], unio);
        if (szerepel == false) {
            unio.push(tomb1[i]);
        }
    }

    for (let j = 0; j < tomb2.length; j++) {
        szerepel = SzerepelE(tomb2[j], unio);
        if (szerepel == false) {
            unio.push(tomb2[j]);
        }
    }

    return unio;
}

// Metszet 

function AesBmetszet(tomb1, tomb2,) {
    let metszet = [];
    for (let i = 0; i < tomb1.length; i++) {
        for (let j = 0; j < tomb2.length; j++) {
            if (tomb1[i] == tomb2[j]) {
                let szerepel = SzerepelE(tomb1[i], metszet);
                if (szerepel == false) {
                    metszet.push(tomb1[i]);
                }
            }
        }
    }
    return metszet;
}

// A különbség B és B küléönbség A halmazok

function AkulB(tombA, tombB) {
    let szerepel = 0;
    let egyenlo = 0;
    let halmazKul = [];
    for (let i = 0; i < tombA.length; i++) {
        egyenlo = EgyenloE(tombA[i], tombB);
        if (egyenlo == false) {
            szerepel = SzerepelE(tombA[i], halmazKul);
            if (szerepel == false) {
                halmazKul.push(tombA[i]);
            }
        }
    }
    return halmazKul;
}

// Páros számok kiválasztása

function ParosSzamok(tomb) {
    let parosSzamok = [];
    let szerepelE = 0;
    for (let i = 0; i < tomb.length; i++) {
        szerepelE = SzerepelE(tomb[i], parosSzamok);
        if (tomb[i] % 2 == 0 && szerepelE == false)
            parosSzamok.push(tomb[i]);
    }
    return parosSzamok;
}

// Maximum érték kiválasztása

function MaxErtek(tomb) {
    let maxErtek = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > maxErtek) {
            maxErtek = tomb[i];
        }
    }
    return maxErtek;
}

// Minimum érték kiválasztása

function MinErtek(tomb) {
    let minErtek = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] < minErtek) {
            minErtek = tomb[i];
        }
    }
    return minErtek;
}

// Prímszám kiválasztása

function PrimE(primSzam) {
    let db = 0;
    for (let j = 1; j <= primSzam; j++) {
        if (primSzam % j == 0) {
            db++;
        }
    }
    return db;
}

function PrimSzamKivalasztas(tomb) {
    let primSzam = [];
    let db = 0;
    let szerepelE = 0;
    for (let i = 0; i < tomb.length; i++) {
        db = PrimE(tomb[i]);
        szerepelE = SzerepelE(tomb[i], primSzam)
        if (db == 2 && szerepelE == false) {
            primSzam.push(tomb[i]);
        }
    }
    return primSzam;
}