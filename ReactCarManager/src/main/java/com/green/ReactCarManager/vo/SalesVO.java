package com.green.ReactCarManager.vo;

import lombok.Data;

import java.util.List;

@Data
public class SalesVO {

    private int salesNum;
    private String buyer;
    private String tel;
    private String color;
    private String salesDate;
    private int carNum;

    private CarVO car1;
}