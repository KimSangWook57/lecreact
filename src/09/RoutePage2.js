import { useLocation } from 'react-router-dom';
import qs from 'query-string' ;

const RoutePage2 = () => {
    // 전달된 쿼리스트링을 useLocation의 search로 확인.
    let location = useLocation().search;
    console.log(location);
    // 쿼리스트링을 오브젝트로 변환.
    let item = qs.parse(location).item;
    console.log(item);

    const fruits = ['사과🍎','바나나🍌'];
    let tag = fruits.includes(item) ? "과일입니다." : "과일이 아닙니다." ;

    return (
        <>
            <h1>Page2</h1>
            <p>{`${item}은(는) ${tag}`}</p>
        </>
    );
}

export default RoutePage2;