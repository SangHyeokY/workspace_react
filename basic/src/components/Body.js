//div 태그 2개 이상 넣기전에 반드시
//하나의 태그 안에 같이 감싸져 있어야 함

function Body(props) {

    const num1 = 10;
    const num2 = 20;

    const person = {
        'name': 'YSH',
        'age': 50
    };

    return (
        <>
            <h1>Body~~</h1>
            {/* 숫자 연산 */}
            <div>{num1 + num2}</div>
            <div>{num1 / num2}</div>
            {/* key, value */}
            <div>{person.age} {person.name}</div>
            <div>{person['age']}</div>
            {/* 객체 받기 */}
            <div>{props.stuInfo.stuName}</div>
            <div>{props.stuInfo['age']}</div>
            <div>{props.stuInfo['score']}</div>
        </>
    );
}

//다른 파일로 내보내기
export default Body;