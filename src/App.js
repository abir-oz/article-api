import React from "react";
import Article from "./Components/Article/Article";

const App = () => {
  const [articles, setArticles] = React.useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=4757c61c88494ecea51d50a327b16f07";

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data?.articles));
  }, []);

  return (
    <div>
      <h1>Total Article: {articles?.length}</h1>
      {articles.map((article, index) => (
        <Article article={article} key={index + 1} />
      ))}
    </div>
  );
};

export default App;
