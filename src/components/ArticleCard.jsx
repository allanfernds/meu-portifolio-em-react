import React from "react";

function ArticleCard({ description, title, theme, data, link }) {
  return (
    <div className="hadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40 max-w-3xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{data}</span>
        <a
          target="_blank"
          className="px-2 py-1 bg-indigo-600 text-gray-100 font-bold rounded hover:bg-indigo-500"
          href={link}
          rel="noreferrer"
        >
          {theme}
        </a>
      </div>
      <div className="mt-2">
        <a
          target="_blank"
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href={link}
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="mt-2 text-gray-600">{`${description}...`}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href={link}
          rel="noreferrer"
        >
          Ler mais
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
