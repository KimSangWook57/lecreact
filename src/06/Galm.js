import GalHeader from "./GalHeader";
import GalData from "./GalData";
import GalTitle from "./GalTitle";
import "./Gal.css";
import { useState, useEffect } from 'react';

const Galm = ({ gtitle, gdata }) => {

	// console.log(gtitle);
	// console.log(gdata);

	// 선택된 제목을 저장.
	let [selTitle, setSelTitle] = useState();
	// 선택된 데이터를 저장.(오브젝트)
	let [selData, setSelData] = useState({});

	useEffect(() => {
		if (selTitle) {
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