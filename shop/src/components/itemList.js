import { useState } from "react";
import Item from "./item";

function ItemList({ itemList, moreData }) {

    const [isShow, setIsShow] = useState(true);

    return (
        <div className='container item-list-div mt-3'>
            <div className='row'>
                {
                    itemList.map((items, idx) => {
                        return (
                            <Item items={items} key={idx} />
                        );
                    })
                }
            </div>
            {
                isShow ?
                    <div className='row mt-3'>
                        <div className="col text-center">
                            <button className="btn btn-primary" onClick={() => {
                                moreData();
                                setIsShow(false);
                            }}>더 보기</button>
                        </div>
                    </div>
                : null
            }
        </div>
    );
}

export default ItemList;