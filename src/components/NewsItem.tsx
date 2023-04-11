import React from "react";
import styled from "styled-components";
import * as S from "../styled/NewItem";

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}
// Article이라는 인터페이스 안에서 4가지의 속성을 가지게 되어 interface안에 정의를 하게 된다.

interface NewsItemProps {
  article: Article;
}
//NewsItemProps라는 인터페이스는 article속성은 Article 인터페이스에서 정의한 속성을 가진다.

const NewsItem: React.FC<NewsItemProps> = ({ article }) => {
  //NewsItemProps라는 interface를 가져오게 됨
  const { title, description, url, urlToImage } = article;
  return (
    <S.NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </S.NewsItemBlock>
  );
};

export default NewsItem;
