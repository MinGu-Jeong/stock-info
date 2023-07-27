import { styled } from "styled-components";
import MainIndex from "./MainIndex";
import Nav from "../../components/Nav";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.div`
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  background: #f2f5f7;
  box-sizing: border-box;
`;
export default function Main() {
  return (
    <div>
      <MainContainer>
        <Nav />
        <MainContent>
          <MainIndex />
        </MainContent>
      </MainContainer>
    </div>
  );
}
