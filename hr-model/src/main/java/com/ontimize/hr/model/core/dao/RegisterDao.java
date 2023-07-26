package com.ontimize.hr.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("RegisterDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/RegisterDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class RegisterDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "id";

    public static final String ATTR_DEV = "dev";

    public static final String ATTR_DATE = "date";

    public static final String ATTR_SCAN_VOLUME = "scan_volume";

    public static final String ATTR_CALCULATED_VOLUME = "calculated_volume";

    public static final String ATTR_PLATE = "plate";

    public static final String ATTR_HEIGHT = "height";

    public static final String ATTR_WIDTH = "width";

    public static final String ATTR_LENGTH = "length";

    public static final String ATTR_TRAILER_PLATE = "trailer_plate";

    public static final String ATTR_DELIVERY_NOTE = "delivery_note";

}