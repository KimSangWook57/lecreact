import './Frcst.css';
import Frcheader from './Frcheader';
import Frccn from './Frccn';
import Frcdt from './Frcdt';
import { useState, useEffect } from 'react';

const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    const items = [
        {
        "frcstFourDt":"2023-02-05",
        "frcstThreeDt":"2023-02-04",
        "frcstTwoCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "gwthcnd":"2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
        "frcstTwoDt":"2023-02-03",
        "frcstFourCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstThreeCn":"서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
        "frcstOneDt":"2023-02-02",
        "frcstOneCn":"서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
        "presnatnDt":"2023-01-30"
        }
        ]

    // 2개의 배열 만들기.
    // 배열과 오브젝트를 선언한다.
    let frcdt = [];
    let frccn = [];
    let frcobj = {};

    let item = items[0];

    // 키값을 배열에 먼저 넣어준다.
    frcdt.push("frcstOneDt");
    frcdt.push("frcstTwoDt");
    frcdt.push("frcstThreeDt");
    frcdt.push("frcstFourDt");

    frccn.push("frcstOneCn");
    frccn.push("frcstTwoCn");
    frccn.push("frcstThreeCn");
    frccn.push("frcstFourCn");
    // 미리 지정해도 된다.
    // let frcdt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    // let frccn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    // map()을 쓰지 않는 예시.
    // let temp = [];
    // for(let k of frcdt) {
    //     temp.push(item[k]);
    // }
    // frcdt = temp;

    // map()을 사용해 키값 기준으로 순서대로 정렬된 배열을 만든 뒤, 기존의 배열에 결과값을 넣어 준다.
    frcdt = frcdt.map((k) => item[k]);
    frccn = frccn.map((k) => item[k]);
    
    // 일자별 예보 오브젝트 생성.
    // 배열.entries => idx 추출
    // frccn의 idx => 값 추출
    for(let [idx, k] of frcdt.entries()) {
        // console.log('idx=', idx, 'key(value)=', k, 'cnvalue=', frccn[idx]);
        frcobj[k] = frccn[idx];
    }

    // console.log(frcdt);
    // console.log(frccn);
    // console.log(frcobj);

    // dt를 바꾸는 함수를 속성값으로 보낸 것이다.
    let [dt, setDt] = useState();
    let [cn, setCn] = useState(frcobj["2023-02-02"]);
    // 하위 컴포넌트의 값을 상위 컴포넌트로 올리는 방법.
    useEffect(() => {
        console.log(frcobj[dt]);  // 이 값으로 바꿔주어야 한다.
        frcobj[dt] && setCn(frcobj[dt]);
        // if (!dt === undefined) {
        //     setCn(frcobj[dt]);
        // }
    }, [dt]);
    return (
         <>
            <Frcheader />
            <div className="main">
                <Frcdt frcdt={frcdt} setDt={setDt}/>
                {/* dt가 고정되어야 코드가 로딩된다. */}
                {dt && <Frccn dt={dt} cn={cn}/>}
            </div>
            
         </>
    ) ;
}

export default Frcst ;