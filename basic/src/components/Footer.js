//div 태그 2개 이상 넣기전에 반드시
//하나의 태그 안에 같이 감싸져 있어야 함

import { useState } from "react";

function Footer() {
    console.log('Footer 랜더링~')
    const num = 5;
    let [title, setTitle] = useState('기존 제목');

    function changeTitle() {
        setTitle('바뀐 제목');
    }

    return (
        <>
            <h1>Footer~~</h1>
            {/* 조건 : if 사용 불가, 삼항연산자 사용 */}
            {num % 2 == 0 ? '짝수' : '홀수'}입니다.
            <div>{title}</div>
            <div>
                <button type="button" onClick={changeTitle}>제목변경</button>
                <button type="button" onClick={() => setTitle('또 바뀐 제목')}>제목변경2</button>
            </div>
        </>
    );
}

//다른 파일로 내보내기
export default Footer;