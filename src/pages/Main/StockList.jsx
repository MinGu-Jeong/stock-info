import * as S from "./StockList.style";

export default function StockList() {
  return (
    <div>
      <S.ContainerCenter>
        <S.StockListContainer>
          <S.StockSortContainer>
            <S.StockSortItemSelect>시가총액</S.StockSortItemSelect>
            <S.StockSortItemDeselct>급상승</S.StockSortItemDeselct>
            <S.StockSortItemDeselct>급하락</S.StockSortItemDeselct>
            <S.StockSortItemDeselct>거래량</S.StockSortItemDeselct>
          </S.StockSortContainer>
          <S.StockItemContainer>
            <S.StockItemWrapper>
              <S.StockItem>종목명</S.StockItem>
              <S.StockItem>현재가</S.StockItem>
              <S.StockItem>등락률</S.StockItem>
              <S.StockItem>시가총액(억)</S.StockItem>
              <S.StockItem>MY 종목추가</S.StockItem>
            </S.StockItemWrapper>
            <S.StockItemWrapper>
              <S.StockItem>삼성전자</S.StockItem>
              <S.StockItem>71000</S.StockItem>
              <S.StockItem>+0.14%</S.StockItem>
              <S.StockItem>4262425</S.StockItem>
              <S.StockItem>추가</S.StockItem>
            </S.StockItemWrapper>
            <S.StockItemWrapper>
              <S.StockItem>LG에너지솔루션</S.StockItem>
              <S.StockItem>556000</S.StockItem>
              <S.StockItem>-0.75%</S.StockItem>
              <S.StockItem>1301040</S.StockItem>
              <S.StockItem>제거</S.StockItem>
            </S.StockItemWrapper>
          </S.StockItemContainer>
        </S.StockListContainer>
      </S.ContainerCenter>
    </div>
  );
}
