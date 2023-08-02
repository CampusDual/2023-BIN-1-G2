package com.ontimize.hr.ws.core.rest;

import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.hr.model.core.dao.*;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.jee.server.rest.ORestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
    public ResponseEntity<String> makeRequest(@RequestBody Map<String, Object> body){
        Map<String,Object> mapDevices= new HashMap<>();
        Map<String,Object> mapPlates= new HashMap<>();
        Map<String,Object> mapTrailerPlates= new HashMap<>();
        Map<String,Object> mapDeliveryNotes= new HashMap<>();
        Map<String,Object> mapRegister= new HashMap<>(body);


        mapDevices.put("dev_name",body.get("dev"));
        mapPlates.put("plate_name",body.get("plate"));
        mapTrailerPlates.put("trailer_plate_name",body.get("trailer_plate"));
        mapDeliveryNotes.put("delivery_note",body.get("delivery_note"));

        EntityResult query;
        List<String> attr=new ArrayList<String>();
        attr.add(DevicesDao.ATTR_ID_DEV);

        query=this.registerService.registerDevicesQuery(mapDevices,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_DEV,query.getRecordValues(0).get(DevicesDao.ATTR_ID_DEV));
        }else{
            EntityResult resultDevices= registerService.registerDevicesInsert(mapDevices);
            mapRegister.put(RegisterDao.ATTR_ID_DEV, resultDevices.get(DevicesDao.ATTR_ID_DEV));
        }

        attr.add(PlatesDao.ATTR_ID_PLATE);
        query=this.registerService.registerPlatesQuery(mapPlates,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_PLATE,query.getRecordValues(0).get(PlatesDao.ATTR_ID_PLATE));
        }else{
            EntityResult resultPlates= registerService.registerPlatesInsert(mapPlates);
            mapRegister.put(RegisterDao.ATTR_ID_PLATE, resultPlates.get(PlatesDao.ATTR_ID_PLATE));
        }

        attr.add(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE);
        query=this.registerService.registerTrailerPlatesQuery(mapTrailerPlates,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_TRAILER_PLATE,query.getRecordValues(0).get(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE));
        }else{
            EntityResult resultTrailerPlates= registerService.registerTrailerPlatesInsert(mapTrailerPlates);
            mapRegister.put(RegisterDao.ATTR_ID_TRAILER_PLATE, resultTrailerPlates.get(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE));
        }

        attr.add(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE);
        query=this.registerService.registerDeliveryNotesQuery(mapDeliveryNotes,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_DELIVERY_NOTE,query.getRecordValues(0).get(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE));
        }else{
            EntityResult resultDeliveryNotes= registerService.registerDeliveryNotesInsert(mapDeliveryNotes);
            mapRegister.put(RegisterDao.ATTR_ID_DELIVERY_NOTE, resultDeliveryNotes.get(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE));
        }



        registerService.registerInsert(mapRegister);
        return null;
    }
}
