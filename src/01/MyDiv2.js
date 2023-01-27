

const MyDiv2 = () => {
    const myName = '김상욱';
    const myGit = 'https://github.com/KimSangWook57'
    return (
      <div>
        <p>{myName}입니다.</p>
        <p>GitHub 주소 : <a href={myGit}>{myGit}</a></p>
      </div>
    );
  }
  
  export default MyDiv2;