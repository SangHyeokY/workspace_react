import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //게시글 목록
  const board_list = [
    {
      'boardNo': 1,
      'title': '1. text',
      'content': '1. content',
      'writer': 'java.Kim',
      'reDate': '2024-02-01'
    },
    {
      'boardNo': 2,
      'title': '2. text',
      'content': '2. content',
      'writer': 'java.Lee',
      'reDate': '2024-02-02'
    },
    {
      'boardNo': 3,
      'title': '3. text',
      'content': '3. content',
      'writer': 'java.Park',
      'reDate': '2024-02-03'
    },
    {
      'boardNo': 4,
      'title': '4. text',
      'content': '4. content',
      'writer': 'java.Jung',
      'reDate': '2024-02-04'
    },
    {
      'boardNo': 5,
      'title': '5. text',
      'content': '5. content',
      'writer': 'java.Bae',
      'reDate': '2024-02-05'
    }
  ];

  let [idx, setIdx] = 엄;
  let [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <div className="header-div">
        <h4 className='header-title'>게시글</h4>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='row'>
            <div className='blank'></div>
            <table id="table">
              <colgroup>
                <col width="20%"></col>
                <col width="40%"></col>
                <col width="20%"></col>
                <col width="20%"></col>
              </colgroup>
              <thead className='table-head'>
                <tr>
                  <td>글번호</td>
                  <td>제목</td>
                  <td>작성자</td>
                  <td>작성일</td>
                </tr>
              </thead>
              <tbody>
                {
                  board_list.map((board, i) => {
                    return (
                      <tr key={i}>
                        <td>{board.boardNo}</td>
                        <td>
                          <span onClick={() => {
                            setIsShow(true);
                          }}>{board.title}</span>
                        </td>
                        <td>{board.writer}</td>
                        <td>{board.reDate}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
            <div className='blank'></div>
            <div>
              {
                isShow ? <Content board_list={board_list} idx={엄}/> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//상세정보 컴포넌트
function Content(props) {
  return (
    <div className='content-div'>
      <div>글번호 : {props.board_list[0].boardNo}</div>
      <div>제목 : {props.board_list[1].title}</div>
      <div>내용 : {props.board_list[2].content}</div>
      <div>작성자 : {props.board_list[3].writer}</div>
      <div>작성일 : {props.board_list[4].reDate}</div>
    </div>
  );
}

export default App;
