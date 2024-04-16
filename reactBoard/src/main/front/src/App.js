
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BoardList from './BoardList';

function App() {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  //Component의 생애주기(Life Cycle)
  //1. Component가 최초로 로딩 : 마운트(mount)
  //2. Component가 리렌더 : 업데이트(update)
  //3. Component가 제거 : 언마운트(unmount)

  //useEffect 안의 내용은 모든 내용이 렌더링된 후에 실행된다.
  //api로 데이터를 조회할 때

  //useEffect의 두번째 매개변수를 세팅하지 않으면
  //최조 Component 로딩 + 리렌더 될때마다 실행

  //마운트 될때 + 업데이트 될때 실행
  useEffect(() => {
    // console.log('마운트 + 업데이트');
  });

  //마운트 될때만 실행
  useEffect(() => {
    // console.log('마운트');
  }, []);

  //마운트 될때 + num 변수의 값이 변할때 실행 
  useEffect(() => {
    // console.log('마운트 + num값 업데이트');
  }, [num]);

  useEffect(() => {
    // console.log(1);

    //useEffect 내용이 실행되기 전에 실행
    //마운트 될때는 실행이 안됨
    //언마운트 될때도 실행
    return () => {
      // console.log(2);
    }
  });

  //어떤 컴포넌트든 업데이트 될때만 콘솔에 1을 출력
  useEffect(() => {
    return () => {
      // console.log(1);
    }
  });

  // ----------------------------------------------------------- //
  //비동기 통신 //then ~ , catch ~
  //useEffect로 값이 바뀔때만 불러오도록 하여(mount) 부하를 줄이기

  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios.get('/getList')
      .then(response => {
        setBoardList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // ----------------------------------------------------------- //

  // 1. 게시글 목록을 보여줄 수 있는 컴포넌트를 생성
  // BoardList.js src 폴더에 생성

  // 2. BoardList.js 컴포넌트에서 테이블 형태로
  // 게시글 목록을 표현 (App.js) 

  // ----------------------------------------------------------- //

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          {/* 연습용 버튼 */}
          <div className='col-1'>
            <div>num = {num}</div>
            <div>
              <button className='btn btn-danger' onClick={() => {
                setNum(num + 1);
              }}>버튼1</button>
            </div>
            <div>num2 = {num2}</div>
            <div>
              <button className='btn btn-dark' onClick={() => {
                setNum2(num2 + 1);
              }}>버튼2</button>
            </div>
          </div>
          {/* 게시글 */}
          <div className='col-11'>
            <BoardList boardList={boardList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
