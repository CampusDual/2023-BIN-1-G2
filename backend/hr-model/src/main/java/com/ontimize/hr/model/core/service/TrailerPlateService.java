package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.ITrailerPlateService;
import com.ontimize.hr.model.core.dao.TrailerPlatesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("TrailerPlateService")
@Lazy
public class TrailerPlateService implements ITrailerPlateService {

    @Autowired private TrailerPlatesDao trailerPlatesDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult trailerPlatesQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.trailerPlatesDao, keyMap, attrList);
    }

    @Override
    public EntityResult trailerPlatesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {

        return this.daoHelper.insert(this.trailerPlatesDao, attrMap);
    }


}
