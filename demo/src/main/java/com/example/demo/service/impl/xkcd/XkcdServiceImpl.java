package com.example.demo.service.impl.xkcd;

import com.example.demo.service.xkcd.XkcdService;
import com.example.demo.domain.XkcdResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class XkcdServiceImpl implements XkcdService {

    @Override
    public XkcdResponse getCurrentComic() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://xkcd.com/info.0.json", XkcdResponse.class);
    }

}
