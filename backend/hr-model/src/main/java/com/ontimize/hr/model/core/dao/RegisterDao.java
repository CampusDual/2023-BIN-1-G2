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

    public static final String ATTR_ID_DEV_IN = "id_dev_in";
    public static final String ATTR_ID_DEV_OUT = "id_dev_out";
    public static final String ATTR_DATE_IN = "date_in";
    public static final String ATTR_DATE_OUT = "date_out";
    public static final String ATTR_SCAN_VOLUME_IN = "scan_volume_in";
    public static final String ATTR_SCAN_VOLUME_OUT = "scan_volume_out";
    public static final String ATTR_CALCULATED_VOLUME = "calculated_volume";

    public static final String ATTR_ID_PLATE = "id_plate";

    public static final String ATTR_HEIGHT = "height";

    public static final String ATTR_WIDTH = "width";

    public static final String ATTR_LENGTH = "length";

    public static final String ATTR_ID_TRAILER_PLATE = "id_trailer_plate";

    public static final String ATTR_ID_DELIVERY_NOTE = "id_delivery_note";
    public static final String QUERY_COMPLETED = "completed";
    public static final String QUERY_RESUME_DELIVERY = "resume_delivery";

    public static final String QUERY_TRAFFIC_DATE= "traffic_date";
}



