package com.ontimize.hr.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("OrderDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/OrderDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class OrderDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID_ORDER= "id_order";
    public static final String ATTR_ORDER_NAME= "order_name";
    public static final String ATTR_PRICE_PER_VOL= "price_per_vol";
    public static final String QUERY_ORDER_DELIVERYS= "orderDeliverys";

    public static final String QUERY_ALL_DELIVERIES = "allDeliveries";
    public static final String QUERY_ORDER_IS_COMPLETED = "orderIsCompleted";
}
