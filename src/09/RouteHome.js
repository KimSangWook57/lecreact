import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RouteHome = () => {

    const navigate = useNavigate();
    // url 선언.
    // const url = {
    //     "사과🍎" : "/p2?item=사과🍎" ,
    //     "바나나🍌" : "/p2?item=바나나🍌" ,
    //     "당근🥕" : "/p2?item=당근🥕"
    // }

    const goUrl = (item) => {
        // case 1 (문자열로 직접 넘기기)
        let url = `/p2?item=${item}`
        navigate(url);

        // case 2 (if문 사용 - url을 선언했다면)
        // if (item === "사과🍎") navigate("/p2?item=사과🍎");
        // else if (item === "바나나🍌") navigate("/p2?item=바나나🍌");
        // else (item === "당근🥕") navigate("/p2?item=당근🥕");
        // navigate(url[item]);
    }

    return (
        <>
            <h1>HOME</h1>
            
            <h2>파라미터 전송</h2>
            <ul>
                <li><Link to="/p1/사과🍎">사과🍎</Link></li>
                <li><Link to="/p1/바나나🍌">바나나🍌</Link></li>
                <li><Link to="/p1/당근🥕">당근🥕</Link></li>
            </ul>

            <h2>파라미터 전송2</h2>
            <button onClick={() => goUrl("사과🍎")}>사과🍎</button>
            <button onClick={() => goUrl("바나나🍌")}>바나나🍌</button>
            <button onClick={() => goUrl("당근🥕")}>당근🥕</button>
        </>
    );
}

export default RouteHome;