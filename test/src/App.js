import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

//App() 함수의 리턴 문 안에 html태그(JSX)를 작성하면
//해당 내용이 화면에 출력
//return 안의 내용은 반드시 하나의 태그에 감싸여 있어야 한다
//그래서 의미없는 태그로 모든 내용을 감싸는 것은 불편하기 때문에
//하나의 기능을 제공 <>
function App() {

  //모든 영역에 name 보내기
  const name = '서큘러';
  const level = 4;

  return (
    <>
      <div>
        헤더 {name}
      </div>
      <MainContent name = {name} level = {level}/>
      <Footer />
    </>
  );
}

//본문 영역 컴포넌트
//관례상 대문자로 시작 (컴포넌트) / 소문자로 시작 (함수)
//props에 데이터가 다 들어감
function MainContent(props) {
  return (
    <div>
      본문 영역 {props.name} {props.level}
    </div>
  );
}

export default App;
