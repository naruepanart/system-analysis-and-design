package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class List {

    private @Id
    @GeneratedValue
    Long id_list;

    private String tite;
    private int price;

    public List() {
    }

    public List(long id_list, String tite, int price) {
        this.id_list = id_list;
        this.tite = tite;
        this.price = price;
    }
}
