package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.IConfigService;
import com.ontimize.hr.model.core.dao.ConfigDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("ConfigService")
@Lazy
public class ConfigService implements IConfigService {

    @Autowired private ConfigDao configDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    @Override
    public EntityResult configQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.configDao, keyMap, attrList);
    }

    @Override
    public EntityResult configUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.configDao, attrMap, keyMap);
    }

}
