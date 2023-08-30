package com.ontimize.hr.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IRegisterService {


    public EntityResult registerQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerDevicesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerPlatesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerTrailerPlatesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerDeliveryNotesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult registerDevicesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult registerPlatesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult registerTrailerPlatesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult registerDeliveryNotesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult registerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult registerPlatesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult registerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
    public EntityResult completedQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult resumeDeliveryQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult trafficDateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult completedDiscrepancyQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult completedDiscrepancyUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult registerConfigQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult registerConfigUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult countTravelsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
    public EntityResult detailTravelsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult volumeByPlateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult tiempoDescargaByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;
    public EntityResult optimalVolPercentByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException;


}
