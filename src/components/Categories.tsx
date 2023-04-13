import React from "react";
import styled from "styled-components";
import * as S from "../styled/Categories";

interface Category {
  name: string;
  text: string;
}

const categories: Category[] = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = (): JSX.Element => {
  return (
    <S.CategoriesBlock>
      {categories.map((c: Category) => (
        <S.Category key={c.name}>{c.text}</S.Category>
      ))}
    </S.CategoriesBlock>
  );
};

export default Categories;
