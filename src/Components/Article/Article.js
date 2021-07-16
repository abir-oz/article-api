import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
};

export default Article;
