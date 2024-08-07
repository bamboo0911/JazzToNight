import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ id, image, title, summary, date }) {
  return (
    <div className="article-card bg-white p-4 m-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{summary}</p>
        <p className="text-gray-600 mb-4">{date}</p>
        <Link className="text-accent hover:underline" to={`/articles/${id}`}>閱讀更多</Link>
      </div>
    </div>
  );
}

export default ArticleCard;
