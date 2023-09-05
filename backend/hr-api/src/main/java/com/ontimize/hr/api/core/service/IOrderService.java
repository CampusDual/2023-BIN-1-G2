package com.ontimize.hr.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IOrderService {

    public EntityResult orderDelete(Map<String,Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult orderDeliverysInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult orderAllDeliveriesQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult orderDeliverysDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult orderDeliverysQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult orderUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult orderInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult orderQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;


}
