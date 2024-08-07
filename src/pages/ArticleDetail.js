import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { title } = useParams();
  const article = {
    image: 'article1.jpg', 
    title: '文章標題 1', 
    summary: '摘要 1', 
    date: '2024-08-01',
    content: '這是文章的詳細內容...'
  };

  return (
    <div className="article-detail p-4 max-w-4xl mx-auto">
      <img className="w-full h-60 object-cover rounded-lg mb-4" src={`/images/${article.image}`} alt={article.title} />
      <h2 className="text-4xl font-semibold mb-4 text-accent">{article.title}</h2>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{article.date}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{article.summary}</p>
      <div className="content text-gray-600 dark:text-gray-300">
        {article.content}
      </div>
    </div>
  );
}

export default ArticleDetail;
