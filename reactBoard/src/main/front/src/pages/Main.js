import { useNavigate } from "react-router-dom"

//게시판 프로젝트 시작 시 맨처음 보여주는 메인화면 컴포넌트
const Main = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='row mt-5'>
                <div className='col text-center'>
                    <h1>게시판 프로젝트</h1>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col text-center'>
                    {/* <Link to={'/list'}>게시판 프로젝트 시작</Link>
                    <Link to={'/list'}>게시글 프로젝트 시작</Link> */}
                    <span className="link-span" onClick={() => navigate('/list')}>
                        <h4>게시판 프로젝트 시작</h4>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Main