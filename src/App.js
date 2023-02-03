import './App.css'; // css
// import Box from './02/Box';
//import Mydiv from './03/Mydiv';
// import Frcst from './04/Frcst';
import Taccident from './05/Taccident';

// 사용자 정의 태그는 반드시 대문자로 시작할 것.
// 앱은 반드시 리턴이 있어야 한다. return ();
// 2개 이상의 태그를 넣을 수는 없다.
// 넣고 싶다면 빈 태그를 넣자.
const App = () => {
  return (
    // <Box />
    // <Mydiv />
    // <Frcst /> 
    <Taccident />
  );
}

export default App;