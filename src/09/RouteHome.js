import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RouteHome = () => {

    const navigate = useNavigate();
    // url ì ì¸.
    // const url = {
    //     "ì¬ê³¼ð" : "/p2?item=ì¬ê³¼ð" ,
    //     "ë°ëëð" : "/p2?item=ë°ëëð" ,
    //     "ë¹ê·¼ð¥" : "/p2?item=ë¹ê·¼ð¥"
    // }

    const goUrl = (item) => {
        // case 1 (ë¬¸ìì´ë¡ ì§ì  ëê¸°ê¸°)
        let url = `/p2?item=${item}`
        navigate(url);

        // case 2 (ifë¬¸ ì¬ì© - urlì ì ì¸íë¤ë©´)
        // if (item === "ì¬ê³¼ð") navigate("/p2?item=ì¬ê³¼ð");
        // else if (item === "ë°ëëð") navigate("/p2?item=ë°ëëð");
        // else (item === "ë¹ê·¼ð¥") navigate("/p2?item=ë¹ê·¼ð¥");
        // navigate(url[item]);
    }

    return (
        <>
            <h1>HOME</h1>
            
            <h2>íë¼ë¯¸í° ì ì¡</h2>
            <ul>
                <li><Link to="/p1/ì¬ê³¼ð">ì¬ê³¼ð</Link></li>
                <li><Link to="/p1/ë°ëëð">ë°ëëð</Link></li>
                <li><Link to="/p1/ë¹ê·¼ð¥">ë¹ê·¼ð¥</Link></li>
            </ul>

            <h2>íë¼ë¯¸í° ì ì¡2</h2>
            <button onClick={() => goUrl("ì¬ê³¼ð")}>ì¬ê³¼ð</button>
            <button onClick={() => goUrl("ë°ëëð")}>ë°ëëð</button>
            <button onClick={() => goUrl("ë¹ê·¼ð¥")}>ë¹ê·¼ð¥</button>
        </>
    );
}

export default RouteHome;