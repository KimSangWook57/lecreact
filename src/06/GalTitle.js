const GalTitle = ({ gtitle, selTitle, setSelTitle }) => {

  let listTag = [...gtitle];

  const selectList = (i) => {
    console.log(i);
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