import Wheader from "./Wheader";
import keys from "../db/item.json";
import weather1 from "../db/weather1.json";
import { useState, useEffect } from "react";

const W1 = () => {
    // state 변수
    const [items, setItems] = useState([]);
    const [itemTag, setItemTag] = useState();

    // useEffect
    // 처음으로 컴포넌트가 렌더링되었을 때...
    useEffect(() => {
        console.log("w1", weather1.response.body.items.item)
        setItems(weather1.response.body.items.item)
    }, []);

    // 모든 렌더링 발생시마다 실행.
    // useEffect(() => {
    //
    // });

    // 특정 state(items) 변경시 실행.
    useEffect(() => {
        console.log("items", items);
        if (!items) return;

        let temp = items.map((i, n) =>
            <div className="w1d1v" key={"w2d1v" + n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
        )
        setItemTag(temp);

    }, [items]);

    return (
        <>
            <Wheader title={"단기정보"} />
            {items && itemTag}
        </>
    )
}

export default W1;