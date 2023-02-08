import GalHeader from "./GalHeader";
import GalData from "./GalData";
import GalTitle from "./GalTitle";
import "./Gal.css";
import { useState, useEffect, useRef } from 'react';

const Galm = ({ gtitle, gdata }) => {

	// console.log(gtitle);
	// console.log(gdata);

	// 선택된 제목을 저장.
	const [selTitle, setSelTitle] = useState();
	// 선택된 제목과 연결될 데이터를 저장. (오브젝트로 지정.)
	const [selData, setSelData] = useState({});
	// 텍스트 저장.
	const txtR1 = useRef();

	// 추출할 배열.
	// undefined 오류를 막기 위해 초기값으로 빈 배열을 넣는다.
	const [stxt1, setStxt1] = useState([]);

	const showli1 = () => {
		let temp = gtitle.filter((i) => i.includes(txtR1.current.value))
		// console.log(temp)
		setStxt1(temp);
		setSelTitle('')
	};

	// 프로그램이 실행되면 커서를 앞으로 보낸다.
	useEffect(() => {
		txtR1.current.focus();
	}, [])

	// 제목 값에 따라 데이터를 바꾸는 코드.
	// 제목이 선택되면 실행되도록 한다.
	useEffect(() => {
		if (selTitle) {
			// setSelData를 활용, 필터로 거른 뒤, .을 활용해 접근, 제목값을 비교하여 꺼낸다.
			setSelData(gdata.filter((i) => i.galTitle === selTitle)[0])
		}
	}, [selTitle]);

	return (
		<>
			<GalHeader />
			<div className="main">
				<div className="Lmain">
					<div className="selectbar">
						<form>
							<input ref={txtR1} type="text" name="txt1" onChange={showli1} />
							<button type="reset">취소</button>
						</form>
					</div>
					<GalTitle stxt1={stxt1} selTitle={selTitle} setSelTitle={setSelTitle} />
				</div>
				<div className="Rmain">
					{selData && <GalData selData={selData} />}
				</div>
			</div>
		</>
	);
}

export default Galm;