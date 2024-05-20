package com.green.reactBoard.controller;

import com.green.reactBoard.vo.BoardVO;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/exam")
public class AxiosController {

    @PostMapping("/post1")
    public void post1(@RequestBody BoardVO boardVO){
        System.out.println("post1 메서드 실행");
        System.out.println(boardVO);
    }

    @PostMapping("/post2")
    public void post2(@RequestBody Map<String, String> data){
        System.out.println("post2 메서드 실행");
        System.out.println(data);
    }

    @GetMapping("/get1")
    public void get1(@RequestParam(name="name") String name,
                     @RequestParam(name="age") int age){
        System.out.println("get1 메서드 실행");
        System.out.println(name+age);
    }

    @GetMapping("/get2")
    public void get2(@RequestParam(name="name") String name,
                     @RequestParam(name="age") int age) {
        System.out.println("get2 메서드 실행");
        System.out.println(name+age);
    }

    @GetMapping("/get3/{id}")
    public void get3(@PathVariable(name="id") int id) {
        System.out.println("get3 메서드 실행");
        System.out.println(id);
    }
}
