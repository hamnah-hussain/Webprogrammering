package webprog.oblig2;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

    private final List<KinoBilett> kinoBiletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBilletter(KinoBilett innbillett){
        kinoBiletter.add(innbillett);
    }

    @GetMapping("/hentAlle")
    public List<KinoBilett> hentAlle(){
        return kinoBiletter;
    }

    @PostMapping("/slettAlle")
    public void slettAlle(){
        kinoBiletter.clear();
    }

}
