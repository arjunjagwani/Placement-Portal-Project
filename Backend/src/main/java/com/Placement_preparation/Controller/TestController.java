package com.Placement_preparation.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TestController {

@GetMapping
    public String greet(){
        return "Welcome to Home page";
    }
}
