import {useNavigate, useParams} from 'react-router-dom';

function ItemDetail() {
    const navigate = useNavigate();

    // url에서 넘어오는 데이터를 받기
    const id = useParams();
    console.log(id);

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <img width='100%' src={process.env.PUBLIC_URL + `/images/shoes_1.jpg`} />
                    <h4>상품명 : </h4>
                    <p>상품설명 :</p>
                    <p>상품가격 :</p>
                    <button className="btn btn-primary">주문하기</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>상품목록</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;