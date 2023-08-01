package com.ontimize.hr.model.core.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.hr.model.core.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import javax.swing.text.html.parser.Entity;

@Service("RegisterService")
@Lazy
public class RegisterService implements IRegisterService {

    @Autowired private RegisterDao registerDao;
    @Autowired private DevicesDao devicesDao;
    @Autowired private PlatesDao platesDao;
    @Autowired private TrailerPlatesDao trailerPlatesDao;
    @Autowired private DeliveryNotesDao deliveryNotesDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult registerQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.registerDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerQueryDevices(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.devicesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerQueryPlates(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.platesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerQueryTrailerPlates(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.trailerPlatesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerQueryDeliveryNotes(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.deliveryNotesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.registerDao, attrMap);
    }

    @Override
    public EntityResult registerInsertDevices(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.devicesDao, attrMap);
    }
    @Override
    public EntityResult registerInsertPlates(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.platesDao, attrMap);
    }
    @Override
    public EntityResult registerInsertTrailerPlates(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.trailerPlatesDao, attrMap);
    }
    @Override
    public EntityResult registerInsertDeliveryNotes(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.deliveryNotesDao, attrMap);
    }

    @Override
    public EntityResult registerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.registerDao, attrMap, keyMap);
    }

    @Override
    public EntityResult registerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.registerDao, keyMap);
    }


    public EntityResult makeRequest(Map<String,Object> body) throws  OntimizeJEERuntimeException{
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

        query=this.registerQueryDevices(mapDevices,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_DEV,query.getRecordValues(0).get(DevicesDao.ATTR_ID_DEV));
        }else{
            EntityResult resultDevices= registerInsertDevices(mapDevices);
            mapRegister.put(RegisterDao.ATTR_ID_DEV, resultDevices.get(DevicesDao.ATTR_ID_DEV));
        }

        attr.add(PlatesDao.ATTR_ID_PLATE);
        query=this.registerQueryPlates(mapPlates,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_PLATE,query.getRecordValues(0).get(PlatesDao.ATTR_ID_PLATE));
        }else{
            EntityResult resultPlates= registerInsertPlates(mapPlates);
            mapRegister.put(RegisterDao.ATTR_ID_PLATE, resultPlates.get(PlatesDao.ATTR_ID_PLATE));
        }

        attr.add(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE);
        query=this.registerQueryTrailerPlates(mapTrailerPlates,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_TRAILER_PLATE,query.getRecordValues(0).get(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE));
        }else{
            EntityResult resultTrailerPlates= registerInsertTrailerPlates(mapTrailerPlates);
            mapRegister.put(RegisterDao.ATTR_ID_TRAILER_PLATE, resultTrailerPlates.get(TrailerPlatesDao.ATTR_ID_TRAILER_PLATE));
        }

        attr.add(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE);
        query=this.registerQueryDeliveryNotes(mapDeliveryNotes,attr);
        attr.remove(0);
        if(query.calculateRecordNumber()>0){
            mapRegister.put(RegisterDao.ATTR_ID_DELIVERY_NOTE,query.getRecordValues(0).get(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE));
        }else{
            EntityResult resultDeliveryNotes= registerInsertDeliveryNotes(mapDeliveryNotes);
                mapRegister.put(RegisterDao.ATTR_ID_DELIVERY_NOTE, resultDeliveryNotes.get(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE));
        }



        registerInsert(mapRegister);
        return null;
    }
}