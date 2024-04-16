import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

//컴포넌트 (대문자)
// 권장 : 파일 1개당 컴포넌트 1개
function App() {

  const num1 = 10;
  const myName = 'siu';
  const student = {
    'stuName': '자바',
    'age': 20,
    'score': 99
  };

  //구조분해할당 (javaScript도 가능)
  const arr = [1, 2, 3];
  const arr_0 = arr[0];
  const arr_1 = arr[1];
  const arr_2 = arr[2];

  // → 배열의 구조분해할당
  const [a, b, c] = arr;
  console.log(`a = ${a}`);

  const [a1, b1] = arr; // 출력 : a1 = 1, b1 = 2
  const [a2, b2, c2, d2] = arr; // 출력 : d2 = undefined


  // → 객체의 구조분해할당
  const { stuName, age, score } = student;
  console.log(`stuName = ${stuName}`);

  const { age: abc } = student;
  console.log(abc); {/* age에 abc를 넣음 */ }

  //내용(숫자)가 바뀌는 버튼 (1)
  let test_num = 10;
  function changeNum() {
    test_num = 20;
    //→ 리액트가 바뀐 값을 알아차리지 못함...
  }

  //내용(숫자)가 바뀌는 버튼 (2)
  //useState 사용
  //useState로 만든 변수의 값이 바뀌면 해당 변수를 선언한 컴포넌트가 재(re)렌더링 됨 
  //첫번째 데이터 : useState의 소괄호 안의 데이터로 저장되는 변수
  //두번째 데이터 : 첫번째 데이터의 값을 변화시킬 함수
  let [testNum, setTestNum] = useState(10);
  function changeTestNum() {
    setTestNum(20);
  }

  return (
    <div className="App">
      {/* 내보낸(export) 자료 가져오기(import) */}
      {/* 데이터 전달(props) : 상위(App) → 하위(Header) 컴포넌트로만 가능, 
      등위(Header, Body)끼리도 불가능 */}
      <div>1번째 : {test_num}</div>
      <div>2번째 : {testNum}</div>
      <div>
        <button type='button' onClick={changeNum}>클릭!</button>
        <button type='button' onClick={changeTestNum}>리액트 클릭!</button>
      </div>
      <Header num1={num1} myName={myName} />
      <Body stuInfo={student} /> {/* props.stuInfo.???로 보내짐 */}
      <Footer />
    </div>
  );
}

//연습용 컴포넌트
function TestComponent() {
  return (
    <div>연습연습</div>
  )
}

export default App;
