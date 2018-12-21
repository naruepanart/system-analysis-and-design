package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private ListRepository listRepository;
	private EmployeeRepository employeeRepository;


	@Autowired
	public DatabaseLoader(ListRepository listRepository1,EmployeeRepository employeeRepository1) {
		this.listRepository = listRepository1;
		this.employeeRepository = employeeRepository1;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.listRepository.save(new List(1,"กล่องฝาชน (สีน้ำตาล)",10));
		this.listRepository.save(new List(2,"กล่องไดคัท (สีขาว)",10));
		this.listRepository.save(new List(3,"ซองเอกสาร",10));
		this.listRepository.save(new List(4,"ซองพลาสติก",10));
		this.listRepository.save(new List(5,"ซองกันกระแทก",10));
		this.listRepository.save(new List(6,"เชือกเกลียว",10));
		this.listRepository.save(new List(7,"เทปกาว",10));
		this.listRepository.save(new List(8,"แอร์บับเบิ้ล",10));
		this.employeeRepository.save(new Employee(5801756,"benz","0123456789","korat",20000));

	}


}