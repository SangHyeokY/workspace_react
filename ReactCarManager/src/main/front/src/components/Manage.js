import axios from "axios";
import { useEffect, useRef, useState } from "react";
import './../css/carManage.css';;

const Manage = () => {

  //차 목록 데이터를 저장할 state 변수
  const [carList, setCarList] = useState([]);

  //차량 등록에 필요한 데이터를 저장할 state 변수
  const [carInfo, setCarInfo] = useState({
    modelName: '',
    price: 0,
    madeBy: '현대'
  });

  //테스트 - cnt 값이 변경될 때 실행x, carInfo 값이 변경될 때 실행o
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    console.log(cnt);
  }, [carInfo]);

  //참조값
  const modelNameRef = useRef();
  const priceRef = useRef();

  //컨트롤러 통신
  useEffect(() => {
    axios.get('/manage')
      .then(reponse => {
        setCarList(reponse.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [cnt]);

  //insert 데이터 세팅 함수
  const setData = (e) => {
    setCarInfo({ ...carInfo, [e.target.name]: e.target.value });
  }

  //등록 버튼 클릭 시 실행
  const insertCar = (e) => {
    if (carInfo.modelName === '') {
      alert('모델명 입력');
      modelNameRef.current.focus();
      return;
    }
    if (carInfo.price === 0 || carInfo.price === '') {
      alert('가격 입력');
      priceRef.current.focus();
      return;
    }
    axios.post('/write', carInfo)
      .then(response => {
        modelNameRef.current.value = '';
        priceRef.current.value = '';
        // 여기 수정해야 함
        setCarInfo({
          modelName: '',
          price: 0,
          madeBy: '현대'
        });
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <>
      <div className="carContainer">
        <h4 className="title">차량등록</h4>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="form-label">제조사</label>
          </div>
          <div className="col-2">
            <select name="madeBy" className="form-select" onChange={setData}>
              <option value='현대'>현대</option>
              <option value='기아'>기아</option>
              <option value='쌍용'>쌍용</option>
            </select>
          </div>
          <div className="col-auto">
            <label className="form-label">모델명</label>
          </div>
          <div className="col-4">
            <input type="text" className="form-control" name="modelName" ref={modelNameRef} onChange={setData} />
          </div>
          <div className="col-auto">
            <label className="form-label">차량가격</label>
          </div>
          <div className="col-4">
            <input type="text" className="form-control" name="price" ref={priceRef} onChange={setData}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  insertCar();
                }
              }} />
          </div>
        </div>
        <div className="text-end mt-3">
          <button type="button" className="btn btn-secondary" onClick={() => {
            setCnt(cnt + 1);
          }}>CNT 증가
          </button>
          &ensp;
          <button className="btn btn-primary" type="button" onClick={insertCar}>등록</button>
        </div>
        <div className="br"></div>
        <h4 className="title">차량목록</h4>
        <table className="table table-striped">
          <colgroup>
            <col width={33.3} />
            <col width={33.4} />
            <col width={33.3} />
          </colgroup>
          <thead className="table table-dark">
            <tr>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            {
              carList.length == 0 ?
                <tr>
                  <td colSpan={3}>조회된 데이터가 없어요~</td>
                </tr> :
                carList.map((car, idx) => {
                  return (
                    <tr key={car.carNum}>
                      <td>{car.carNum}</td>
                      <td>{car.modelName}</td>
                      <td>{car.madeBy}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Manage;