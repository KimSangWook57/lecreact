import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css'
import { useState } from "react";

const Mydiv = () => {
    const rname = 'React!!!'
    let[n, setN] = useState(0);

    const upN = () => {
        setN(++n)
    }

    return (
        <div className="content">
            <div className="header">
                {/* 변수명을 중괄호로 넣는다. */}
                <h1 onClick={upN}>probs 예제 - {rname} {n}</h1> 
            </div>
            <div className="main">
                <Mydiv1 rname={rname} n={n} setN={setN}/>
                <Mydiv2 rname={rname} n={n} setN={setN}/>
            </div>
        </div>
    );
}

export default Mydiv;