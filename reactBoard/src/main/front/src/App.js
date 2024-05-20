import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import BoardList from './pages/BoardList';
import Write from './pages/Write';
import Exam from './pages/Exam';
import Detail from './pages/Detail';

function App() {

  return (
    <div className="App">
      <div className='container'>
         {/* 경로 지정해주기 */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/list' element={<BoardList />} />
          <Route path='/write' element={<Write />}/>
          <Route path='/detail/:boardNum' element={<Detail />}/>
          <Route path='/exam' element={<Exam />}/>
          <Route path='/*' element={<div>없는 페이지입니다.</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
