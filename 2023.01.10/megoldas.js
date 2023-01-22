/* Frics Máté, #Team11, HTML: 100%, CSS: 100%, JS: 80% */

let nev = "Frics Mate";
let csoportAzonosito = "#Team11";
let html = 100;
let css = 100;
let js = 80;
document.write(`1. feladat<br><br>A dukumentum készítője: ${nev} <br>A csoport azonosító ${csoportAzonosito} <br> HTML szint: ${html}% <br>CSS szint: ${css}% <br>JS szint: ${js}%<hr>`);

document.write(`2. feladat<br><br>`);
let alapSzam = prompt(`Add meg a számértéket: `);
let hatvanyErtek = prompt(`Add meg a hatvány kitevőt: `);
document.write(`A(z) ${alapSzam}<sup>${hatvanyErtek}</sup>-ik hatványra emelve ${alapSzam ** hatvanyErtek}. <hr>`);

document.write(`3. feladat: Páros számok intervallum között:<br><br>`);
let intervallumEleje = prompt(`Add meg az intevallum kezdő értékét: `);
let intervallumVege = prompt(`Add meg az intervallum végét: `);
document.write(`A(z) ${intervallumEleje}, ${intervallumVege} intervallum közötti páros számok: <br><br>`);
if (intervallumEleje > intervallumVege) {
    document.write(`A kezdete NEM lehet kisebb mint a vége! <hr>`);
}
else if (intervallumEleje < intervallumVege) {
    for (let i = intervallumEleje; i <= intervallumVege; i++) {
        if (i % 2 == 0) {
            document.write(`${i}, `);
        }
    }
    document.write(`<hr>`)
} else {
    document.write(`Nem a megfelelő értéket adtad meg!<hr>`)
}
document.write(`A(z) ${intervallumEleje}, ${intervallumVege} intervallum közötti páros szám: <br><br>`);
let randomSzam = Math.round(Math.random() * (intervallumVege - intervallumEleje) + Number(intervallumEleje));
if (intervallumEleje > intervallumVege) {
    document.write(`A kezdete NEM lehet kisebb mint a vége! <hr>`);
}
else if (intervallumEleje < intervallumVege) {
    if (randomSzam % 2 == 0) {
        document.write(`${randomSzam}`);
    }
    else if (randomSzam != intervallumVege) {
        document.write(`${randomSzam}+1`);
    }
    else {
        document.write(`${randomSzam}-1`);
    }
    document.write(`<hr>`)
} else {
    document.write(`Nem a megfelelő értéket adtad meg!<hr>`)
}

document.write(`4. feladat: <br><br>`);
let eletkor = prompt(`Add meg az életkorod (1-120 év között): `);
if (eletkor < 1 || eletkor > 120) {
    document.write(`A megadott életév ${eletkor}, az életkornak 1 és 120 között kell szerepelnie.<hr>`);
}
else if (eletkor <= 6) {
    document.write(`A megadott életév ${eletkor}: Kisgyermekkor<hr>`);
}
else if (eletkor <= 12) {
    document.write(`A megadott életév ${eletkor}: Gyermekkor<hr>`);
}
else if (eletkor <= 16) {
    document.write(`A megadott életév ${eletkor}: Serdülő<hr>`);
}
else if (eletkor <= 20) {
    document.write(`A megadott életév ${eletkor}: Ifjúkor<hr>`);
}
else if (eletkor <= 30) {
    document.write(`A megadott életév ${eletkor}: Fiatal felnőtt<hr>`);
}
else if (eletkor <= 60) {
    document.write(`A megadott életév ${eletkor}: Felnőtt kor<hr>`);
}
else if (eletkor <= 120) {
    document.write(`A megadott életév ${eletkor}: Aggkor<hr>`);
}

document.write(`5. feladat: <br><br>`);

let osztando = prompt(`Add meg az osztandó számot: `);
let oszto = prompt(`Add meg az osztót:`);
if (osztando % oszto == 0) {
    document.write(`A(z) <sup>${osztando}</sup>/<sub>${oszto}</sub> maradék nélkül osztható.<hr>`);
}
else {
    document.write(`A(z) <sup>${osztando}</sup>/<sub>${oszto}</sub> nem osztható maradék nélkül.<hr>`);
}

document.write(`6. feladat: <br><br> Az első 10 négyzetszám:<br>`);
let negyzetSzamok = 1;
for (let z = 0; z < 10; z++) {
    if (negyzetSzamok ** 2 > 0) {
        document.write(`${negyzetSzamok ** 2}, `);
        negyzetSzamok++;
    }
    else {

    }

}
document.write(`<hr>`);