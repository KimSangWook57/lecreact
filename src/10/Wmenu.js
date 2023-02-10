import Wheader from "./Wheader";
import { Link } from "react-router-dom";


const Wmenu = () => {

    return (
        <>
            <Wheader title={"날씨예보"} />
            <div className="main">
                <ul>
                    <li><Link to="/w1">단기정보</Link></li>
                    <li><Link to="/w2">장기예보</Link></li>
                </ul>
            </div>
        </>

    )
}

export default Wmenu;