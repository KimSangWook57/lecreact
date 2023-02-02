import Mydiv21 from "./Mydiv21";

const Mydiv2 = ({rname, n}) => {
    // console.log(probs);
    const user = rname;
    return (
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {user} {n}</h2>
            <Mydiv21 user={user} divname={n}/>
        </div>     
    );
}

export default Mydiv2;