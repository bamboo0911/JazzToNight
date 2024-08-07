import React from 'react';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    id: '1',
    image: '/path/to/article1.jpg',
    title: '文章 1',
    summary: '這是文章 1 的簡介。',
    date: '2023-10-01',
  },
  {
    id: '2',
    image: '/path/to/article2.jpg',
    title: '文章 2',
    summary: '這是文章 2 的簡介。',
    date: '2023-10-15',
  },
  // 添加更多文章
];

function Articles() {
  return (
    <div className="articles p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-accent">文章列表</h1>
      <div className="articles-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            id={article.id}
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
