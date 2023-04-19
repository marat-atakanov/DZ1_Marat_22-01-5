import {useNavigate} from "react-router-dom";

export default function PageTwo() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <button onClick={goBack}>back</button>
            <h1>Page two</h1>
        </>
    )
}