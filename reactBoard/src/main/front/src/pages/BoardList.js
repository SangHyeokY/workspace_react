import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//게시글 목록 컴포넌트
const BoardList = () => {

    //1. 게시글 상세 정보 조회
    //2. 상세페이지로 이동(컴포넌트 교체)
    //3. axios

    //★ 데이터 불러오기
    const [boardList, setBoardList] = useState([]);

    //다른 창으로 넘어가기
    const navigate = useNavigate();

    //불러오는 횟수 정하기 (마운트) : useEffect
    useEffect(() => {
        axios.get('/getList')
            .then(response => {
                setBoardList(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className="row mt-5">
                <div className="col">
                    <table className="table table-striped table-hover table-light text-center">
                        <thead className="table-dark">
                            <tr>
                                <td>No</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일</td>
                                <td>조회수</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                boardList.map((board, idx) => {
                                    return (
                                        <tr key={idx} onClick={() => navigate(`/detail/${board.boardNum}`)}>
                                            <td>{boardList.length - idx}</td>
                                            <td>{board.title}</td>
                                            <td>{board.writer}</td>
                                            <td>{board.createDate}</td>
                                            <td>{board.readCnt}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/write')}>글쓰기</button>
                </div>
            </div>    
        </>
    )
}

export default BoardList;