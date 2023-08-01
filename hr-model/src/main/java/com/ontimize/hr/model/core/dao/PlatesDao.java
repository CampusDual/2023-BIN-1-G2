package com.ontimize.hr.model.core.dao;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("PlatesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PlatesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PlatesDao extends OntimizeJdbcDaoSupport{
    public static final String ATTR_ID_PLATE= "id_plate";
    public static final String ATTR_PLATE_NAME= "plate_name";
}
