import { useEffect, useState } from "react";
import * as S from "./Nav.style";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState("홈");
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(
      new Date().getMonth() + 1 + "월 " + new Date().getDate() + "일" + " 기준"
    );
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setMenu("홈");
      window.scrollTo(0, 0);
    } else if (currentPath === "/stock") {
      setMenu("주식");
    } else if (currentPath === "/news") {
      setMenu("뉴스");
    }
  }, [location]);

  return (
    <S.Nav>
      <S.NavTitle></S.NavTitle>
      {menu === "홈" ? (
        <S.NavMenuCurrent onClick={() => navigate("/")}>홈</S.NavMenuCurrent>
      ) : (
        <S.NavMenu onClick={() => navigate("/")}>홈</S.NavMenu>
      )}
      {menu === "주식" ? (
        <S.NavMenuCurrent onClick={() => navigate("/stock")}>
          주식
        </S.NavMenuCurrent>
      ) : (
        <S.NavMenu onClick={() => navigate("/stock")}>주식</S.NavMenu>
      )}
      <S.NavMenu>etf</S.NavMenu>
      {menu === "뉴스" ? (
        <S.NavMenuCurrent onClick={() => navigate("/news")}>
          뉴스
        </S.NavMenuCurrent>
      ) : (
        <S.NavMenu onClick={() => navigate("/news")}>뉴스</S.NavMenu>
      )}
      <S.NavMenu>MY</S.NavMenu>
      <S.NavAlarmDateContainer>
        <S.NavAlarm></S.NavAlarm>
        <S.NavDate>{date}</S.NavDate>
      </S.NavAlarmDateContainer>
    </S.Nav>
  );
}
