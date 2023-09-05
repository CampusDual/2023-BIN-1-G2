package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.IDeliveryNoteService;
import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/deliveryNote")
public class DeliveryNoteRestController extends ORestController<IDeliveryNoteService> {

    @Autowired
    private IDeliveryNoteService deliveryNoteService;

    @Override
    public IDeliveryNoteService getService() {
        return deliveryNoteService;
    }
}
