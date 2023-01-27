import logo from './logo.svg'; // 로고 가져오기
import './App.css'; // css

// 사용자 정의 태그는 반드시 대문자로 시작할 것.
const App = () => {
  // 앱은 반드시 리턴이 있어야 한다. return ();
  return (
    // 2개 이상의 태그를 넣을 수는 없다.
    // 넣고 싶다면 빈 태그를 넣자.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
