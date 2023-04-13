import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

interface AppProps {}

interface CategoriesProps {
  category: string;
  onSelect: (category: string) => void;
}

interface NewsListProps {
  category: string;
}

function App(props: AppProps) {
  const [category, setCategory] = useState<string>("all");
  const onSelect = useCallback((category: string) => {
    setCategory(category);
  }, []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
