import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {

  //boardNum 받아오기
  const { boardNum } = useParams();

  //저장할 공간
  const [boardDetail, setBoardDetail] = useState({});

  //불러오는 횟수 정하기 (마운트) : useEffect
  useEffect(() => {
    axios.get(`/detail/${boardNum}`)
      .then(response => {
        setBoardDetail(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  //이동하기
  const navigate = useNavigate();

  return (
    <>
      <div className="row mt-5">
        <div className="input-group mb-3">
          <span className="input-group-text">제목</span>
          <input type="text" className="form-control" value={boardDetail.title} readOnly />
          <span className="input-group-text">조회수</span>
          <input type="text" className="form-control" value={boardDetail.readCnt} readOnly />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">작성자</span>
          <input type="text" className="form-control" value={boardDetail.writer} readOnly />
          <span className="input-group-text">작성일</span>
          <input type="text" className="form-control" value={boardDetail.createDate} readOnly />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">내용</span>
          <textarea className="form-control" rows={5} cols={30} value={boardDetail.content} readOnly/>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={() => {navigate('/list')}}>목록가기</button>
        &ensp;
        <button type="button" className="btn btn-secondary" onClick={() => {navigate('/update')}}>수정하기</button>
        &ensp;
        <button type="button" className="btn btn-danger" onClick={() => {
          if(window.confirm('정말 삭제하겠습니까?')){
            axios.delete(`/delete/${boardNum}`)
                .then(response => {
                  alert('삭제 되었습니다.');
                  navigate('/list');
                })
                .catch(error => console.log(error))
          }
        }}>삭제하기</button>
      </div>
    </>
  )
}

export default Detail;