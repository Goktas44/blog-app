import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  return (
    <div className="h-full">
      <Link href={`/article/${post.id}`} className="h-full">
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover:scale-105 overflow-hidden h-full flex flex-col"
        >
          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200"></div>
          <div className="p-6 flex-grow flex flex-col">
            <h4 className="text-xl font-semibold text-gray-900 mb-3 hover:text-amber-600 cursor-pointer">
              {post.title}
            </h4>
            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
              <div className="flex items-center space-x-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Card;
