import React from 'react';
import ArticleCard from '../components/ArticleCard';

function Articles() {
  const articles = [
    { image: 'article1.jpg', title: '文章標題 1', summary: '摘要 1', date: '2024-08-01' },
    { image: 'article2.jpg', title: '文章標題 2', summary: '摘要 2', date: '2024-08-02' },
    // 更多的測試數據...
  ];

  return (
    <div className="articles p-4">
      <h2 className="text-center text-4xl mb-4 text-accent">文章</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
