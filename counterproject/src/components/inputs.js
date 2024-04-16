import { useState } from "react";

// const test = () => {}
const Inputs = () => {
    
    let [member, setMember] = useState({
            'name' : ''
            , 'myDate' : ''
            , 'car' : ''
            , 'content' : ''
    });

    const chageMemberInfo = (e) => {
        setMember({...member, [e.target.name] : e.target.value});
    }

    return (
        <div>
            <div>
                input 컴포넌트
            </div>
            <div>
                {/* <input type="text" name="name" onChange={(e) => {

                    // const copyMember = {...member};
                    // copyMember.name = e.target.value;
                    // setMember(copyMember);

                    // 윗줄 요약
                    setMember({...member, 'name': e.target.value});

                }}/> */}
                <input type="text" name="name" onChange={chageMemberInfo}/>
            </div>
            <div>    
                <input type="date" name="myDate" onChange={chageMemberInfo}/>
            </div>
            <div>    
                <select>
                    <option>아반떼</option>
                    <option>K3</option>
                    <option>모닝</option>
                </select>
            </div>
            <div>
                <textarea cols={30} rows={5}></textarea>
            </div>
            <div>
                <button type="button">입력 내용 확인</button>
            </div>
            <div className="result-div">
                <div>이름 : {member.name}</div>
                <div>날짜 : {member['myDate']}</div>
                <div>셀렉트 : {member.car}</div>
                <div>내용 : {member['content']}</div>
            </div>
        </div>    
    );
}

export default Inputs;