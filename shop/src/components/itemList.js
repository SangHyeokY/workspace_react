import Item from "./item";

function ItemList({ itemList }) {
    return (
        <div className='container item-list-div mt-3'>
            <div className='row'>
                {
                    itemList.map((items, idx) => {
                        return (
                            <Item items={items} key={idx}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ItemList;