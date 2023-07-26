package com.ontimize.hr.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("RegisterDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/RegisterDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class RegisterDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "ID";

    public static final String ATTR_DEV = "DEV";

    public static final String ATTR_DATE = "DATE";

    public static final String ATTR_SCAN_VOLUME = "SCAN_VOLUME";

    public static final String ATTR_CALCULATED_VOLUME = "CALCULATED_VOLUME";

    public static final String ATTR_PLATE = "PLATE";

    public static final String ATTR_HEIGHT = "HEIGHT";

    public static final String ATTR_WIDTH = "WIDTH";

    public static final String ATTR_LENGTH = "LENGTH";

    public static final String ATTR_TRAILER_PLATE = "TRAILER_PLATE";

    public static final String ATTR_DELIVERY_NOTE = "DELIVERY_NOTE";

}