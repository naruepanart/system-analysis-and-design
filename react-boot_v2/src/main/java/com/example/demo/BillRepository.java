package com.example.demo;

import org.springframework.data.repository.CrudRepository;

public interface BillRepository  extends CrudRepository<Bill, Long> {
}
