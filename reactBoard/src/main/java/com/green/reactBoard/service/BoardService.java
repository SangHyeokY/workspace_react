package com.green.reactBoard.service;

import com.green.reactBoard.vo.BoardVO;

import java.util.List;

public interface BoardService {

    List<BoardVO> selectBoardList();

    void insertBoard(BoardVO boardVO);

    BoardVO selectDetail(int boardNum);

    void deleteBoard(int boardNum);
}
