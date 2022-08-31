package com.example.demo;

public class KinoBilett {
    private String filmer;
    private String antall;
    private String fnavn;
    private String enavn;
    private String tlf;
    private String epost;

    public KinoBilett(String filmer, String antall, String fnavn, String enavn, String tlf, String epost) {
        this.filmer = filmer;
        this.antall = antall;
        this.fnavn = fnavn;
        this.enavn = enavn;
        this.tlf = tlf;
        this.epost = epost;
    }

    public KinoBilett() {}

    public String getFilmer() {
        return filmer;
    }

    public void setFilmer(String filmer) {
        this.filmer = filmer;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public String getFnavn() {
        return fnavn;
    }

    public void setFnavn(String fnavn) {
        this.fnavn = fnavn;
    }

    public String getEnavn() {
        return enavn;
    }

    public void setEnavn(String enavn) {
        this.enavn = enavn;
    }

    public String getTlf() {
        return tlf;
    }

    public void setTlf(String tlf) {
        this.tlf = tlf;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}