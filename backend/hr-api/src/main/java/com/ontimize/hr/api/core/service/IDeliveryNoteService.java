package com.ontimize.hr.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IDeliveryNoteService {
    public EntityResult notMatchedDeliverysQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult deliveryNotesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult deliveryNotesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

}
