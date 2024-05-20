package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarVO;
import com.green.ReactCarManager.vo.SalesVO;

import java.util.List;

public interface CarService {

    List<CarVO> selectCarList();

    void insertCarList(CarVO carVO);

//    List<CarVO> carSelect();

    void insertSales(SalesVO salesVO);

    List<SalesVO> allSalesList();
}
