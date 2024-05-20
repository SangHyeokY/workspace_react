package com.green.reactBoard;

import com.green.reactBoard.service.BoardService;
import com.green.reactBoard.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//RestController : 해당 클래스의 모든 메소드는 전부 비동기
@RestController
public class TestController {

    @Resource(name="boardService")
    private BoardService boardService;

    @GetMapping("/test1")
    public String test1(){
        return "java";
    }

    //게시글 리스트 전체 보기
    @GetMapping("/getList")
    public List<BoardVO> getList(){
        return boardService.selectBoardList();
    }

    //게시글 작성
    @PostMapping("/insertBoard")
    public void insertBoard(@RequestBody BoardVO boardVO){
        boardService.insertBoard(boardVO);
        System.out.println("insertBoard 메서드 실행~");
    }

    //게시글 상세보기
    @GetMapping("/detail/{boardNum}")
    public BoardVO detail(@PathVariable(name="boardNum") int boardNum){
        return boardService.selectDetail(boardNum);
    }

    //게시글 삭제하기
    @DeleteMapping("/delete/{boardNum}")
    public void delete(@PathVariable(name="boardNum") int boardNum){
        boardService.deleteBoard(boardNum);
    }
}
