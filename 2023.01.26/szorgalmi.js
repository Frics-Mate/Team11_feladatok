// Függvények kiíratása:
tombA = Tomb(10, 30, 10);
tombB = Tomb(15, 55, 10);
unio = AesBunio(tombA, tombB);
metszet = AesBmetszet(tombA, tombB);
metszet2 = AesBmetszet2(tombA, tombB);
aKulb = AkulB(tombA, tombB);
bKula = AkulB(tombB, tombA);
aParos = ParosSzamok(tombA);
bParos = ParosSzamok(tombB);
aPrim = PrimSzamKivalasztas(tombA);
bPrim = PrimSzamKivalasztas(tombB);
Kiiratas();

// Kiíratás

function Kiiratas() {
    document.write(`<hr>Az "A" tömb elemei: `);
    for (let i = 0; i < tombA.length; i++) {
        document.write(`${tombA[i]}, `);
    }
    document.write(`<hr>A "B" tömb elemei: `);
    for (let i = 0; i < tombB.length; i++) {
        document.write(`${tombB[i]}, `);
    }
    document.write(`<hr>Az "A" tömb elemeinek összege: ${Osszeg(tombA)}`);
    document.write(`<hr>Az "A" tömb elemeinek átlaga(i): ${Atlag(tombA, Osszeg(tombA))}`);
    document.write(`<hr>A "B" tömb elemeinek összege: ${Osszeg(tombB)}`);
    document.write(`<hr>A "B" tömb elemeinek átlaga(i): ${Atlag(tombB, Osszeg(tombB))}`);
    document.write(`<hr>Az "A" és "B" tömb UNIÓ eleme(i): `);
    for (let i = 0; i < unio.length; i++) {
        document.write(`${unio[i]}, `);
    }
    document.write(`<hr>Az "A" és "B" tömb METSZET eleme(i): `);
    for (let i = 0; i < metszet.length; i++) {
        document.write(`${metszet[i]}, `);
    }
    document.write(`<hr>Az "A" és "B" tömb METSZET2 eleme(i): `);
    for (let i = 0; i < metszet2.length; i++) {
        document.write(`${metszet2[i]}, `);
    }
    document.write(`<hr>Az "A" és "B" tömb KÜLÖNBSÉG eleme(i): `);
    for (let i = 0; i < aKulb.length; i++) {
        document.write(`${aKulb[i]}, `);
    }
    document.write(`<hr>A "B" és "A" tömb KÜLÖNBSÉG eleme(i): `);
    for (let i = 0; i < bKula.length; i++) {
        document.write(`${bKula[i]}, `);
    }
    document.write(`<hr>Az "A" tömb PÁROS eleme(i): `);
    for (let i = 0; i < aParos.length; i++) {
        document.write(`${aParos[i]}, `);
    }
    document.write(`<hr>A "B" tömb PÁROS eleme(i): `);
    for (let i = 0; i < bParos.length; i++) {
        document.write(`${bParos[i]}, `);
    }
    document.write(`<hr>Az "A" tömb PRÍMSZÁM értéke(i): `);
    for (let i = 0; i < aPrim.length; i++) {
        document.write(`${aPrim[i]}, `);
    }
    document.write(`<hr>A "B" tömb PRÍMSZÁM értéke(i): `);
    for (let i = 0; i < bPrim.length; i++) {
        document.write(`${bPrim[i]}, `);
    }
    document.write(`<hr>Az "A" tömb MAXIMUM értéke: ${MaxErtek(tombA)}`);
    document.write(`<hr>A "B" tömb MAXIMUM értéke: ${MaxErtek(tombB)}`);
    document.write(`<hr>Az "A" tömb MINIMUM értéke: ${MinErtek(tombA)}`);
    document.write(`<hr>A "B" tömb MINIMUM értéke: ${MinErtek(tombB)}`);
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

// Unió

function AesBunio(tomb1, tomb2) {
    let unio = [];
    for (let i = 0; i < tomb1.length; i++) {
        if (SzerepelE(tomb1[i], unio) == false) {
            unio.push(tomb1[i]);
        }
    }

    for (let j = 0; j < tomb2.length; j++) {
        if (SzerepelE(tomb2[j], unio) == false) {
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
                if (SzerepelE(tomb1[i], metszet) == false) {
                    metszet.push(tomb1[i]);
                }
            }
        }
    }
    return metszet;
}

// Metszet2 

function AesBmetszet2(tomb1, tomb2,) {
    let metszet2 = [];
    for (let i = 0; i < tomb1.length; i++) {
        if (SzerepelE(tomb1[i], metszet2) == false && SzerepelE(tomb1[i], tomb2) == true) {
            metszet2.push(tomb1[i]);
        }
    }
    return metszet2;
}

// A különbség B és B küléönbség A halmazok

function AkulB(tombA, tombB) {
    let halmazKul = [];
    for (let i = 0; i < tombA.length; i++) {
        if (SzerepelE(tombA[i], tombB) == false && SzerepelE(tombA[i], halmazKul) == false) {
            halmazKul.push(tombA[i]);
        }
    }
    return halmazKul;
}

// Páros számok kiválasztása

function ParosSzamok(tomb) {
    let parosSzamok = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0 && SzerepelE(tomb[i], parosSzamok) == false)
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
    for (let i = 0; i < tomb.length; i++) {
        if (PrimE(tomb[i]) == 2 && SzerepelE(tomb[i], primSzam) == false) {
            primSzam.push(tomb[i]);
        }
    }
    return primSzam;
}