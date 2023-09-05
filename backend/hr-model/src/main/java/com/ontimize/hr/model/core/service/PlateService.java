package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.IPlateService;
import com.ontimize.hr.model.core.dao.PlatesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("PlateService")
@Lazy
public class PlateService implements IPlateService {

    @Autowired
    private PlatesDao platesDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;


    @Override
    public EntityResult optimalVolPercentByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.platesDao, keyMap, attrList, PlatesDao.QUERY_OPTIMAL_VOL_PERCENT);
    }

    @Override
    public EntityResult tiempoDescargaByPlateQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.platesDao, keyMap, attrList, PlatesDao.QUERY_DESCARGA);
    }

    @Override
    public EntityResult volumeByPlateQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.platesDao, keyMap, attrList, PlatesDao.QUERY_VOLUME);
    }

    @Override
    public EntityResult platesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.platesDao, attrMap, keyMap);
    }

    @Override
    public EntityResult platesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.platesDao, attrMap);
    }

    @Override
    public EntityResult platesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.platesDao, keyMap, attrList);
    }

}
