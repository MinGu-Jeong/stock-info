import { useEffect, useState } from "react";
import * as S from "./StockList.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StockList() {
  const marketCapTopList = [
    "삼성전자",
    "LG에너지솔루션",
    "SK하이닉스",
    "삼성바이오로직스",
    "POSCO홀딩스",
    "삼성전자우",
    "LG화학",
    "삼성SDI",
    "현대차",
    "포스코퓨처엠",
    "NAVER",
    "기아",
    "카카오",
    "현대모비스",
    "셀트리온",
    "KB금융",
    "삼성물산",
    "SK이노베이션",
    "신한지주",
    "LG전자",
    "포스코인터내셔널",
    "카카오뱅크",
    "삼성생명",
    "LG",
    "한국전력",
    "HD현대중공업",
    "하나금융지주",
    "SK",
    "KT&G",
    "삼성전기",
    "삼성화재",
    "두산에너빌리티",
    "삼성에스디에스",
    "한화오션",
    "하이브",
    "메리츠금융지주",
    "SK텔레콤",
    "고려아연",
    "대한항공",
    "HMM",
    "금양",
  ];

  const navigate = useNavigate();
  const [itemShow, setItemShow] = useState(5);
  const handleShowMore = () => {
    setItemShow(itemShow + 5);
  };
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const promises = marketCapTopList
        .slice(0, itemShow)
        .map((stockName) =>
          axios.get(
            `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${
              import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
            }&resultType=json&itmsNm=${stockName}`
          )
        );
      const response = await Promise.all(promises);
      const data = response.map((res) => {
        const item = res.data.response.body.items.item[0];
        let fltRt = parseFloat(item.fltRt);
        fltRt = fltRt.toFixed(2);
        item.fltRt = fltRt > 0 ? `+${fltRt}%` : `${fltRt}%`;
        return item;
      });
      setStockData([...data]);
    };
    getData();
  }, [itemShow]);

  return (
    <div>
      <S.ContainerCenter>
        <S.StockListContainer>
          <S.StockSortContainer>
            <S.StockSortItemSelect>시가총액</S.StockSortItemSelect>
            <S.StockSortItemDeselct
              onClick={() => navigate("/stock-sortby-rising")}
            >
              급상승
            </S.StockSortItemDeselct>
            <S.StockSortItemDeselct
              onClick={() => navigate("/stock-sortby-falling")}
            >
              급하락
            </S.StockSortItemDeselct>
          </S.StockSortContainer>
          <S.StockItemContainer>
            <S.StockItemWrapper>
              <S.StockItem>종목명</S.StockItem>
              <S.StockItem>현재가</S.StockItem>
              <S.StockItem>등락률</S.StockItem>
              <S.StockItem>시가총액(억)</S.StockItem>
              <S.StockItem>MY 종목추가</S.StockItem>
            </S.StockItemWrapper>
            {marketCapTopList.slice(0, itemShow).map((itemName, index) => {
              const stockItem = stockData[index];
              return (
                <S.StockItemWrapper key={index}>
                  <S.StockItem>{itemName}</S.StockItem>
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
              );
            })}
            <S.StockItemShowMore onClick={handleShowMore}>
              더보기
            </S.StockItemShowMore>
          </S.StockItemContainer>
        </S.StockListContainer>
      </S.ContainerCenter>
    </div>
  );
}
