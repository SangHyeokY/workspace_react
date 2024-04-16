const Counters = ({ count }) => {

    //그림
    return (
        <>
            <div className='count-div'>
                <div>현재 카운트 :</div>
                <h1>{count}</h1>
            </div>
        </>
    )
}

//내보내기
export default Counters;