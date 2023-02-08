//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

import Galm from "./Galm";
import galData from "../db/galdata.json";

const Gal = () => {
  // console.log(galData)

  // 사용할 데이터를 위치를 활용해서 가져오기.
  let item = galData.response.body.items.item;
  // console.log(item);

  // 화면 왼쪽(제목 버튼)에 담을 데이터.
  let gtitle = item.map((item) => item.galTitle);
  // console.log(gtitle);

  // 화면 오른쪽에 담을 데이터.
  let gdata = item;
  // console.log(gdata);


  return (
    <Galm gtitle={gtitle} gdata={gdata} />
  );
}

export default Gal;