
$(function(){
    hentAlle();
});

let counter = 0;
const filmer = document.getElementById("filmer");
const antall = document.getElementById("antall");
const fnavn = document.getElementById("fnavn");
const enavn = document.getElementById("enavn");
const tlf = document.getElementById("tlf");
const epost = document.getElementById("epost");

function kjopBilett() {

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

    if (counter == 6) {

    }
    const bilett = {
        filmer: $("#filmer").val(),
        antall: $("#antall").val(),
        fnavn: $("#fnavn").val(),
        enavn: $("#enavn").val(),
        tlf: $("#tlf").val(),
        epost: $("#epost").val()
    };

    $.post("/lagre", bilett, function () {
        hentAlle();
    });

    $("input:text").val(null);
    document.getElementById("filmer").value = null;
    document.getElementById("antall").value = null;
    //counter == 0;
    //}

}

function hentAlle() {
    $.get("/hentAlle", function (data) {
        printBiletter(data);
    });
}

function printBiletter(bilett) {

    let utskrift = "<table class='table table-striped'><tr>" +
        "<th>Filmer</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let biletter of bilett) {
        utskrift += "<tr>" +
            "<td>" + biletter.filmer + "</td><td>" + biletter.antall + "</td><td>" + biletter.fnavn + "</td><td>" + biletter.enavn + "</td><td>" + biletter.tlf + "</td><td>" + biletter.epost + "</td>" +
            "</tr>";
    }
    $("#kinoBiletter").html(utskrift + '<br />');

}

function slettBilett() {
    $.post( "/slettAlle", function( data ) {
        hentAlle();
    });
}
