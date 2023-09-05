package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.IPlateService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plate")
public class PlateRestController extends ORestController<IPlateService> {

    @Autowired
    private IPlateService plateService;

    @Override
    public IPlateService getService() {
        return plateService;
    }
}
