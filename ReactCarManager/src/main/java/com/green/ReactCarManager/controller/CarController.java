package com.green.ReactCarManager.controller;

import com.green.ReactCarManager.service.CarServiceImpl;
import com.green.ReactCarManager.vo.CarVO;
import com.green.ReactCarManager.vo.SalesVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {

    @Resource(name="carService")
    private CarServiceImpl carService;

    // -------------------------------------------------------------------------

    @GetMapping ("/manage")
    public List<CarVO> selectCarList(){
        return carService.selectCarList();
    }

    @PostMapping ("/write")
    public void insertCarList(@RequestBody CarVO carVO){
        System.out.println(carVO);
        carService.insertCarList(carVO);
    }

    // -------------------------------------------------------------------------

//    @GetMapping ("/sales")
//    public List<CarVO> carSelect(){
//        return carService.carSelect();
//    }

    @PostMapping ("/enroll")
    public void insertSales(@RequestBody SalesVO salesVO){
        System.out.println(salesVO);
        carService.insertSales(salesVO);
    }

    // -------------------------------------------------------------------------

    @GetMapping ("/list")
    public List<SalesVO> allSalesList(){
        return carService.allSalesList();
    }
}
