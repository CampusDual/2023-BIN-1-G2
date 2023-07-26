package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.jee.common.dto.EntityResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.jee.server.rest.ORestController;

import java.util.Map;

@RestController
@RequestMapping("/registers")
public class RegisterRestController extends ORestController<IRegisterService> {

    @Autowired
    private IRegisterService registerService;

    @Override
    public IRegisterService getService() {
        return this.registerService;
    }

    @RequestMapping(
            value = "/makeRequest",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EntityResult> makeRequest(@RequestBody Map<String, Object> body) {


        registerService.registerInsert(body);

        System.out.println("LLega");

        return null;
    }
}
