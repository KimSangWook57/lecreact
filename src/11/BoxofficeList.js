import { useState, useEffect } from "react";
import BoxOfficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({ targetDt }) => {

    const [mvlist, setMvlist] = useState();
    const [mvcd, setMvcd] = useState();

    // 영화 클릭
    const showDetail = (movieCd) => {
        // 코드에 해당하는 데이터를 fetch해서 들고 온다.
        // console.log(movieCd)
        setMvcd(movieCd);
    }

    // 재렌더링은 변수가 바뀌는 순간!
    useEffect(() => {
        let apikey = '08eb39f2d6bb2f36c231cde06bc1dc33';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${apikey}&`;
        url = url + `targetDt=${targetDt}`;

        console.log(url);
        fetch(url)
            .then((resp) => resp.json())
            // 데이터 처리.
            .then((data) => {
                console.log(data.boxOfficeResult.dailyBoxOfficeList);
                let temp = data.boxOfficeResult.dailyBoxOfficeList;
                // 바로 집어넣기.
                setMvlist(
                    temp.map((item) =>
                        <div className="rowDiv1" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                            <span className="col1" id="colrank">{item.rank}</span>
                            <span className="col2" id="colmovieNm">{item.movieNm}</span>
                            <span className="col3" id="colaudiCnt">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span>
                        </div>
                    )
                )
                // return 형태를 사용하는 방법.
                // let t = temp.map((item) => {
                //     return(<div className="rowDiv1">
                //         <span className="col1" id="colrank">{item.rank}</span>
                //         <span className="col2" id="colmovieNm">{item.movieNm}</span>
                //         <span className="col3" id="colaudiCnt">{item.audiCnt}</span>
                //     </div>)

                // })
                // setMvlist(t);
            })
            .catch((err) => console.log(err))
    }, [targetDt]);

    // useEffect(() => {

    //     setMvlist();

    // }, [mvList]);

    // console.log(targetDt);

    return (

        <div className="mvcontent">
            <div className="mvrowtitle01">
                <span className="col0">순위</span>
                <span className="col0">영화명</span>
                <span className="col0">관객수</span>
            </div>
            {mvlist}
            <div>
                {mvcd && <BoxOfficeDetail mvcd={mvcd} />}
            </div>
        </div>


    )
};
export default BoxofficeList;