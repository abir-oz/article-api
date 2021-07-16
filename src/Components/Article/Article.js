import React from "react";

const Article = ({ article }) => {
  const { title, description } = article;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Article;
