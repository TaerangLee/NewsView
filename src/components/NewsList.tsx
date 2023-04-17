import * as S from "../styled/NewsList";
import styled from "styled-components";
import NewsItem, { Article } from "./NewsItem"; // NewsItem 컴포넌트와 Article 인터페이스를 가져옵니다.
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "../styled/Categories";

interface NewsListProps {
  category?: string;
}

const NewsList = ({ category = "all" }: NewsListProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${
            category === "all" ? "" : `&category=${category}`
          }&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <S.NewsListBlock>대기 중...</S.NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <S.NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </S.NewsListBlock>
  );
};

export default NewsList;
