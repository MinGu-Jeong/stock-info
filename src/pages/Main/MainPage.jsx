import { styled } from "styled-components";
import MainIndex from "./MainIndex";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: auto;
  background: #f2f5f7;
  box-sizing: border-box;
`;
export default function Main() {
  return (
    <div>
      <MainContainer>
        <MainContent>
          <MainIndex />
          <Outlet />
        </MainContent>
      </MainContainer>
    </div>
  );
}
