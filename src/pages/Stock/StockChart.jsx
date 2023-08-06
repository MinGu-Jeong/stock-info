import axios from "axios";
import * as S from "./StockPage.style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default function StockChart({ stockData }) {
  const [stocksData, setStocksData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${
          import.meta.env.VITE_REACT_APP_STOCK_PRICE_API_KEY
        }&numOfRows=25&resultType=json&likeSrtnCd=${stockData?.srtnCd}`
      )
      .then((res) => {
        setStocksData(res.data.response.body.items.item);
      });
  }, [stockData]);

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: false,
        text: `${stockData?.itmsNm} 30일 주가`,
      },
    },
  };
  const labels = stocksData
    .map((item) => {
      const date = item.basDt;
      return `${date.substring(4, 6)}.${date.substring(6)}`;
    })
    .reverse();
  const data = {
    labels,
    datasets: [
      {
        data: stocksData.map((item) => item.clpr).reverse(),
        borderColor: "#9EC2EC",
        backgroundColor: "#FFF",
      },
    ],
  };
  return (
    <div>
      <S.StockChartContainer>
        <Line options={options} data={data} width="1000px" height="440px" />
      </S.StockChartContainer>
    </div>
  );
}
