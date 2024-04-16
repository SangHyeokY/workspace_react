
function BoardList({ boardList }) {

    //그림
    return (
        <>
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작성일</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        boardList.map((board, idx) => {
                            return (
                                <tr key={board.boardNum}>
                                    <td>{boardList.length - idx}</td>
                                    <td>{board.title}</td>
                                    <td>{board.writer}</td>
                                    <td>{board.createDate}</td>
                                    <td>{board.readCnt}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

//내보내기
export default BoardList;