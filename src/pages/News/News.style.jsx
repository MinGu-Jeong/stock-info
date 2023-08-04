import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f5f7;
  height: auto;
`;
export const ContentMargin = styled.div`
  padding-top: 50px;
  margin-top: 50px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const NewsContainer = styled.div`
  width: 1000px;
  height: auto;
  background-color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-left: 50px;
  border-radius: 10px;
`;

export const NewsWrapper = styled.div`
  border-bottom: 1px solid #000;
  width: 950px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: -50px;
  gap: 50px;
`;
export const NextPage = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid #303438;
  border-right: 25px solid transparent;
  border-top-left-radius: 3px;
  cursor: pointer;
  position: relative;
`;
export const PrevPage = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 25px solid #303438;
  border-left: 25px solid transparent;
  border-top-right-radius: 3px;
  cursor: pointer;
  position: relative;
`;
export const PrevPageDisabled = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 25px solid #929294;
  border-left: 25px solid transparent;
  border-top-right-radius: 3px;
  cursor: pointer;
  position: relative;
`;
export const PageNumber = styled.div`
  width: 15px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
