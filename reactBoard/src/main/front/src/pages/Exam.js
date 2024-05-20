// axios.get(url, [config]) : 서버에서 데이터를 받아올 때 사용 → @GetMapping // 데이터 받기
// axios.post(url, [데이터], [config]) : 서버에서 insert 작업할 때 → @PostMapping // 데이터 전달
// axios.put(url, [데이터], [config]) : 서버에서 update 작업할 때 → @PutMapping // 데이터 업데이트
// axios.delete(url, [config]) : 서버에서 delete 작업할 때 → @DeleteMapping // 데이터 삭제

import axios from "axios";

//axios를 이용하여 Controller로 데이터 넘기기
function Exam() {

  //post 방식으로 데이터 넘기기1
  const post_1 = () => {
    axios.post('/exam/post1', {
      title: 'java',
      content: '내용'
    })
  }

  //post 방식으로 데이터 넘기기2
  const data1 = {
    title: 'java2',
    content: '내용2'
  }

  const post_2 = () => {
    axios.post('/exam/post2', data1)
  }

  //get 방식으로 데이터 넘기기1
  const get_1 = () => {
    axios.get('/exam/get1?name=java&age=20')
  }

  //get 방식으로 데이터 넘기기2
  const get_2 = () => {
    axios.get('/exam/get2', {
      params: {
        name: 'java',
        age: 20
      }
    })
  }

  //주소 깔끔하게 나옴
  //get 방식으로 데이터 넘기기3
  const get_3 = () => {
    axios.get('/exam/get3/1')
  }


  return (
    <>
      <div>
        <button type="button" onClick={post_1}>post 방식으로 데이터 보내기1</button>
      </div>
      <div>
        <button type="button" onClick={post_2}>post 방식으로 데이터 보내기2</button>
      </div>
      <div>
        <button type="button" onClick={get_1}>get 방식으로 데이터 보내기1</button>
      </div>
      <div>
        <button type="button" onClick={get_2}>get 방식으로 데이터 보내기2</button>
      </div>
      <div>
        <button type="button" onClick={get_3}>get 방식으로 데이터 보내기3</button>
      </div>
    </>
  )
}

export default Exam;