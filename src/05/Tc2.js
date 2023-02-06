const Tc2 = ({selC2A, selC2, setSelC2}) => {

    // 중분류가 클릭되었을 때...
    const handleSelect  = (i) => {
        // console.log(i);
        setSelC2(i[1]);
    }

    // 중분류 화면 표시 태그.
    const c2Tag = selC2A.map((i) => 
        <div className={i[1] === selC2 ? "tcardSel" : "tcard"} onClick={() => handleSelect(i)} key={[...i]}>{i[1]}</div>
    )

    return (
        <div className="tc2">
            <h2>중분류</h2>
            {c2Tag}
        </div>
    );
}

export default Tc2;