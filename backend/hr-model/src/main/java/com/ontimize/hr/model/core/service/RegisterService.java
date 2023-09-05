package com.ontimize.hr.model.core.service;

import java.util.*;

import com.ontimize.hr.api.core.service.IDeliveryNoteService;
import com.ontimize.hr.api.core.service.IPlateService;
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
    @Autowired private PlatesDao platesDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;
    @Autowired private IPlateService plateService;
    @Autowired private IDeliveryNoteService deliveryNoteService;

    @Override
    public EntityResult registerQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.registerDao, keyMap, attrList);
    }

    @Override
    public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.registerDao, attrMap);
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
    @Override
    public EntityResult countTravelsQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.platesDao, keyMap, attrList, PlatesDao.QUERY_COUNT_TRAVELS);
    }
    @Override
    public EntityResult detailTravelsQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.platesDao, keyMap, attrList, PlatesDao.QUERY_DETAIL_TRAVELS);
    }

    @Override
    public EntityResult completedDiscrepancyQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
                return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_COMPLETED_DISCREPANCY);
    }

    @Override
    public EntityResult completedDiscrepancyUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {

        EntityResult response = null;

        if (attrMap.containsKey(PlatesDao.ATTR_PLATE_NAME)) {
            List<String> attr = new ArrayList<String>();
            attr.add(PlatesDao.ATTR_ID_PLATE);
            EntityResult query = this.plateService.platesQuery(attrMap, attr);
            if (query.calculateRecordNumber() > 0) {
                response = registerUpdate(query.getRecordValues(0), keyMap);
                //return this.daoHelper.update(this.registerDao, attrMap, keyMap);
            } else {
                EntityResult resultPlates = this.plateService.platesInsert(attrMap);
                response = registerUpdate((Map) resultPlates, keyMap);
            }
        }
        if (attrMap.containsKey(DeliveryNotesDao.ATTR_DELIVERY_NOTE)){
            Map<String,Object> attrMapCast = new HashMap<>();
            attrMapCast.put(DeliveryNotesDao.ATTR_DELIVERY_NOTE, attrMap.get(DeliveryNotesDao.ATTR_DELIVERY_NOTE));
            List<String> attr = new ArrayList<String>();
            attr.add(DeliveryNotesDao.ATTR_ID_DELIVERY_NOTE);
            EntityResult query = this.deliveryNoteService.deliveryNotesQuery(attrMapCast, attr);
            if (query.calculateRecordNumber() > 0) {
                response = registerUpdate(query.getRecordValues(0), keyMap);
                //return this.daoHelper.update(this.registerDao, attrMap, keyMap);
            } else {
                EntityResult resultDelivery = this.deliveryNoteService.deliveryNotesInsert(attrMapCast);
                response = registerUpdate((Map) resultDelivery, keyMap);
            }
        }

        return response;
    }
    @Override
    public EntityResult balanceQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_BALANCE);
    }

    @Override
    public EntityResult affluenceQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.registerDao, keyMap, attrList, RegisterDao.QUERY_AFFLUENCE);
    }
}