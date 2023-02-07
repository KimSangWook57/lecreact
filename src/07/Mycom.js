import { useState, useEffect, useRef } from "react";

const Mycom = () => {

    // 태그
    const [tag, setTag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();

    // 컴포넌트가 렌더링되면 커서를 아이디 박스에 놓는다.
    useEffect(() => {
        txt1R.current.focus();
    }, []);

    // 내용 확인
    const checkForm = (e) => {
        e.preventDefault();  // 이벤트 물림 방지
        setTag(`임력된 아이디 = ${txt1R.current.value} / 입력된 비밀번호 = ${txt2R.current.value}`)
    }
    
    return (
        <>
            <form name="myform">
                <input ref={txt1R} type="text" name="txt1" placeholder="아이디 입력" />
                <input ref={txt2R} type="password" name="txt2" placeholder="비번 입력" />
                <input type="button" value="확인" onClick={checkForm}/>
                <input type="reset" value="취소" />
            </form>
            <div>
                {tag}
            </div>
        </>
    );
}

export default Mycom;