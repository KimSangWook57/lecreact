import Wmenu from "./Wmenu";
import W1 from "./W1";
import W2 from "./W2";
import "./Weather.css";

import { Route, Routes } from "react-router-dom";

const Wmain = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<Wmenu />} />
                <Route path="/w1" element={<W1 />} />
                <Route path="/w2" element={<W2 />} />
            </Routes>
        </>
    )
}

export default Wmain;