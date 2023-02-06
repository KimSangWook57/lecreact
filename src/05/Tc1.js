const Tc1 = ({c1, selC1, setSelC1}) => {

    let c1Tag = [...c1];

    // 대분류가 클릭되었을 때...
    const handleSelect  = (i) => {
        setSelC1(i);
    }

    // 대분류 화면 표시 태그.
    c1Tag = c1Tag.map((i) =>
        <div className={i === selC1 ? "tcardSel" : "tcard"} onClick={() => handleSelect(i)} key={i}>{i}</div>
    );

    return (
        <div className="tc1">
            <h2>대분류</h2> 
            {c1Tag}
        </div>
    );
}

export default Tc1;