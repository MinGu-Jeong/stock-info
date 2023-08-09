import { useEffect, useState } from "react";
import * as S from "./StockPage.style";
import axios from "axios";

export default function StockDetail({ stockId, stockData }) {
  return (
    <div>
      <S.StockDetailContainer>
        <S.StockDetailLeftWrapper>
          <S.StockId>{stockId}</S.StockId>
          <S.StockName>{stockData.itmsNm}</S.StockName>
          <S.StockPrice>{stockData.clpr}</S.StockPrice>
          <S.StockPercentChange isRising={stockData.fltRt > 0}>
            {stockData.fltRt}%
          </S.StockPercentChange>
        </S.StockDetailLeftWrapper>
        <S.StockDetailRightWrapper>
          <S.StockDetailWrapper>
            <S.StockInfo>전일</S.StockInfo>
            <S.StockInfoValue>{stockData.clpr - stockData.vs}</S.StockInfoValue>
          </S.StockDetailWrapper>
          <S.StockDetailWrapper>
            <S.StockInfo>거래량(억)</S.StockInfo>
            <S.StockInfoValue>
              {(parseInt(stockData.mrktTotAmt) / 100000000).toFixed(0)}
            </S.StockInfoValue>
          </S.StockDetailWrapper>
          <S.StockDetailWrapper>
            <S.StockInfo>시가</S.StockInfo>
            <S.StockInfoValue>{stockData.mkp}</S.StockInfoValue>
          </S.StockDetailWrapper>
          <S.StockDetailWrapper>
            <S.StockInfo>고가</S.StockInfo>
            <S.StockInfoValue>{stockData.hipr}</S.StockInfoValue>
          </S.StockDetailWrapper>
          <S.StockDetailWrapper>
            <S.StockInfo>저가</S.StockInfo>
            <S.StockInfoValue>{stockData.lopr}</S.StockInfoValue>
          </S.StockDetailWrapper>
        </S.StockDetailRightWrapper>
      </S.StockDetailContainer>
    </div>
  );
}
