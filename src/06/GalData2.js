const GalData2 = ({ selData }) => {
  // console.log("gdata", selData)
  let dTag;
  // 글씨를 넣을 키값을 먼저 설정했다.
  let keys = ["galTitle",
    "galPhotographyLocation",
    "galPhotographer",
    "galPhotographyMonth",
    "galSearchKeyword"];

  // 글씨를 배치할 공간을 먼저 만들었다.
  dTag = keys.map((k) =>
    <li key={k}>
      <span className={k}>{selData[k]}</span>
    </li>
  );

  // unshift로 그림을 맨 위로 올려 주었다.
  dTag.unshift(
    <li key="galWebImageUrl">
      <span>
        <img className="galWebImageUrl" src={selData["galWebImageUrl"]}></img>
      </span>
    </li>
  )

  return (
    <>
      {/* 이곳에 바로 그림을 넣어도 될듯? */}
      <div className="gdata">
        <ul>{dTag}</ul>
      </div>
    </>
  );
}

export default GalData2;