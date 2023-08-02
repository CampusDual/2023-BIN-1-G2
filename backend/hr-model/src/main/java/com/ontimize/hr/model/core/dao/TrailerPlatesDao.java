package com.ontimize.hr.model.core.dao;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("TrailerPlatesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/TrailerPlatesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class TrailerPlatesDao extends OntimizeJdbcDaoSupport{
    public static final String ATTR_ID_TRAILER_PLATE= "id_trailer_plate";
    public static final String ATTR_TRAILER_PLATE_NAME= "trailer_plate_name";
}
