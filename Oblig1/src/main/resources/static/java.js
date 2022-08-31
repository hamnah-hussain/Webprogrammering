const kinoBiletter = [];

function printBiletter() {

    let utskrift = "<table border='5px;'><tr>" +
        "<th>Filmer</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let i of kinoBiletter) {
        utskrift += "<tr>" +
            "<td>" + i.filmer + "</td><td>" + i.antall + "</td><td>" + i.fnavn + "</td><td>" + i.enavn + "</td><td>" + i.tlf + "</td><td>" + i.epost + "</td>" +
            "</tr>";
    }
    document.getElementById("kinoBiletter").innerHTML = utskrift + '<br />';
}

function kjopBilett() {
    let counter = 0;
    const filmer = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlf = document.getElementById("tlf").value;
    const epost = document.getElementById("epost").value;

    const bilett = {
        filmer: filmer,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tlf: tlf,
        epost: epost
    }

    if (filmer.length === 0) {
        document.getElementById("feilFilmer").innerHTML = "Velg en film.";
    } else {
        counter++;
        document.getElementById("feilFilmer").innerHTML = null;
    }

    if (antall == 0 || antall == "") {
        document.getElementById("feilAntall").innerHTML = "Skriv noe inn i antall.";
    } else {
        counter++;
        document.getElementById("feilAntall").innerHTML = null;
    }

    if (fnavn.length === 0) {
        document.getElementById("feilFnavn").innerHTML = "Skriv noe inn i fornavn.";
    } else {
        counter++;
        document.getElementById("feilFnavn").innerHTML = null;
    }

    if (enavn.length === 0) {
        document.getElementById("feilEnavn").innerHTML = "Skriv noe inn i etternavn.";
    } else {
        counter++;
        document.getElementById("feilEnavn").innerHTML = null;
    }

    if (tlf.length === 0) {
        document.getElementById("feilTlf").innerHTML = "Skriv noe inn i telefonnr.";
    } else {
        counter++;
        document.getElementById("feilTlf").innerHTML = null;
    }

    if (epost.length === 0) {
        document.getElementById("feilEpost").innerHTML = "Skriv noe inn i epost."
    } else {
        counter++;
        document.getElementById("feilEpost").innerHTML = null;
    }

    if (counter === 6) {
        kinoBiletter.push(bilett);
        $("input:text").val(null);
        document.getElementById("filmer").value = null;
        document.getElementById("antall").value = null;
        printBiletter();
    }
}

function slettBilett() {
    kinoBiletter.splice(0, kinoBiletter.length);
    document.getElementById("kinoBiletter").innerHTML = kinoBiletter;
}