import { useState, useEffect } from "react";

const BoxOfficeDetail = ({ mvcd }) => {
    console.log(mvcd);
    const [mTag, setMTag] = useState();

    const getData = async () => {
        let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&`;
        url = url + `movieCd=${mvcd}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            console.log("url", url)
            // 오브젝트는 map을 쓸 수 없다.
            let temp = data.movieInfoResult.movieInfo;
            let keys = {
                '영문명': 'movieNmEn',
                '개봉일': 'openDt',
                '제작상태': 'prdtStatNm',
                '영화형태': 'typeNm',
                '감독': 'directors'
            }

            // 감독 정보를 어떻게 꺼낼 것인가?
            if (mvcd) {
                let tag = []
                for (let [k, v] of Object.entries(keys)) {
                    // 감독은 좀 더 들어가서 정보를 찾아야 한다.
                    if (k === "감독") {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                            <span className="dtsp2">{temp[v][0].peopleNm}</span>
                        </div>)
                    }
                    // 그 외에는...
                    else {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                            <span className="dtsp2">{temp[v]}</span>
                        </div>)
                    }

                };
                setMTag(tag);
            }

        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {

        getData();
        console.log(mvcd)

    }, [mvcd]);


    return (
        <>
            {mvcd && mTag}
        </>
    );
}

export default BoxOfficeDetail;