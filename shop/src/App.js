import { useEffect, useState } from 'react';
import './App.css';
// 부트스트랩 버튼 불러오기
import { Navbar, Nav, Container } from 'react-bootstrap';
import mockData from './components/mockData';
import ItemList from './components/itemList';


// 페이지 이동과 같은 기능 : Router 설치
// 1. npm install react-router-dom@6
// 2. 설치 후 index.js에서 세팅

// 4. Router 기능 사용을 위한 import
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

// @ react에서 비동기 통신을 위한 라이브러리 설치 @
// @ npm install axios @
import axios from 'axios';

function App() {
  const [itemList, setItemList] = useState(mockData);

  // useNavigate 선언
  const navigate = useNavigate();

  // 구조분해할당 : 배열, 객체

  // 데이터 박스


  function moreData() {
    axios.get('https://codingapple1.github.io/shop/data2.json')
      .then(response => {
        setItemList([...itemList, ...response.data]);
      })
      .catch(error => { console.log(error) });
  }


  return (
    <div className="App">
      {/* @ 비동기 @ */}
      {/* <ul>
        {
          data.map((element, idx) => {
            return (
              <li key={idx}>{element.title}</li>
            );
          })
        }
      </ul> */}

      {/* 네비바 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 배너 : 이미지 넣기 */}
      <div className='main-bg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/main_bg.jpg)` }}></div>

      {/* 라우터 연습 */}
      <Routes>
        {/* 상품목록 */}
        <Route path='/' element={<ItemList itemList={itemList} moreData={moreData}/>} />
        {/* 상세정보 */}
        <Route path='/detail/:id' element={<ItemDetail itemList={itemList} />} />
      </Routes>

      {/* 링크 연습 */}
      <Link to='/detail'>상세페이지</Link>

      {/* useNavigate 연습 */}
      {/* navigate(1) : 앞으로 이동 */}
      {/* navigate(-1) : 뒤로 이동 */}
      <button className='btn btn-success' onClick={() => navigate('/detail')}>상세페이지로 이동</button>

    </div>
  );
}

export default App;
