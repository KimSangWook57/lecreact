const Tdata = ({selData}) => {

    // console.log("Tdata", selData);

    let dTag;
    
    if(Object.keys(selData).length > 0) {
    let keys = ["사고유형_대분류", "사고유형_중분류", "사고건수", "사망자수", "중상자수", "부상신고자수", "경상자수"]
    dTag = keys.map((k) => 
        <li key={k}>
            <span className="sp1">{k}</span>
            <span className="sp2">{k.includes("사고유형") ? selData[k] : parseInt(selData[k]).toLocaleString("ko-KR")}</span>
        </li>
    );
    dTag.push(
        <li key={'치명률'}>
            <span className="sp1_1">치명률</span>
            <span className="sp2_1">{Math.round(parseInt(selData["사망자수"]) / parseInt(selData["사고건수"]) * 100, 2)}%</span>
        </li>
    );
    }

    return (
        <div className="tdata">
            <h2>데이터</h2>
            <ul>
                {selData && dTag}
            </ul>
        </div>
    );
}

export default Tdata;