const Async = () => {
    // fetch 사용법.
    // 주소를 긁어온다.
    const url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214'
    // fetch에 주소값을 넣어준다.
    fetch(url)
    // 인수가 1개면 ()괄호가 생략될 수 있지만, 그 외에는 ()괄호를 써야 한다.
    .then((resp) => resp.json())  // Fulfilled라면...
    .then((data) => console.log(data))   // 받은 데이터를 찍는다.(오브젝트)
    .catch((err) => console.log(err))   // Rejected라면...

    // let p = fetch(url);
    // console.log(p);

    return(
        <>
        </>
    );
}
export default Async;