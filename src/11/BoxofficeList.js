import { useState, useEffect } from "react";

const BoxofficeList = ({ targetDt }) => {

    const [mvlist, setMvlist] = useState();

    // 맨 처음 렌더링이 시작되면...
    useEffect(() => {
        if (!targetDt) return;
        let apikey = '08eb39f2d6bb2f36c231cde06bc1dc33';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`

        console.log(url);
        fetch(url)
            .then((resp) => resp.json())
            // 데이터 처리.
            .then((data) => {
                console.log(data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch((err) => console.log(err))
    }, []);

    // useEffect(() => {

    //     setMvlist();

    // }, [mvList]);

    console.log(targetDt);

    return (
        <div>
            <div>{targetDt && mvlist}</div>
            <div>상세</div>
        </div>
    )
};
export default BoxofficeList;