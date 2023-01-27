const Boxmain = () => {
    const mvlist = [
    {"rnum":"1","rank":"1","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20190808","movieNm":"교섭","openDt":"2023-01-18","salesAmt":"355906586","salesShare":"18.8","salesInten":"-147956429","salesChange":"-29.4","salesAcc":"12600296336","audiCnt":"36622","audiInten":"-23326","audiChange":"-38.9","audiAcc":"1234442","scrnCnt":"945","showCnt":"3700"},
    {"rnum":"2","rank":"2","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20228555","movieNm":"더 퍼스트 슬램덩크","openDt":"2023-01-04","salesAmt":"305669122","salesShare":"16.1","salesInten":"-106843585","salesChange":"-25.9","salesAcc":"17301443212","audiCnt":"30127","audiInten":"-19053","audiChange":"-38.7","audiAcc":"1673520","scrnCnt":"794","showCnt":"2474"},
    {"rnum":"3","rank":"3","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20225061","movieNm":"아바타: 물의 길","openDt":"2022-12-14","salesAmt":"395604792","salesShare":"20.9","salesInten":"-158772970","salesChange":"-28.6","salesAcc":"128917076050","audiCnt":"28262","audiInten":"-14218","audiChange":"-33.5","audiAcc":"10171549","scrnCnt":"661","showCnt":"1588"},
    {"rnum":"4","rank":"4","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20229551","movieNm":"상견니","openDt":"2023-01-25","salesAmt":"196995521","salesShare":"10.4","salesInten":"-179431122","salesChange":"-47.7","salesAcc":"573422164","audiCnt":"19635","audiInten":"-25089","audiChange":"-56.1","audiAcc":"64359","scrnCnt":"675","showCnt":"2086"},
    {"rnum":"5","rank":"5","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229205","movieNm":"메간","openDt":"2023-01-25","salesAmt":"170788579","salesShare":"9.0","salesInten":"-46345424","salesChange":"-21.3","salesAcc":"390717582","audiCnt":"16955","audiInten":"-8684","audiChange":"-33.9","audiAcc":"42871","scrnCnt":"547","showCnt":"1669"},
    {"rnum":"6","rank":"6","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20214823","movieNm":"유령","openDt":"2023-01-18","salesAmt":"135407499","salesShare":"7.1","salesInten":"-41938529","salesChange":"-23.6","salesAcc":"4601480264","audiCnt":"13777","audiInten":"-7684","audiChange":"-35.8","audiAcc":"449528","scrnCnt":"724","showCnt":"1812"},
    {"rnum":"7","rank":"7","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20196478","movieNm":"영웅","openDt":"2022-12-21","salesAmt":"107470059","salesShare":"5.7","salesInten":"-32133825","salesChange":"-23","salesAcc":"29499625093","audiCnt":"11213","audiInten":"-5659","audiChange":"-33.5","audiAcc":"2987866","scrnCnt":"601","showCnt":"1118"},
    {"rnum":"8","rank":"8","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20224109","movieNm":"장화신은 고양이: 끝내주는 모험","openDt":"2023-01-04","salesAmt":"49033382","salesShare":"2.6","salesInten":"-64802","salesChange":"-0.1","salesAcc":"6738450897","audiCnt":"6084","audiInten":"632","audiChange":"11.6","audiAcc":"711506","scrnCnt":"332","showCnt":"409"},
    {"rnum":"9","rank":"9","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20228313","movieNm":"오늘 밤, 세계에서 이 사랑이 사라진다 해도","openDt":"2022-11-30","salesAmt":"49429844","salesShare":"2.6","salesInten":"-16882910","salesChange":"-25.5","salesAcc":"10112965111","audiCnt":"4868","audiInten":"-2184","audiChange":"-31","audiAcc":"980655","scrnCnt":"241","showCnt":"355"},
    {"rnum":"10","rank":"10","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20229518","movieNm":"천룡팔부: 교봉전","openDt":"2023-01-25","salesAmt":"15848197","salesShare":"0.8","salesInten":"-3804460","salesChange":"-19.4","salesAcc":"48516954","audiCnt":"1754","audiInten":"-482","audiChange":"-21.6","audiAcc":"5202","scrnCnt":"259","showCnt":"393"}
];

    // push를 10번 넣을 배열.
    let divTags = [];

    // 순위, 영화명, 매출액, 증감율만 찍기.
    // 키 리스트를 만들어서 정해진 것만 접근하기.
    const klist = ["rank", "movieNm", "salesAmt", "rankInten"]
    for(let item of mvlist) {
        // 임시 배열 생성.
        let temp = [];
        // case5(추천)
        // map은 리스트의 수만큼의 새로운 배열을 만든다.
        // k는 다른 것으로 넣어도 상관없고, 중괄호{}를 넣지 않아도 된다.
        
        // 백틱을 중괄호로 감싸주어야 한다. + 키값을 구분(영화고유코드)시켜 주어야 한다.
        temp = klist.map((k) => <span key={item.movieCd + k} className="col" id={`col${k}`}>{item[k]}</span>);
        
        divTags.push(<div key={item.movieCd} className="rowDiv">{temp}</div>)
        console.log(divTags);

        // case3
        // for(let k of klist) {
        //     console.log(k, item[k]);
        // }

        // case4 - Object의 경우
        // console.log(item.rank);
        // console.log(item.rankInten);
        // console.log(item.movieNm);
        // console.log(item.salesAmt);

        // 리스트 1차 정리.
        // 오브젝트의 엔트리로 키와 값을 쌍으로 가져오기.
        // for(let [k, v] of Object.entries(item)) { 
             
            // 조건이 맞는 키와 값 추출.
            // case1
            // if (k == "rank" || k == "rankInten" || k == "movieNm" || k = "salesAmt");

            // case2
            // if (klist.includes(k)) {
            //     console.log(k, v);
            // }
            
        // }
    }
    // 순위, 영화명, 관객수, 증감율 화면에 찍기.
    return (
        <div className="content">
            <div className="rowDiv">
                <span className="col" id="colrank">순위</span>
                <span className="col" id="colmovieNm">영화명</span>
                <span className="col" id="colsalesAmt">매출액</span>
                <span className="col" id="colrankInten">증감률</span>
            </div>
            {divTags}
        </div>
    );
}

export default Boxmain;