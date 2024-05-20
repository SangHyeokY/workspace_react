import {useNavigate} from 'react-router-dom';

function Item({ items }) {
    const navigate = useNavigate();
    
    return (
        <div className='col-4 item-div' onClick={() => navigate(`/detail/${items.id}`)}> {/* 반복문에 고유 key로 구분해주기 */}
            <img width='100%' src={process.env.PUBLIC_URL + `/images/${items.imgName}`} />
            <h4>{items.title}</h4>
            <p>{items.price}</p>
        </div>
    );
}

export default Item;