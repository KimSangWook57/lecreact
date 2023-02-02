import Mydiv11 from "./Mydiv11";
import { useState, useEffect } from "react"; 

// 변수를 probs로 받는다.
// 직접 정의해서 넣을 수도 있다.
const Mydiv1 = ({rname, n, setN}) => {
    // 오브젝트 형태로 probs(rname)를 받는다.
    // console.log(probs) 
    const user = rname;
    // 배열을 만들어서 변수를 앞에 넣고, 뒤에 넣는 변수명은 set으로 시작한다.
    // 함수명이나 변수명을 use로 시작하면 오류가 나온다.
    let [cnt, setCnt] = useState(0);
    // cnt를 1 더하는 함수.
    const addCnt = () => {
        // cnt = cnt + 1;
        setCnt(++cnt);
        // cnt 값을 다른 컴포넌트에도 주었다.
        // setN(cnt);
        // 삼항연산자 사용 가능.
        // setCnt(cnt % 2 === 0 ? cnt * 10 : cnt + 1) ;
        // console.log(cnt)
    }
    // 렌더링 후 딱 한번만 실행.(대괄호 o, 내용 x)
    useEffect(() => {
        console.log("mydiv1의 처음입니다......")
        return (
            console.log("mydiv1 종료")
            )
    }, [])
    // 새로 렌더링할 때마다 실행.(대괄호 x)
    useEffect(() => {
        console.log("변경 후 실행")
    })

    // useEffect를 이용한 cnt값 변경.
    useEffect(() => {
        // console.log("cnt값 변경")
        setN(++n);
    }, [cnt])


    // console.log(probs);
    return (
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user} {n}</h2>
            <Mydiv11 user={user} divname={'사용자정의' + n}/>
            <div className="divbt">
                <button onClick={addCnt}>💓</button>
                <span>{n}</span>
            </div>
        </div>
    );
}

export default Mydiv1;