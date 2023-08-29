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
    public static final String QUERY_COUNT_TRAVELS= "countTravels";
    public static final String QUERY_DETAIL_TRAVELS="detailTravels";

    public static final String QUERY_VOLUME = "volume";
    public static  final String QUERY_DESCARGA = "descarga";
}
