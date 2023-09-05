package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.IOrderService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderRestController extends ORestController<IOrderService> {

    @Autowired
    private IOrderService orderService;

    @Override
    public IOrderService getService() {
        return orderService;
    }
}
