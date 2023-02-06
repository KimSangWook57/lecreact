const GalData = ({ selData }) => {
  console.log("gdata", selData)
  let dTag;
  let keys = ["galTitle",
    "galPhotographyLocation",
    "galPhotographer",
    "galPhotographyMonth",
    "galSearchKeyword"];

 
  dTag = keys.map((k) =>
    <li key={k}>
      <span className={k}>{selData[k]}</span>
    </li>
  );

  dTag.unshift(
    <li key="galWebImageUrl">
      <span>
        <img className="galWebImageUrl" src={selData["galWebImageUrl"]}></img>
      </span>
    </li>
  )

  return (
    <>
      <div className="gdata">
        <ul>{dTag}</ul>
      </div>
    </>
  );
}

export default GalData;