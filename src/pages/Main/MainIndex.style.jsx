import { styled } from "styled-components";

export const IndexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 50px;
`;

export const IndexItemWrapper = styled.div`
  width: 300px;
  height: 180px;
  background-color: #fff;
  border: 0px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IndexItemTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const IndexItemPointRise = styled.span`
  color: #da4841;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const IndexItemPointFall = styled.span`
  color: #377beb;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const IndexItemPercentRise = styled.span`
  color: #da4841;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const IndexItemPercentFall = styled.span`
  color: #377beb;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
