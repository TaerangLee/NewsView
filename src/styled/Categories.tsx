import styled from "styled-components";

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  } ;
`;

export interface CategoryProps {
  active?: boolean;
  onClick: () => void;
  children: string;
}

export const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export interface CategoryData {
  name: string;
  text: string;
}

interface CategoriesProps {
  onSelect: (category: string) => void;
  activeCategory: string;
  categories: CategoryData[];
}

const Categories = ({ onSelect, categories }: CategoriesProps) => {
  return (
    <CategoriesBlock>
      {categories.map((category) => (
        <Category
          key={category.name}
          // active={category.name === category.name}
          onClick={() => onSelect(category.name)}
        >
          {category.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
