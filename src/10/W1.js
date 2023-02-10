import Wheader from "./Wheader";
import keys from "../db/item.json";
import weather1 from "../db/weather1.json";

const W1 = () => {

    // console.log("weather1", weather1)
    // console.log("keys", keys)
    
    let items = weather1.response.body.items.item;
    // console.log("items", items)
    // 카테고리 추출.
    let w1 = items.map((i) => {
        let temp = [];
        // 항목을 돌면서, 배열 안에 배열들을 넣는다.
        // 여러 줄 예시.
        temp.push(keys[i.category][0]);
        temp.push(i.obsrValue);
        temp.push(keys[i.category][1]);
        return temp;
    })
    console.log("w1", w1)
    
    // 배열을 돌며 내용 찍기.
    // let w1txt = 

    return (
        <>
            <Wheader title={"단기정보"} />
            <div className="main">
                <div className="w1div">
                    <span className="sp0">강수량</span> 
                    <span className="sp1">0</span>
                    <span className="sp2">mm</span>
                </div>
            </div>
        </>
    )
}

export default W1;