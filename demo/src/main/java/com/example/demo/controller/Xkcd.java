package com.example.demo.controller;

import com.example.demo.domain.XkcdResponse;
import com.example.demo.service.xkcd.XkcdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/xkcd")
public class Xkcd {

    @Autowired
    private XkcdService xkcdService;

    @GetMapping("/current")
    public XkcdResponse getComic() {
        return xkcdService.getCurrentComic();
    }

    @GetMapping("/past/{comicNum}") ///xcd/past/2
    public XkcdResponse getComic(@PathVariable String comicNum) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/" + comicNum + "/info.0.json", XkcdResponse.class);
    }
    @GetMapping("/pastOpt") ///xcd/past/2
    public XkcdResponse getComicOptional(@RequestParam("comicNum") String comicNum) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/" + comicNum + "/info.0.json", XkcdResponse.class);
    }


}
