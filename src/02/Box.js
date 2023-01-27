import Boxheader from "./Boxheader";
import Boxmain from "./Boxmain";
import './Box.css'; // css를 한번에 적용시킬 수 있다.

const Box = () => {

    return (

        <div>
            <Boxheader />
            <Boxmain />
        </div>
    );
}

export default Box;