//JavaScript Felmérés I.

//1. feladat
document.write(`<hr>1. feladat:<br><br>`);
function keszito() {
    return document.write(`A készítő neve: Frics Máté<br><br> Csoportjának típusa: Junior Frontend fejlesztő + Webfejlesztő<br><br> Csoport azonosítója: #Team11<br><br>`);
}
document.write(`${keszito()}`);

//2. feladat
document.write(`<hr>2. feladat:<br><br>`);

function hatvanyozo(hatvanySzam, hatvanyKitevo) {
    let hatvanyErtek = hatvanySzam ** hatvanyKitevo;
    return hatvanyErtek;
}
document.write(`A hatvanyértéked ${hatvanyozo(2, 3)}<br>`);
document.write(`A hatvanyértéked ${hatvanyozo(5, 3)}<br>`);

//3. feladat
document.write(`<hr>3. feladat:<br><br>`);

function parosLetrehoz(intervallumEleje, intervallumVege) {
    let randomSzam = Math.round(Math.random() * (intervallumVege - intervallumEleje) + intervallumEleje);
    if (randomSzam % 2 == 0) {
        return randomSzam;
    }
    else if (randomSzam % 2 !== 0 && randomSzam != intervallumVege) {
        return randomSzam - 1;
    }
    else {
        return randomSzam + 1;
    }
}
document.write(`Az intervallum közötti generált ranom szám: ${parosLetrehoz(1, 100)}`);
/*
//4. feladat
document.write(`<hr>4. feladat:<br><br>`);

function testTomegIndex(suly, magassag) {
    let ttt = suly/(magassag*magassag);

    if (ttt < 16) {
        return sulyosSovanysag;
    }
    else if (ttt < 17) {
        eredmeny = mersejeltSovanysag;
        return eredmeny;
    }
    else if (ttt < 18.5) {
        return enyheSovanysag;
    }
    else if (ttt < 25) {
        return normalisTestsuly;
    }
    else if (ttt < 30) {
        return tulsulyos;
    }
    else if (ttt < 35) {
        return IfokuElhizas;
    }
    else if (ttt < 40) {
        return IIfokuElhizas;
    }
    else {
        return IIIfokuElhizas;
    }
}

document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(200, 2)}<br>`);
document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(45, 1.5)}<br>`);
document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(25, 1.2)}<br>`);
*/
//5. feladat
document.write(`<hr>5. feladat:<br><br>`);
function egeszOszto(osztando, oszto) {
    let ertek;
    if (osztando % oszto == 0) {
        let ertek = true;
        return ertek;
    }
    else {
        let ertek = false;
        return ertek;
    }
}
document.write(`Maradék nélkül osztható? : ${egeszOszto(25, 5)}<br>`);
document.write(`Maradék nélkül osztható? : ${egeszOszto(1050, 7)}<br>`);
document.write(`Maradék nélkül osztható? : ${egeszOszto(2048, 3)}<br>`);
