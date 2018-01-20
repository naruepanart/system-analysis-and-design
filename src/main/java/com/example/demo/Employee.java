package com.example.demo;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Data
@Entity
public class Employee {

    private @Id
    @GeneratedValue
    Long id_emp;


    private int idcard;
    private String name;
    private String phone;
    private String address;
    private int salary;

    public Employee() {
    }

    public Employee(int idcard, String name, String phone, String address, int salary) {
        this.idcard = idcard;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.salary = salary;
    }
}
