package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.IDevicesService;
import com.ontimize.hr.model.core.dao.DevicesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("DevicesService")
@Lazy
public class DevicesService implements IDevicesService {

    @Autowired
    private DevicesDao devicesDao;
    @Autowired private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult devicesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.devicesDao, keyMap, attrList);
    }

    @Override
    public EntityResult devicesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.devicesDao, attrMap);
    }

}
