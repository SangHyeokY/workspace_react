import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //★state 변수★
  //title -> 첫번째 글  /  setTitle -> ' '
  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코드 추천']);

  //좋아요 저장하는 useState 변수
  //setLikeCnt : Setter / 이걸 바꿔야 화면에 바뀐 점이 반영된다.
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);

  //Detail 숨기기/보이기
  let [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button type="button" onClick={() => {
        let title2 = [...title];
        title2[0] = '남자 옷 추천';
        setTitle(title2);
      }}>글 변경</button>

      {/* 반복문. 반복되는 작업 중에는 겹치지않는 key값이 필요 */}
      {/* 변수에 대한 정보를 List()에 전달해줌 */}
      {
        title.map((e, i) => {
          return (
            <List setIsShow={setIsShow} key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
          );
        })
      }

      {/* if문은 삼항연산자로 표현 */}
      {
        isShow ? <Detail /> : ''
      }

    </div>
  );
}

//블로그 글 하나하나를 표현하는 컴포넌트
//App과 List간의 정보전달 (props)
function List(props) {
  return (
    <div className='list'>
      <h4><span onClick={() => {
        props.setIsShow(true);
      }}>{props.title}</span> <span onClick={() => {
        let copyLikeCnt = [...props.likeCnt];
        copyLikeCnt[props.idx]++;
        props.setLikeCnt(copyLikeCnt);
      }}>👍</span> {props.likeCnt[props.idx]} </h4>
      <p>2월 19일 작성</p>
    </div>
  );
}

//상세정보를 표현하는 컴포넌트
function Detail() {
  return (
    <div className='detail'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;