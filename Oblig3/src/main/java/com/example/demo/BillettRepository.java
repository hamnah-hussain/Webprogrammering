package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(KinoBilett innbillett){
        String sql = "INSERT INTO Billetter (filmer, antall, fnavn, enavn, tlf, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, innbillett.getFilmer(), innbillett.getAntall(), innbillett.getFnavn(), innbillett.getEnavn(), innbillett.getTlf(), innbillett.getEpost());
    }

    public List<KinoBilett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billetter ORDER BY enavn";
        List<KinoBilett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(KinoBilett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billetter";
        db.update(sql);
    }

}
