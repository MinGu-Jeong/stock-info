import { useEffect, useState } from "react";
import * as S from "./StockList.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StockListFalling() {
  const navigate = useNavigate();
  const [itemShow, setItemShow] = useState(5);
  const handleShowMore = () => {
    setItemShow(itemShow + 5);
  };
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&numOfRows=5&pageNo=${itemShow / 5}&resultType=json&endFltRt=-20`
      );
      const data = res.data.response.body.items.item;
      data.map((stock) => {
        let fltRt = parseFloat(stock.fltRt);
        stock.fltRt =
          fltRt > 0 ? `+${fltRt.toFixed(2)}%` : `${fltRt.toFixed(2)}%`;
      });
      if (stockData.length === 0) {
        setStockData(data);
      } else setStockData((prevStockData) => [...prevStockData, ...data]);
    };
    getData();
  }, [itemShow]);

  return (
    <div>
      <S.ContainerCenter>
        <S.StockListContainer>
          <S.StockSortContainer>
            <S.StockSortItemDeselct onClick={() => navigate("/")}>
              시가총액
            </S.StockSortItemDeselct>
            <S.StockSortItemDeselct
              onClick={() => navigate("/stock-sortby-rising")}
            >
              급상승
            </S.StockSortItemDeselct>
            <S.StockSortItemSelect>급하락</S.StockSortItemSelect>
          </S.StockSortContainer>
          <S.StockItemContainer>
            <S.StockItemWrapper>
              <S.StockItem>종목명</S.StockItem>
              <S.StockItem>현재가</S.StockItem>
              <S.StockItem>등락률</S.StockItem>
              <S.StockItem>시가총액(억)</S.StockItem>
              <S.StockItem>MY 종목추가</S.StockItem>
            </S.StockItemWrapper>
            {stockData.map((stockItem, index) => (
              <S.StockItemWrapper
                key={index}
                onClick={() => navigate(`/stock?id=${stockItem?.srtnCd}`)}
              >
                <S.StockItem>{stockItem?.itmsNm}</S.StockItem>
                <S.StockItem>{stockItem?.clpr}</S.StockItem>
                <S.StockItem>
                  {parseFloat(stockItem?.fltRt) > 0 ? (
                    <S.StockItemPercentRise>
                      {stockItem?.fltRt}
                    </S.StockItemPercentRise>
                  ) : (
                    <S.StockItemPercentFall>
                      {stockItem?.fltRt}
                    </S.StockItemPercentFall>
                  )}
                </S.StockItem>
                <S.StockItem>
                  {(parseInt(stockItem?.mrktTotAmt) / 100000000).toFixed(0)}
                </S.StockItem>
                <S.StockItem>추가</S.StockItem>
              </S.StockItemWrapper>
            ))}

            <S.StockItemShowMore onClick={handleShowMore}>
              더보기
            </S.StockItemShowMore>
          </S.StockItemContainer>
        </S.StockListContainer>
      </S.ContainerCenter>
    </div>
  );
}
