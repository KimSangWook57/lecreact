import "./Myform.css";
import { useState, useRef } from "react";

const Myform = () => {

    // 폼 연결
    const txt1R = useRef();
    const txt2R = useRef();
    const sel1R = useRef();

    // 화면 태그
    const [msgTag, setMsgTag] = useState();

    const formCheck = () => {
        // 아이디 확인 코드
        if (txt1R.current.value === "") {
            alert("아이디를 입력해 주세요.");
            txt1R.current.focus();
            return;
        }

        // 비밀번호 확인 코드
        if (txt2R.current.value === "") {
            alert("비밀번호를 입력해 주세요.");
            txt2R.current.focus();
            return;
        }

        // 입력완료
        setMsgTag(<p>
            아이디 <span>{txt1R.current.value}</span>의 선택과목은 <span>{sel1R.current.value}</span>입니다.
        </p>);
    }


    return (
        <>
            <form name="myform">
                <p>
                    <label htmlFor="txt1">아이디 : </label>
                    <input type="text" ref={txt1R} id="txt1" placeholder="아이디 입력" />
                </p>
                <p>
                    <label htmlFor="txt2">비밀번호 : </label>
                    <input type="password" ref={txt2R} id="txt2" placeholder="비밀번호 입력" />
                </p>
                <p>
                    <label htmlFor="txt3">선택과목 : </label>
                    <select ref={sel1R} defaultValue="자바스크립트">
                        <option value="자바">자바</option>
                        <option value="HTML">HTML</option>
                        <option value="자바스크립트">자바스크립트</option>
                        <option value="리액트">리액트</option>
                    </select>
                </p>
                <p>
                    <input type="button" className="button" value="확인" onClick={formCheck} />
                    <input type="reset" className="button" value="취소" />
                </p>
            </form>

            <div id="msg">
                {msgTag}
            </div>
        </>
    );
}

export default Myform;