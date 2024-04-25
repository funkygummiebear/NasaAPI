package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping(value = {"/","currentxkcdcomic", "pastxkcdcomic", "example", "single", "number"})
    public String index() { return "index";
    }
}
