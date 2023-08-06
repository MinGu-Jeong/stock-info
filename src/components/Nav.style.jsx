import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #fff;
  gap: 50px;
`;
export const NavTitle = styled.div`
  width: 200px;
  height: 100px;
  background-color: #fff;
`;
export const NavMenuCurrent = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #929294;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
export const NavAlarmDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavAlarm = styled.div`
  margin-left: 100px;
  width: 250px;
  height: 80px;
  text-align: center;
`;
export const NavDate = styled.div`
  font-size: 15px;
  text-align: center;
`;
