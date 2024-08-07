import React from 'react';
import { useParams } from 'react-router-dom';

const articleDetails = {
  '文章 1': {
    image: '/path/to/article1.jpg',
    title: '文章 1',
    date: '2023-10-01',
    content: '這是文章 1 的詳細內容。',
  },
  '文章 2': {
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
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.date}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
