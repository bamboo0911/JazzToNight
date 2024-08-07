import React from 'react';
import { useParams } from 'react-router-dom';

const articleDetails = {
  '1': {
    image: '/path/to/article1.jpg',
    title: '文章 1',
    date: '2023-10-01',
    content: '這是文章 1 的詳細內容。',
  },
  '2': {
    image: '/path/to/article2.jpg',
    title: '文章 2',
    date: '2023-10-15',
    content: '這是文章 2 的詳細內容。',
  },
  // 添加更多文章的詳細介紹
};

function ArticleDetail() {
  const { id } = useParams();
  const article = articleDetails[id];

  if (!article) {
    return <div>文章未找到</div>;
  }

  return (
    <div className="article-detail p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-accent">{article.title}</h1>
      <img className="w-full h-96 object-cover rounded-lg mb-4" src={article.image} alt={article.title} />
      <p className="text-lg text-gray-700 mb-4">{article.date}</p>
      <p className="text-gray-600 mb-6">{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
