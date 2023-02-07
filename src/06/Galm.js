import GalHeader from "./GalHeader";
import GalData from "./GalData";
import GalTitle from "./GalTitle";
import "./Gal.css";
import { useState, useEffect } from 'react';

const Galm = ({ gtitle, gdata }) => {

	// console.log(gtitle);
	// console.log(gdata);

	// 선택된 제목을 저장.
	const [selTitle, setSelTitle] = useState();
	// 선택된 제목과 연결될 데이터를 저장. (오브젝트로 지정.)
	const [selData, setSelData] = useState({});

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
				<GalTitle gtitle={gtitle} selTitle={selTitle} setSelTitle={setSelTitle} />
				{selData && <GalData selData={selData} />}
			</div>
		</>
	);
}

export default Galm;