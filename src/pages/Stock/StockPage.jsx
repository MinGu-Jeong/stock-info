import { useEffect, useState } from "react";
import * as S from "./StockPage.style";
import * as N from "../News/News.style";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function StockPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stockId = params.get("id");
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&resultType=json&likeSrtnCd=${stockId}`
      )
      .then((res) => {
        setStockData(res.data.response.body.items.item[0]);
        let fltRt = parseFloat(res.data.response.body.items.item[0].fltRt);
        fltRt = fltRt.toFixed(2);
        res.data.response.body.items.item[0].fltRt =
          fltRt > 0 ? `+${fltRt}` : `${fltRt}`;
      });
  }, []);
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/search/news", {
        params: { query: `${stockData?.itmsNm}`, start: page, display: 5 },
        headers: {
          "X-Naver-Client-Id": import.meta.env.VITE_REACT_APP_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": import.meta.env
            .VITE_REACT_APP_NAVER_CLIENT_SECRET,
        },
      })
      .then((res) => {
        setNewsData(res.data.items);
      });
  }, [page, stockData]);
  const handleNextPage = () => {
    setPage(page + 5);
  };
  const handlePrevPage = () => {
    setPage(page - 5);
    if (page <= 1) setPage(1);
  };
  return (
    <div>
      <S.FlexColumn>
        <S.ContentMargin>
          <S.StockDetailContainer>
            <S.StockDetailLeftWrapper>
              <S.StockId>{stockId}</S.StockId>
              <S.StockName>{stockData?.itmsNm}</S.StockName>
              <S.StockPrice>{stockData?.clpr}</S.StockPrice>
              <S.StockPercentChange isRising={stockData?.fltRt > 0}>
                {stockData?.fltRt}%
              </S.StockPercentChange>
            </S.StockDetailLeftWrapper>
            <S.StockDetailRightWrapper>
              <S.StockDetailWrapper>
                <S.StockInfo>전일</S.StockInfo>
                <S.StockInfoValue>
                  {stockData?.clpr - stockData?.vs}
                </S.StockInfoValue>
              </S.StockDetailWrapper>
              <S.StockDetailWrapper>
                <S.StockInfo>거래량(억)</S.StockInfo>
                <S.StockInfoValue>
                  {(parseInt(stockData?.mrktTotAmt) / 100000000).toFixed(0)}
                </S.StockInfoValue>
              </S.StockDetailWrapper>
              <S.StockDetailWrapper>
                <S.StockInfo>시가</S.StockInfo>
                <S.StockInfoValue>{stockData?.mkp}</S.StockInfoValue>
              </S.StockDetailWrapper>
              <S.StockDetailWrapper>
                <S.StockInfo>고가</S.StockInfo>
                <S.StockInfoValue>{stockData?.hipr}</S.StockInfoValue>
              </S.StockDetailWrapper>
              <S.StockDetailWrapper>
                <S.StockInfo>저가</S.StockInfo>
                <S.StockInfoValue>{stockData.lopr}</S.StockInfoValue>
              </S.StockDetailWrapper>
            </S.StockDetailRightWrapper>
          </S.StockDetailContainer>
          <N.NewsContainer>
            <h1>{stockData?.itmsNm} 종목뉴스</h1>
            {newsData.map((news) => {
              return (
                <a
                  key={news.link}
                  href={news.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <N.NewsWrapper>
                    <h2 dangerouslySetInnerHTML={{ __html: news.title }} />
                    <p dangerouslySetInnerHTML={{ __html: news.description }} />
                  </N.NewsWrapper>
                </a>
              );
            })}

            <N.PageWrapper>
              {page === 1 ? (
                <N.PrevPageDisabled />
              ) : (
                <N.PrevPage onClick={handlePrevPage} />
              )}
              <N.PageNumber>{Math.round(page / 10) + 1}</N.PageNumber>
              <N.NextPage onClick={handleNextPage} />
            </N.PageWrapper>
          </N.NewsContainer>
        </S.ContentMargin>
      </S.FlexColumn>
    </div>
  );
}
