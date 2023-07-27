import * as S from "./Nav.style";
import Swiper from "swiper";

export default function Nav() {
  const date =
    new Date().getMonth() + 1 + "월 " + new Date().getDate() + "일" + " 기준";
  return (
    <S.Nav>
      <S.NavTitle>타이틀 위치</S.NavTitle>
      <S.NavMenuCurrent>홈</S.NavMenuCurrent>
      <S.NavMenu>주식</S.NavMenu>
      <S.NavMenu>etf</S.NavMenu>
      <S.NavMenu>뉴스</S.NavMenu>
      <S.NavMenu>MY</S.NavMenu>
      <S.NavAlarmDateContainer>
        <S.NavAlarm>알람발생 위치</S.NavAlarm>
        <S.NavDate>{date}</S.NavDate>
      </S.NavAlarmDateContainer>
    </S.Nav>
  );
}
