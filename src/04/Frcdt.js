// probs를 주지 않는 방법.
// 입력값에 직접 {}을 지정해 준다.
const Frcdt = ({dt, setDt}) => {

    let dtdiv1Tag = [...dt];
    // console.log("setDt= ", setDt)  //function 형태.

    const show  = (v) => {
        // console.log(v);
        setDt(v);
    }

    dtdiv1Tag = dtdiv1Tag.map((v) => 
        <div className="dtdiv1" onClick={() => show(v)} key={v}>{v}</div>
    );

    // console.log(dtdiv1Tag);
    return (
        <div className="mainbox1">
            {dtdiv1Tag}
        </div>
    );
}

export default Frcdt ;