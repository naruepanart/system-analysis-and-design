package com.example.demo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Customer {

    private @Id
    @GeneratedValue
    Long id_cus;

    public Customer() {
    }

}
