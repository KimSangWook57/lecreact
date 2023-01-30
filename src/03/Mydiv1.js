import Mydiv11 from "./Mydiv11";
import { useState } from "react"; 
// 변수를 probs로 받는다.
// 직접 정의해서 넣을 수도 있다.
const Mydiv1 = (probs) => {
    const user = probs.user;
    // 배열을 만들어서 변수를 앞에 넣고, 뒤에 넣는 변수명은 set으로 시작한다.
    let [cnt, setCnt] = useState(0);

    const addCnt = () => {
        cnt = cnt + 1;
        setCnt(cnt);
        console.log(cnt)
    }

    console.log(probs);
    return (
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user}</h2>
            <Mydiv11 user={user} divname={'사용자정의'+cnt}/>
            <div className="divbt">
                <button onClick={addCnt}>💓</button>
                <span>{cnt}</span>
            </div>
        </div>
    );
}

export default Mydiv1;