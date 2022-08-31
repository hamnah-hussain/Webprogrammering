package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBilletter(KinoBilett innbillett){
        rep.lagreBillett(innbillett);
    }

    @GetMapping("/hentAlle")
    public List<KinoBilett> hentAlle(){
        return rep.hentAlleBilletter();
    }

    @PostMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }

}
