import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();

    return <div>
        <h1>Edit</h1>
        <p>이곳은 수정페이지 입니다.</p>
        <button onClick={()=> setSearchParams({who:"winter"})}>QS 바꾸기</button>
        <button onClick={() => navigate('/')}>Home으로가기</button>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
}

export default Edit;