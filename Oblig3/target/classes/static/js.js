
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
const form = document.getElementById("form");


function kjopBilett() {

    let counter = 0;

    feilFilmer.innerHTML = "";
    feilAntall.innerHTML = "";
    feilFnavn.innerHTML = "";
    feilEnavn.innerHTML = "";
    feilTlf.innerHTML = "";
    feilEpost.innerHTML = "";

   if (filmer.value === "0") {
        document.getElementById("feilFilmer").innerHTML = "Velg en film.";
    } else {
        counter++;
        document.getElementById("feilFilmer").innerHTML = "";
    }

    if (antall.value === "" || antall.value === "0") {
        document.getElementById("feilAntall").innerHTML = "Skriv noe inn i antall.";
    } else {
        counter++;
        document.getElementById("feilAntall").innerHTML = "";
    }

    if (fnavn.value === "") {
        document.getElementById("feilFnavn").innerHTML = "Skriv noe inn i fornavn.";
    } else {
        counter++;
        document.getElementById("feilFnavn").innerHTML = "";
    }

    if (enavn.value === "") {
        document.getElementById("feilEnavn").innerHTML = "Skriv noe inn i etternavn.";
    } else {
        counter++;
        document.getElementById("feilEnavn").innerHTML = "";
    }

    if (tlf.value === "") {
        document.getElementById("feilTlf").innerHTML = "Skriv noe inn i telefonnr.";
    } else {
        counter++;
        document.getElementById("feilTlf").innerHTML = "";
    }

    if (epost.value === "") {
        document.getElementById("feilEpost").innerHTML = "Skriv noe inn i epost."
    } else {
        counter++;
        document.getElementById("feilEpost").innerHTML = "";
    }

    if (counter === 6) {

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
        document.getElementById("filmer").value = "0";
        document.getElementById("antall").value = null;
    }
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
