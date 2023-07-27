import styled from "styled-components";

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StockListContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  width: 1350px;
  height: auto;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  background-color: #fff;
`;

export const StockSortContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 30px;
`;

export const StockSortItemSelect = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background-color: #2f3439;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StockSortItemDeselct = styled.div`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #d9d9d9;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StockItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1250px;
  height: 70px;
  border-bottom: 1px solid #000;
`;
export const StockItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StockItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
