const ButtonList = ({changeCount}) => {

    //그림
    return (
        <>
            <div className='counting-div'>
                <button type='button' onClick={() => {
                    changeCount(1);
                    }}>1</button>
                <button type='button' onClick={() => {
                    changeCount(10);
                    }}>10</button>
                <button type='button' onClick={() => {
                    changeCount(100);
                    }}>100</button>
                <button type='button' onClick={() => {
                    changeCount(-100);
                    }}>-100</button>
                <button type='button' onClick={() => {
                    changeCount(-10);
                    }}>-10</button>
                <button type='button' onClick={() => {
                    changeCount(-1);
                    }}>-1</button>
            </div>
        </>
    )
}

//내보내기
export default ButtonList;