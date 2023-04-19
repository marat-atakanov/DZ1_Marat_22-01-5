import {useNavigate} from "react-router-dom";

export default function PageOne() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
            <button onClick={goBack}>back</button>
            <h1>Page one</h1>
        </>
    )
}