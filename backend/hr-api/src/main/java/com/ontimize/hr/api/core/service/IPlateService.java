package com.ontimize.hr.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IPlateService {

    public EntityResult optimalVolPercentByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult tiempoDescargaByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult volumeByPlateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult platesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult platesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
    public EntityResult platesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

}
