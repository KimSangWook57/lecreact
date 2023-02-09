import data from "../db/galdata.json"
import GalData from "./GalData";
import { useRef, useState, useEffect } from "react";
import "./Gal copy.css";

const GalSelect = () => {
    // data 가져오기.
    const items = data.response.body.items.item;
    // data를 map으로 정렬.
    const c1 = items.map((obj) => obj.galTitle);
    // 배열과 오브젝트의 비교.
    // console.log(c1);
    // console.log(c1.map((v, k) => console.log(v, k)));

    // let item_0 = items[0];
    // console.log(item_0);
    // key
    // console.log(Object.keys(item_0))
    // Object.keys(item_0.map((v, k) => console.log(v, k))) (?)
    // values
    // console.log(Object.values(item_0))
    // Object.values(item_0.map((v, k) => console.log(v, k))) (?)
    // key + values
    // Object.entries(item_0.map((v, k) => console.log(v, k))) (?)

    
    // 렌더링 제어변수.
    // 빈 오브젝트 하나가 들어 있다.
    // length는 배열에만 찍을 수 있다.
    const [selData, setSelData] = useState({});

    // select box 제어.
    const selR = useRef();
    // console.log(selR.current)

    // 컴포넌트가 처음 렌더링되면...
    useEffect(() => {
        // console.log(selR.current)
        selR.current.focus();
    }, [])

    // 선택된 항목에 맞는 데이터만 가지고 와야 한다.
    const handleSel = (e) => {
        e.preventDefault();
        if (selR.current.value === "") return;
        // console.log(selR.current.value)
        // 데이터의 제목이 선택창의 값과 같다면...
        let temp = items.filter((item) => item.galTitle === selR.current.value);
        // console.log(temp)
        setSelData(temp[0]);
    }
    // 선택창을 찍는 코드.
    const oTag = c1.map((i) =>
        <option key={i} value={i}>{i}</option>
    );
    // 데이터창을 찍는 코드.
    // const itemTag = items.map((items) =>
    //     <GalData selData={items} />
    // )

    return (
        <>
            <div className="header">
                {/* onCilck에 이벤트를 걸어 바로 나오게 할 수도 있다. */}
                <select ref={selR} name="sel1" onChange={handleSel}>
                    <option value="">항목을 선택하세요.</option>
                    {oTag}
                </select>
            </div>
            <div className="main">
                {/* 오브젝트 안에 무언가 하나라도 있어야 찍는다. */}
                {Object.keys(selData).length > 0 && <GalData selData={selData} />}
                {/* 오브젝트 안에 무엇이 있든 찍는다. (공백도) */}
                {/* selData && <GalData selData={selData} /> */}
            </div>
        </>
    );
}

export default GalSelect;