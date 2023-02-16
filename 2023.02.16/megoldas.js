//Név: Frics Máté Csoport: #Team11

//1. feladat 1 bementi paraméter (szöveg)
document.write(`<hr> 1. feladat: <br><br> Teszt bementi paraméter "teszt": ${hosszEllenor("teszt")} <br> Teszt bementi paraméter "feladatteszt": ${hosszEllenor("feladatteszt")}`);

function hosszEllenor(vizsgalandoSzoveg) {
    if (vizsgalandoSzoveg.length > 7) {
        return true;
    }
    else {
        return false;
    }
}

//2. feladat 1 bementi paraméter (számsor szövegként)
document.write(`<hr> 2. feladat: <br><br> Teszt bementi paraméter "040 655 330": ${tajSzamEllenor("040655330")} 
				<br> Teszt bementi paraméter "111 111 111": ${tajSzamEllenor("111111111")} 
                <br> Teszt bementi paraméter "111 111": ${tajSzamEllenor("111111")}
                <br> Teszt bementi paraméter "037 687 210": ${tajSzamEllenor("037687210")}
                <br> Teszt bementi paraméter "019 536 646": ${tajSzamEllenor("019536646")}`);

function tajSzamEllenor(vizsgalandoTajszam) {
    if (vizsgalandoTajszam.length = 9) {
        let paros = (Number(vizsgalandoTajszam.charAt(1)) + Number(vizsgalandoTajszam.charAt(3)) + Number(vizsgalandoTajszam.charAt(5)) + Number(vizsgalandoTajszam.charAt(7))) * 7;
        let paratlan = (Number(vizsgalandoTajszam.charAt(0)) + Number(vizsgalandoTajszam.charAt(2)) + Number(vizsgalandoTajszam.charAt(4)) + Number(vizsgalandoTajszam.charAt(6))) * 3;
        if ((paros + paratlan) % 10 == vizsgalandoTajszam[8]) {
            return true;
        }
        else {
            return false;
        }
    }
}

//3. feladat 1 bementi paraméter (tömb)
let vizsgaltTomb = [3, 5, 10, 16, 9];
let vizsgaltTomb2 = [4, 10, 8, 28, 5];
let vizsgaltTomb3 = [10, 20, 40, 60];
document.write(`<hr> 3. feladat: <br><br> Teszt bementi paraméter "${vizsgaltTomb}". A tömb terjedelme: ${tombTerjedelem(vizsgaltTomb)} 
				<br> Teszt bementi paraméter "${vizsgaltTomb2}". A tömb terjedelme: ${tombTerjedelem(vizsgaltTomb2)} 
                <br> Teszt bementi paraméter "${vizsgaltTomb3}". A tömb terjedelme: ${tombTerjedelem(vizsgaltTomb3)}`);



function tombTerjedelem(megvizsgaltTomb) {
    let minimum = megvizsgaltTomb[0];
    let maximum = megvizsgaltTomb[0];
    for (let i = 0; i < megvizsgaltTomb.length; i++) {
        if (megvizsgaltTomb[i] < minimum) {
            minimum = megvizsgaltTomb[i];
        }
    }
    for (let j = 0; j < megvizsgaltTomb.length; j++) {
        if (megvizsgaltTomb[j] > maximum) {
            maximum = megvizsgaltTomb[j];
        }
    }
    return maximum - minimum;
}

//4. feladat 1 bementi paraméter (objektum)
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]
document.write(`<hr> 4. feladat: <br><br> Teszt bementi paraméter "Dolgozók objektum". Legidősebb dolgozó indexe: ${legidosebbDolgozo(Dolgozok)}`);

function legidosebbDolgozo(vizsgaltObjektum) {
    let maxKor = 0;
    let maxKorIndex = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i].kor > maxKor) {
            maxKor = vizsgaltObjektum[i].kor;
            maxKorIndex = i;
        }
    }

    return maxKorIndex;
}

//5. feladat 1 bementi paraméter (objektum)
document.write(`<hr> 5. feladat: <br><br> Teszt bementi paraméter "Dolgozók objektum". Átlag fizetés alatti dolgozók emelt fizetése: ${fizetesEmeles(Dolgozok)}`);

function fizetesEmeles(vizsgaltObjektum) {
    let osszFizetes = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        osszFizetes += vizsgaltObjektum[i].fizetes;
    }
    for (let j = 0; j < vizsgaltObjektum.length; j++) {
        if (vizsgaltObjektum[j].fizetes < (osszFizetes / vizsgaltObjektum.length)) {
            vizsgaltObjektum[j].fizetes = (vizsgaltObjektum[j].fizetes * 1.1);
        }
    }

}