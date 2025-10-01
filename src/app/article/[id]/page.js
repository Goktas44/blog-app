'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mock data for demonstration
const mockArticle = {
  id: 1,
  title: "Getting Started with Next.js 15",
  excerpt: "Learn how to build modern web applications with the latest features in Next.js 15.",
  date: "2024-03-15",
  author: "John Doe",
  readTime: "5 min read",
  content: `
    <p>Next.js 15 brings exciting new features and improvements to the React framework. In this article, we'll explore how to get started with the latest version.</p>
    
    <h2>New Features in Next.js 15</h2>
    <p>Next.js 15 introduces several enhancements including improved performance, better developer experience, and new APIs.</p>
    
    <h3>Performance Improvements</h3>
    <p>The new version includes optimizations that make your applications faster and more efficient.</p>
    
    <h3>Developer Experience</h3>
    <p>With better error messages and enhanced tooling, developing Next.js applications is now more enjoyable than ever.</p>
    
    <h2>Getting Started</h2>
    <p>To create a new Next.js 15 application, run the following command:</p>
    <pre><code>npx create-next-app@latest</code></pre>
    
    <p>This will set up a new Next.js project with the latest features pre-configured.</p>
  `
};

export default function ArticlePage({ params }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch the article data based on the ID
    // For now, we're using mock data
    setTimeout(() => {
      setArticle(mockArticle);
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <div className="bg-amber-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-amber-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">Article not found.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => router.back()}
          className="mb-6 flex items-center text-amber-600 hover:text-amber-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Articles
        </button>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200"></div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-2">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <span>{article.readTime}</span>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}