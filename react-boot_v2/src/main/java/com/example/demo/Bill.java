package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Bill {

    private @Id
    @GeneratedValue
    Long id_bill;

    @ManyToOne
    private List billList;
    private int amount;
    private int price;
    private String title;


    private Bill() {}

    public Bill(List billList, int amount, int price, String title) {
        this.billList = billList;
        this.amount = amount;
        this.price = price;
        this.title = title;
    }
}
