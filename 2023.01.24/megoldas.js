//JavaScript Felmérés I.

//1. feladat
document.write(`<hr>1. feladat:<br><br>`);
function keszito() {
    return document.write(`A készítő neve: Frics Máté<br><br> Csoportjának típusa: Junior Frontend fejlesztő + Webfejlesztő<br><br> Csoport azonosítója: #Team11<br><br>`);
}
keszito();

//2. feladat
document.write(`<hr>2. feladat:<br><br>`);

function hatvanyozo(hatvanySzam, hatvanyKitevo) {
    return hatvanySzam ** hatvanyKitevo;
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
    else if (randomSzam != intervallumVege) {
        return randomSzam + 1;
    }
    else {
        return randomSzam - 1;
    }
}
document.write(`Az intervallum közötti generált ranom szám: ${parosLetrehoz(1, 100)}`);

//4. feladat
document.write(`<hr>4. feladat:<br><br>`);

function testTomegIndex(suly, magassag) {
    if (suly / (magassag * magassag) < 16) {
        return "sulyosSovanysag";
    }
    else if (suly / (magassag * magassag) < 17) {
        return "mersekeltSovanysag";
    }
    else if (suly / (magassag * magassag) < 18.5) {
        return "enyheSovanysag";
    }
    else if (suly / (magassag * magassag) < 25) {
        return "normalisTestsuly";
    }
    else if (suly / (magassag * magassag) < 30) {
        return "tulsulyos";
    }
    else if (suly / (magassag * magassag) < 35) {
        return "IfokuElhizas";
    }
    else if (suly / (magassag * magassag) < 40) {
        return "IIfokuElhizas";
    }
    else {
        return "IIIfokuElhizas";
    }
}

document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(200, 2)}<br>`);
document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(45, 1.5)}<br>`);
document.write(`A magasságod és a súlyod alapján a csoportosításod ${testTomegIndex(25, 1.2)}<br>`);

//5. feladat
document.write(`<hr>5. feladat:<br><br>`);
function egeszOszto(osztando, oszto) {
    if (osztando % oszto == 0) {
        return true;
    }
    else {
        return false;
    }
}
document.write(`Maradék nélkül osztható? : ${egeszOszto(25, 5)}<br>`);
document.write(`Maradék nélkül osztható? : ${egeszOszto(1050, 7)}<br>`);
document.write(`Maradék nélkül osztható? : ${egeszOszto(2048, 3)}<br>`);