import { useEffect, useState } from "react";
import * as S from "./StockPage.style";
import { useLocation } from "react-router-dom";
import axios from "axios";
import StockDetail from "./StockDetail";
import StockNews from "./StockNews";
import StockChart from "./StockChart";
import Loading from "../../styles/Loading";
export default function StockPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stockId = params.get("id");
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&resultType=json&likeSrtnCd=${stockId}`
      )
      .then((res) => {
        let fltRt = parseFloat(res.data.response.body.items.item[0].fltRt);
        fltRt = fltRt.toFixed(2);
        res.data.response.body.items.item[0].fltRt =
          fltRt > 0 ? `+${fltRt}` : `${fltRt}`;
        setStockData(res.data.response.body.items.item[0]);
      });
  }, []);
  return (
    <div>
      <S.FlexColumn>
        <S.ContentMargin>
          {stockData ? (
            <>
              <StockDetail stockId={stockId} stockData={stockData} />
              <StockChart stockData={stockData} />
              <StockNews stockData={stockData} />
            </>
          ) : (
            <S.LoadingBackground>
              <Loading />
            </S.LoadingBackground>
          )}
        </S.ContentMargin>
      </S.FlexColumn>
    </div>
  );
}
