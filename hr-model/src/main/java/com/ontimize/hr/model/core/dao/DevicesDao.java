package com.ontimize.hr.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("DevicesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/DevicesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class DevicesDao extends OntimizeJdbcDaoSupport{
    public static final String ATTR_ID_DEV = "id_dev";

    public static final String ATTR_DEV_NAME = "dev_name";

}
