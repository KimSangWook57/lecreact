import { Link } from "react-router-dom";

const Wheader = ({ title }) => {

    return (
        <>
            <div className="header">
                <h1>{title}</h1>
                <div className="whdiv">
                    <Link to="/">⏫메인으로 이동</Link>
                </div>
            </div>
        </>
    )
}

export default Wheader;