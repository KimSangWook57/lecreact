import Taccidentm from "./Taccidentm";

const Taccident = () => {
    const apiData = {
        "currentCount": 15,
        "data": [
            {
            "경상자수": "7488",
            "부상신고자수": "701",
            "사고건수": "17544",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "횡단중",
            "사망자수": "883",
            "중상자수": "9649"
            },
            {
            "경상자수": "1475",
            "부상신고자수": "161",
            "사고건수": "3059",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "차도통행중",
            "사망자수": "146",
            "중상자수": "1425"
            },
            {
            "경상자수": "1754",
            "부상신고자수": "202",
            "사고건수": "2872",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "길가장자리구역통행중",
            "사망자수": "80",
            "중상자수": "994"
            },
            {
            "경상자수": "1239",
            "부상신고자수": "121",
            "사고건수": "2188",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "보도통행중",
            "사망자수": "45",
            "중상자수": "1005"
            },
            {
            "경상자수": "13049",
            "부상신고자수": "1743",
            "사고건수": "24652",
            "사고유형_대분류": "차대사람",
            "사고유형_중분류": "기타",
            "사망자수": "689",
            "중상자수": "10584"
            },
            {
            "경상자수": "6506",
            "부상신고자수": "590",
            "사고건수": "5840",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "정면충돌",
            "사망자수": "259",
            "중상자수": "3991"
            },
            {
            "경상자수": "63749",
            "부상신고자수": "5446",
            "사고건수": "56935",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "측면충돌",
            "사망자수": "555",
            "중상자수": "23105"
            },
            {
            "경상자수": "61766",
            "부상신고자수": "4576",
            "사고건수": "43028",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "추돌",
            "사망자수": "504",
            "중상자수": "15068"
            },
            {
            "경상자수": "60009",
            "부상신고자수": "5793",
            "사고건수": "56378",
            "사고유형_대분류": "차대차",
            "사고유형_중분류": "기타",
            "사망자수": "596",
            "중상자수": "21548"
            },
            {
            "경상자수": "2572",
            "부상신고자수": "769",
            "사고건수": "4292",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "공작물충돌",
            "사망자수": "462",
            "중상자수": "2442"
            },
            {
            "경상자수": "369",
            "부상신고자수": "74",
            "사고건수": "673",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "도로이탈",
            "사망자수": "144",
            "중상자수": "457"
            },
            {
            "경상자수": "13",
            "부상신고자수": "5",
            "사고건수": "28",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "주/정차차량 충돌",
            "사망자수": "5",
            "중상자수": "15"
            },
            {
            "경상자수": "809",
            "부상신고자수": "353",
            "사고건수": "1558",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "전도전복",
            "사망자수": "226",
            "중상자수": "886"
            },
            {
            "경상자수": "2577",
            "부상신고자수": "541",
            "사고건수": "4503",
            "사고유형_대분류": "차량단독",
            "사고유형_중분류": "기타",
            "사망자수": "168",
            "중상자수": "1876"
            },
            {
            "경상자수": "0",
            "부상신고자수": "0",
            "사고건수": "2",
            "사고유형_대분류": "철길건널목",
            "사고유형_중분류": "기타",
            "사망자수": "0",
            "중상자수": "2"
            }
        ],
        "matchCount": 15,
        "page": 1,
        "perPage": 20,
        "totalCount": 15
    };
    
    // // 자바스크립트 object는 키와 값으로 분리 가능. 
    // let objK = Object.keys(apiData); // 배열
    // let objV = Object.values(apiData); // 배열
    // console.log("Object 키", objK);
    // console.log("Object 값", objV);

    // // 분해한 배열에 map과 filter를 쓸 수 있다.
    // // map 예시.
    // let newV;
    // newV = objK.map((k) => apiData[k])
    // console.log("새로운 배열", newV) // objV = newV

    // // map과 filter 예시.
    // let data;
    // // 1차 데이터 정제.
    // data = objK.filter((item) => item === 'data')
    // // 2차 데이터 정제.
    // data = data.map((k) => apiData[k])
    // console.log("필터로 데이터 추출", data)

    // // 오브젝트 키로 접근.
    // data = apiData.data;
    // console.log("오브젝트 키로 data 추출1", data)
    // data = apiData['data'];
    // console.log("오브젝트 키로 data 추출2", data)

    // // 대분류를 추출.
    // let c1 = data.map((item) => item.사고유형_대분류);
    // console.log("대분류 추출 1단계", c1);
    // c1 = [...new Set(c1)];
    // console.log("대분류 추출 2단계 / Set으로 중복 제거 및 Array로 변환.", c1);

    // // 중분류를 추출.
    // // case1
    // // let c2 = data.map((item) => 
    // //     (item.사고유형_대분류 + ',' +item.사고유형_중분류).split(',')
    // // );
    // // console.log("중분류 map으로 추출1", c2);

    // // case2
    // let c2 = data.map((item) => 
    //     [item.사고유형_대분류, item.사고유형_중분류]
    // );
    // console.log("중분류 map으로 추출2", c2);

    // // entries 예시.
    // for(let [k, v] of c2.entries()) {
    //     console.log("k", k, "\nv", v)
    // }

    // // 배열을 오브젝트로.
    // let c1_1 = data.map((item) => item.사고유형_대분류);
    // let c2_1 = data.map((item) => item.사고유형_중분류);
    // console.log(c1_1);
    // console.log(c2_1);
    // // 중분류로 대분류를 엮는다.
    // let cobj = {};
    // for(let [k, v] of c2_1.entries()) {
    //     cobj[v] = c1_1[k];
    // }
    // // 이 방법을 쓰면 기타 부분이 날아가게 된다.
    // console.log("cobj", cobj);

    // // 과제.
    // // {'차대사람' : ['횡단중', '차도통행중', '길가장자리구역통행중', '보도통행중', '기타']}
    // // {'차대차' : ['정면충돌', '측면충돌', '추돌', '기타']}
    // // {'차량단독' : ['공작물충돌', '도로이탈', '주/정차차량 충돌', '전도전복', '기타']}
    // // {'철길건널목' : ['기타']}
    
    let c1 = [];
    let c2 = [];
    let data = [];
    
    // 데이터 data => 배열 [{항목내용}, ...]
    // data = apiData.data;
    // console.log(data);

    // 대분류 c1 => 배열 [대분류1, ...]
    c1 = data.map((item) => item['사고유형_대분류']) // item.사고유형_대분류 ;
    // console.log(c1);
    // 중분류 c2 => 배열 [[대분류1, 중분류1], ...]
    // 교수님 예제.
    for(let item of data) {
      let temp = [];
      temp.push(item.사고유형_대분류, item.사고유형_중분류);
      c2.push(temp);
    }
    // 간단한 방법?


    // console.log(c2);

    // 중복 제거 코드
    c1 = [...new Set(c1)];
    // console.log(c1);
    
    return (
          <Taccidentm c1={c1} c2={c2} data={data}/>
    ) ;
}

export default Taccident ;