package com.ontimize.hr.model.core.service;

import com.ontimize.hr.api.core.service.IOrderService;
import com.ontimize.hr.api.core.service.IRegisterService;
import com.ontimize.hr.model.core.dao.OrderDao;
import com.ontimize.hr.model.core.dao.RegisterDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("OrderService")
@Lazy
public class OrderService implements IOrderService {

    @Autowired private OrderDao orderDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Autowired private IRegisterService registerService;


    @Override
    public EntityResult orderDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {

        Map<String, Object> attrMap = new HashMap<>();
        attrMap.put("id_order", null);
        ArrayList<String> attr= new ArrayList<String>();
        attr.add(RegisterDao.ATTR_ID);
        EntityResult query = this.registerService.completedQuery(keyMap,attr);
        if(query.calculateRecordNumber()>0){

            for(int i=0; i< query.calculateRecordNumber();i++){
                Map<String,Object> keyMap2= new HashMap<>();
                keyMap2.put("id",query.getRecordValues(i).get("id"));
                this.registerService.registerUpdate(attrMap,keyMap2);
            }

        }



        return this.daoHelper.delete(this.orderDao, keyMap);
    }

    @Override
    public EntityResult orderDeliverysQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.orderDao, keyMap, attrList,OrderDao.QUERY_ORDER_DELIVERYS);
    }

    @Override
    public EntityResult orderDeliverysDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {

        Map<String, Object> attrMap = new HashMap<>();
        attrMap.put("id_order", null);

        return this.registerService.registerUpdate(attrMap, keyMap);
    }

    @Override
    public EntityResult orderAllDeliveriesQuery(Map<String, Object> keyMap, List<String> attrList)throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.orderDao, keyMap, attrList,OrderDao.QUERY_ALL_DELIVERIES);
    }
    @Override
    public EntityResult orderDeliverysInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        Map<String,Object> attrMapUpdate= new HashMap<>();
        attrMapUpdate.put("id_order", attrMap.get("id_order"));
        Map<String,Object> attrMapDelivery= new HashMap<>();
        attrMapDelivery.put("delivery_note", attrMap.get("delivery_note"));

        List<String> attr = new ArrayList<String>();
        attr.add(RegisterDao.ATTR_ID);
        EntityResult query = this.registerService.completedQuery(attrMapDelivery,attr);
        if(query.calculateRecordNumber() > 0) {
            return this.registerService.registerUpdate(attrMapUpdate, query.getRecordValues(0));
        }
        return query;

    }

    @Override
    public EntityResult orderQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {

        return this.daoHelper.query(this.orderDao, keyMap, attrList);
    }

    @Override
    public EntityResult orderInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        attrMap.put("id_order",null);
        return this.daoHelper.insert(this.orderDao, attrMap);
    }

    @Override
    public EntityResult orderUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.orderDao, attrMap, keyMap);
    }
    @Override
    public EntityResult orderIsCompletedQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.orderDao, keyMap, attrList, OrderDao.QUERY_ORDER_IS_COMPLETED);
    }
}
