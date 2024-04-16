import { useState } from 'react';
import './App.css';
import ButtonList from './components/button';
import Counters from './components/counter';
import Inputs from './components/inputs';

function App() {
  //스프레드 연산자
  let arr = [1, 2, 3];
  // ...arr : arr 배열의 모든 요소를 낱개로 분리

  let arr1 = [];
  arr1.push(1); // [1]
  arr1.push(2); // [1, 2]
  arr1.push(arr); // [1, 2 [1, 2, 3]]
  arr1.push(...arr); // [1, 2, [1, 2, 3], 1, 2, 3]

  let arr2 = [...arr, 5, 6]; // [1, 2, 3, 5, 6]

  let arr3 = [1, 2, 3];
  let arr4 = [1, 2, 3];
  //arr3와 arr4는 같은 값을 가지고 있는가?
  //아니다

  let arr5 = [1, 2, 3];
  let arr6 = [...arr5]; // [1, 2, 3]

  let car1 = {
    'medel': '아반떼'
    , 'price': 1000
    , 'color': 'white'
    , 'price': 2000
  };

  let car2 = { ...car1, 'price': 3000 };


  //선언
  let [count, setCount] = useState(0);
  const changeCount = (num) => {
    setCount(count + num);
  }

  //그림
  return (
    <div className="App">
      {/* <Inputs/> */}
      <div className='container'>
        <h2>Simple Counter</h2>
        <Counters count={count} />
        <ButtonList changeCount={changeCount}/>
      </div>
    </div>
  );
}

export default App;
