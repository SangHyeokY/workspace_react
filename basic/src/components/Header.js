//div 태그 2개 이상 넣기전에 반드시
//하나의 태그 안에 같이 감싸져 있어야 함

import { useState } from "react";

//App.js로부터 num1을 받음
//함수 안에는 props, 받은 데이터 앞에는 props.data
//받은 데이터(props)의 형태는 객체. { }. Dictionary.

function Header(props) { // Header({num1, myName})← 구조분해할당

    console.log(props);

    //구조분해할당
    //const {num1, myName} = props;
    //이러면 일일이 {props.???} 안적고 {???}만 적어도 됨

    //input 태그에 입력한 데이터를 저장할 변수
    let [addr, setAddr] = useState('');

    return (
        <>
            <div>
                <h1>Header1 : {props.num1}</h1>
            </div>
            <div>
                <h1>Header2 : {props.myName}</h1>
                <input type="text" name="addr" onChange={(e) => {
                    //console.log(e.target.value);
                    setAddr(e.target.value);
                }} />
            </div>
        </>
    );
}

//다른 파일로 내보내기
export default Header;