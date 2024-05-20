package com.green.ReactCarManager.service;

import com.green.ReactCarManager.vo.CarVO;
import com.green.ReactCarManager.vo.SalesVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carService")
public class CarServiceImpl implements CarService {

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<CarVO> selectCarList() {
        return sqlSession.selectList("carMapper.selectCarList");
    }

    @Override
    public void insertCarList(CarVO carVO) {
        sqlSession.insert("carMapper.insertCarList", carVO);
    }

//    @Override
//    public List<CarVO> carSelect() {
//        return sqlSession.selectList("carMapper.carSelect");
//    }

    @Override
    public void insertSales(SalesVO salesVO) {
        sqlSession.selectList("carMapper.insertSales", salesVO);
    }

    @Override
    public List<SalesVO> allSalesList() {
        return sqlSession.selectList("carMapper.allSalesList");
    }


}
