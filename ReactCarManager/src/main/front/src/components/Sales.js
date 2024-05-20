import { useEffect, useState } from 'react';
import './../css/carSales.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sales = () => {

  const navigate = useNavigate();

  //차 목록 데이터를 저장할 state 변수
  const [salesList, setSalesList] = useState([]);

  //insert 보낼 데이터 저장할 state 변수 (객체 형식으로)
  const [salesParam, setSalesParam] = useState({
    buyer: '',
    color: '블랙',
    tel: '',
    carNum: 0
  });

  //통신
  useEffect(() => {
    axios.get('/manage')
      .then(response => {
        setSalesList(response.data);
        setSalesParam({ ...salesParam, carNum: response.data[0].carNum });
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  //내용 바뀌는거 저장
  const changeSalesParam = (e) => {
    setSalesParam({ ...salesParam, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="salesContainer">

        <div className="row g-3 mb-3 align-items-center">
          <div className="col-2">
            <label className="form-label">구매자명</label>
          </div>
          <div className="col-8">
            <input type="text" className="form-control" name="buyer" onChange={changeSalesParam} />
          </div>
        </div>

        <div className="row g-3 mb-3 align-items-center">
          <div className="col-2">
            <label className="form-label">색상</label>
          </div>
          <div className="col-3">
            <select name="color" className="form-select" onChange={changeSalesParam}>
              <option value='블랙'>블랙</option>
              <option value='화이트'>화이트</option>
              <option value='실버'>실버</option>
              <option value='레드'>레드</option>
            </select>
          </div>
          <div className="col-2">
            <label className="form-label">모델</label>
          </div>
          <div className="col-3">
            <select name="carNum" className="form-select" onChange={changeSalesParam}>
              {
                salesList.map((car, idx) => {
                  return (
                    <option key={idx} value={car.carNum}>{car.modelName}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <div className="row g-3 mb-3 align-items-center">
          <div className="col-2">
            <label className="form-label">연락처</label>
          </div>
          <div className="col-8">
            <input type="text" className="form-control" name="tel" onChange={changeSalesParam} />
          </div>
        </div>

        <div className="text-center mt-3">
          <button type="button" className="btn btn-primary" onClick={() => {
            axios.post('/enroll', salesParam)
              .then(response => {
                navigate('/salesList')              
              })
              .catch(error => {
                console.log(error);
              })
          }}>등록</button>
        </div>
      </div>
    </>
  )
}

export default Sales;