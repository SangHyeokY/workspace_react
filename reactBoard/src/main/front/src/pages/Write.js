import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// [config] 없어도 됨
// axios.get(url, [config]) : 서버에서 데이터를 받아올 때 사용 → @GetMapping // 데이터 받기
// axios.post(url, 데이터, [config]) : 서버에서 insert 작업할 때 → @PostMapping // 데이터 전달
// axios.put(url, 데이터, [config]) : 서버에서 update 작업할 때 → @PutMapping // 데이터 업데이트
// axios.delete(url, [config]) : 서버에서 delete 작업할 때 → @DeleteMapping // 데이터 삭제

const Write = () => {

  const navigate = useNavigate();

  //초기값
  const initData = {
    title: '',
    writer: '',
    content: ''
  };

  //게시판 정보
  const [boardInfo, setBoardInfo] = useState(initData);

  //처음엔 안보이게
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text">제목</span>
            <input type="text" className="form-control" onChange={e => { setBoardInfo({ ...boardInfo, title: e.target.value }) }} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">작성자</span>
            <input type="text" className="form-control" onChange={e => { setBoardInfo({ ...boardInfo, writer: e.target.value }) }} />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">내용</span>
            <textarea rows={5} cols={30} className="form-control" onChange={e => { setBoardInfo({ ...boardInfo, content: e.target.value }) }} />
          </div>
        </div>
        {/* <div className="col-6">
          <div>제목</div>
          <input type="text" className="form-control mb-3"
            onChange={e => { setBoardInfo({ ...boardInfo, title: e.target.value }) }} />
          <div>작성자</div>
          <input type="text" className="form-control mb-3"
            onChange={e => { setBoardInfo({ ...boardInfo, writer: e.target.value }) }} />
          <div>내용</div>
          <textarea rows={5} cols={30} className="form-control mb-3"
            onChange={e => { setBoardInfo({ ...boardInfo, content: e.target.value }) }}></textarea>
        </div> */}
        {
          isShow ?
            <div className="col-6">
              <div>제목</div>
              <input type="text" value={boardInfo.title} readOnly />
              <div>작성자</div>
              <input type="text" value={boardInfo.writer} readOnly />
              <div>내용</div>
              <textarea rows={5} cols={30}
                value={boardInfo.content} readOnly></textarea>
            </div> :
            null
        }
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={(e) => {
          axios.post('/insertBoard', boardInfo)
            .then(response => {
              alert('글 등록 완료')
              navigate('/list');
            })
            .catch(error => {
              console.log(error)
            })
        }}>글 등록</button>
      </div>
    </>
  )
}

export default Write;