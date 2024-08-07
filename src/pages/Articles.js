import React from 'react';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    image: '/path/to/article1.jpg',
    title: '文章 1',
    summary: '這是文章 1 的簡介。',
    date: '2023-10-01',
  },
  {
    image: '/path/to/article2.jpg',
    title: '文章 2',
    summary: '這是文章 2 的簡介。',
    date: '2023-10-15',
  },
  // 添加更多文章
];

function Articles() {
  return (
    <div className="articles">
      <h1>文章列表</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            title={article.title}
            summary={article.summary}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Articles;
