package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MakeController {

    @Autowired
    BillRepository billRepository;
    @Autowired
    ListRepository listRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    EmployeeRepository employeeRepository;
    @ResponseBody
    @RequestMapping(path = "/bill/{id}/amount/{amount}/price/{price}/title/{title}", method = RequestMethod.GET)
    public String bill(@PathVariable Long id, @PathVariable int amount,@PathVariable int price,@PathVariable String title) {
        List list = this.listRepository.findOne(id);
        Bill bill = new Bill(list,amount,price,title);
        this.billRepository.save(bill);
        return "{\"status\":\"Success\"}";
    }
}
