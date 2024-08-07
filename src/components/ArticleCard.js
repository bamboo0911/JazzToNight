import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ image, title, summary, date }) {
  return (
    <div className="article-card bg-white p-4 m-4 rounded shadow-lg">
      <img className="rounded mb-4" src={image} alt={title} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{summary}</p>
      <p className="text-gray-600 mb-4">{date}</p>
      <Link className="text-blue-500 hover:underline" to={`/articles/${title}`}>閱讀更多</Link>
    </div>
  );
}

export default ArticleCard;
