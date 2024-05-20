import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './components/Home.js';
import Manage from './components/Manage.js';
import Sales from './components/Sales.js';
import List from './components/List.js';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App container">
      <div className='row mt-3'>
        <div className='col text-center'>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>메뉴</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link>
                <Nav.Link onClick={() => navigate('/carManage')}>차량관리</Nav.Link>
                <Nav.Link onClick={() => navigate('/regSalesInfo')}>판매 정보 등록</Nav.Link>
                <Nav.Link onClick={() => navigate('/salesList')}>판매 목록</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>

      <div className='row mt-3'>
        <div className='col text-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carManage' element={<Manage />} />
            <Route path='/regSalesInfo' element={<Sales />} />
            <Route path='/salesList' element={<List />} />
          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;
