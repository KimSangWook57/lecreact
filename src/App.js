import './App.css'; // css
// import Box from './02/Box';
// import Mydiv from './03/Mydiv';
// import Frcst from './04/Frcst';
// import Taccident from './05/Taccident';
// import Gal from './06/Gal';
// import GalSelect from './06/GalSelect';
// import Mycom from './07/Mycom';
// import Myform from './08/Myform';
// import RouteMain from './09/RouteMain';
// import Wmain from './10/Wmain';
// import Async from './11/Async';
import Boxoffice from './11/Boxoffice';
// post(비공개) 방식으로 날아가는 예시.
// import AIHubWiki from

import { BrowserRouter } from 'react-router-dom';

// 사용자 정의 태그는 반드시 대문자로 시작할 것.
// 앱은 반드시 리턴이 있어야 한다. return ();
// 2개 이상의 태그를 넣을 수는 없다.
// 넣고 싶다면 빈 태그를 넣자.
const App = () => {
  return (
    // <Box />
    // <Mydiv />
    // <Frcst /> 
    // <Taccident />
    // <Gal />
    // <GalSelect />
    // <Mycom />
    // <Myform />
    <BrowserRouter>
    {/* <RouteMain /> */}
    {/* <Wmain /> */}
    {/* <Async /> */}
    {/* <AIHubWiki /> */}
    <Boxoffice />
    </BrowserRouter>


  );
}

export default App;