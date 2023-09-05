package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.ITrailerPlateService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trailerPlate")
public class TrailerPlateRestController extends ORestController<ITrailerPlateService> {

    @Autowired
    private ITrailerPlateService trailerPlateService;

    @Override
    public ITrailerPlateService getService() {
        return trailerPlateService;
    }
}
