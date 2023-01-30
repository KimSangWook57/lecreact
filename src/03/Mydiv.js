import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css'

const Mydiv = () => {
    const rname = 'React!!'
    return (
        <div className="content">
            <div className="header">
                {/* 변수명을 중괄호로 넣는다. */}
                <h1>probs 예제 - {rname}</h1> 
            </div>
            <div className="main">
                <Mydiv1 user={rname} />
                <Mydiv2 user={rname} />
            </div>
        </div>
    );
}

export default Mydiv;