package com.ontimize.hr.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IDevicesService {

    public EntityResult devicesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult devicesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;


}
