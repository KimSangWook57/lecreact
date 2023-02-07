const GalTitle = ({ gtitle, selTitle, setSelTitle }) => {

  let listTag = [...gtitle];

  // 제목을 클릭하면 선택된 제목으로 값이 바뀌게 된다.
  const selectList = (i) => {
    // console.log("selTitle", i);
    setSelTitle(i);
  }

  // 화면 표시 태그.
  listTag = listTag.map((i) =>
    <div className={i === selTitle ? "glistSel" : "glist"} onClick={() => selectList(i)} key={i}>{i}</div>
  );


  return (
    <>
      <div className="gtitle">
        {listTag}
      </div>
    </>
  );
}

export default GalTitle;