package com.ontimize.hr.model.core.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.hr.model.core.dao.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

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
    public EntityResult registerDevicesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.devicesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerPlatesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.platesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerTrailerPlatesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.trailerPlatesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerDeliveryNotesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.deliveryNotesDao, keyMap, attrList);
    }
    @Override
    public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.registerDao, attrMap);
    }

    @Override
    public EntityResult registerDevicesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.devicesDao, attrMap);
    }
    @Override
    public EntityResult registerPlatesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.platesDao, attrMap);
    }
    @Override
    public EntityResult registerTrailerPlatesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.trailerPlatesDao, attrMap);
    }
    @Override
    public EntityResult registerDeliveryNotesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

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

    @Override
    public EntityResult completedQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_COMPLETED);
    }
    @Override
    public EntityResult resumeDeliveryQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_RESUME_DELIVERY);
    }

    @Override
    public EntityResult trafficDateQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_TRAFFIC_DATE);
    }

}