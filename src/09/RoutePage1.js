import { useParams } from "react-router-dom";

const RoutePage1 = () => {

    const item = useParams().item;
    // console.log("p1 item", item)

    const fruits = ['ì¬ê³¼ð','ë°ëëð'];

    // case 1 (ifë¬¸ ì¬ì©)
    // let tag;
    // if (fruits.includes(item)) tag = "ê³¼ì¼ìëë¤."
    // else tag = "ê³¼ì¼ì´ ìëëë¤."

    // case 2 (ì¼í­ì°ì°ì)
    let tag = fruits.includes(item) ? "ê³¼ì¼ìëë¤." : "ê³¼ì¼ì´ ìëëë¤." ;
    
    return (
        <>
            <h1>Page1</h1>
            <p>{`${item}ì(ë) ${tag}`}</p>
        </>
    );
}

export default RoutePage1;