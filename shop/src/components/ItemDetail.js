import { useNavigate, useParams } from 'react-router-dom';

function ItemDetail({ itemList }) {
    const navigate = useNavigate();

    // url에서 넘어오는 데이터를 받기
    const { id } = useParams();

    //상품목록 데이터
    // == 자료형은 비교를 안함
    // === 자료형까지 일치하면 true
    let items;
    for (const item of itemList) {
        if (item.id == id) {
            items = item;
            break;
        }
    }

    // 요약
    // let i = itemList.find(item => item.id == id);

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <img width='100%' src={process.env.PUBLIC_URL + `/images/${items.imgName}`} />
                    <h4>{items.title}</h4>
                    <p>{items.content}</p>
                    <p>{items.price}</p>
                    <button className="btn btn-primary">주문하기</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>상품목록</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;