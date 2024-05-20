import { useEffect, useState } from 'react';
import './../css/carSales.css';
import axios from 'axios';

const List = () => {

  const [salesList, setSalesList] = useState([]);

  useEffect(() => {
    axios.get("/list")
      .then(response => {
        setSalesList(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <td rowSpan={2}>No.</td>
            <td colSpan={3}>구매자 정보</td>
            <td colSpan={3}>차량정보</td>
          </tr>
          <tr>
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          {
            salesList.length == 0 ?
              <tr>
                <td colSpan={7}>조회된 데이터가 없어요~</td>
              </tr> :
              salesList.map((sales, idx) =>
                <tr key={idx}>
                  <td>{salesList.length - idx}</td>
                  <td>{sales.buyer}</td>
                  <td>{sales.tel}</td>
                  <td>{sales.salesDate}</td>
                  <td>{sales.color}</td>
                  <td>{sales.car1.modelName}</td>
                  <td>{sales.car1.price}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default List;