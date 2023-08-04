import Nav from "../../components/Nav";
import styled from "styled-components";
import * as S from "./News.style";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/search/news", {
        params: { query: "증시", start: page },
        headers: {
          "X-Naver-Client-Id": import.meta.env.VITE_REACT_APP_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": import.meta.env
            .VITE_REACT_APP_NAVER_CLIENT_SECRET,
        },
      })
      .then((res) => {
        setNewsData(res.data.items);
        console.log(res.data.items);
      });
  }, [page]);
  const handleNextPage = () => {
    setPage(page + 10);
  };
  const handlePrevPage = () => {
    setPage(page - 10);
    if (page <= 1) setPage(1);
  };
  return (
    <div>
      <S.FlexColumn>
        <Nav />
        <S.ContentMargin>
          <S.NewsContainer>
            <h1>증시 뉴스</h1>
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
              <S.PrevPage onClick={handlePrevPage} />
              <S.NextPage onClick={handleNextPage} />
            </S.PageWrapper>
          </S.NewsContainer>
        </S.ContentMargin>
      </S.FlexColumn>
    </div>
  );
}
