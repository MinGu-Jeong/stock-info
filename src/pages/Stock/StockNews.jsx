import { useEffect, useState } from "react";
import * as S from "../News/News.style";
import axios from "axios";

export default function StockNews({ stockData }) {
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
      <S.NewsContainer>
        <h1>{stockData?.itmsNm} 종목뉴스</h1>
        {newsData.map((news) => {
          return (
            <a
              key={news.link}
              href={news.link}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <S.NewsWrapper>
                <h2 dangerouslySetInnerHTML={{ __html: news.title }} />
                <p dangerouslySetInnerHTML={{ __html: news.description }} />
              </S.NewsWrapper>
            </a>
          );
        })}

        <S.PageWrapper>
          {page === 1 ? (
            <S.PrevPageDisabled />
          ) : (
            <S.PrevPage onClick={handlePrevPage} />
          )}
          <S.PageNumber>{Math.round(page / 10) + 1}</S.PageNumber>
          <S.NextPage onClick={handleNextPage} />
        </S.PageWrapper>
      </S.NewsContainer>
    </div>
  );
}
