package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.IDeliveryNoteService;
import com.ontimize.hr.model.core.dao.DeliveryNotesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("DeliveryNoteService")
@Lazy
public class DeliveryNoteService implements IDeliveryNoteService {

    @Autowired
    private DeliveryNotesDao deliveryNotesDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult notMatchedDeliverysQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.deliveryNotesDao, keyMap, attrList, DeliveryNotesDao.QUERY_NOT_MATCHED_DELIVERYS);
    }

    @Override
    public EntityResult deliveryNotesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.deliveryNotesDao, attrMap);
    }

    @Override
    public EntityResult deliveryNotesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.deliveryNotesDao, keyMap, attrList);
    }

}
