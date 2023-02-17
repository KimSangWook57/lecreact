import { useState, useEffect, useRef } from "react";
import BoxofficeList from "./BoxofficeList";
import "./Boxoffice.css"

const Boxoffice = () => {
    // 상영일 선택 state 변수
    const [targetDt, setTargetDt] = useState();
    // 선택한 날짜 (input 제어)
    const mvdr = useRef();
    // 처음 렌더링되면 날짜선택란에 포커스를 둔다.
    useEffect(() => {
        mvdr.current.focus();
    }, [])

    // targetDt가 변경되면...
    useEffect(() => {
        // console.log("targetDt", targetDt)
    }, [targetDt]) ;

    // input 날짜 선택란 이벤트
    const handleMV = () => {
        // console.log(mvdr.current.value);
        // replaceAll로 문자열들을 형식에 맞게 바꿀 수 있다.
        setTargetDt(mvdr.current.value.replaceAll("-",""))
    }

    return(
        <>
            <div className="mvh">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdr} onChange={handleMV} />
                </form>
            </div>
            <div className="mvmain">
                {targetDt && <BoxofficeList targetDt={targetDt} />}  
            </div>
        </>
    );
}

export default Boxoffice;