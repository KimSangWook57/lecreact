import { useState } from "react";

const Frccn = ({cn, setCn}) => {
    // console.log(cn)
    // 넘어온 cn을 쪼개 준다.
    let infoArray = cn.split(',');
    infoArray = infoArray.map((i) => 
            <li>
                <span>{i.split(':')[0]}</span>
                {
                i.includes('높음') ?
                <span className="lired">{i.split(':')[1]}</span> 
                : 
                <span>{i.split(':')[1]}</span>    
                }            
            </li>
        );

    return (
        <div className="mainbox2">
            <div className="detail">
                <ul>{infoArray}</ul>
            </div>
        </div>
    );
}

export default Frccn ;