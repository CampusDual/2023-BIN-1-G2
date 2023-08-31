package com.ontimize.hr.model.core.dao;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("DeliveryNotesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/DeliveryNotesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class DeliveryNotesDao extends OntimizeJdbcDaoSupport{
    public static final String ATTR_ID_DELIVERY_NOTE = "id_delivery_note";

    public static final String ATTR_DELIVERY_NOTE = "delivery_note";
    public static final String QUERY_NOT_MATCHED_DELIVERYS= "notMatchedDeliverys";
}
