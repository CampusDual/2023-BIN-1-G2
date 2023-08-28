package com.ontimize.hr.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ConfigDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ConfigDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ConfigDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_CONFIG_NAME = "config_name";
    public static final String ATTR_CONFIG_VALUE = "config_value";
}
