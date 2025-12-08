'use client';

import { useState, useEffect, use } from 'react';
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
  const { id } = use(params);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch the article data based on the ID
    // For now, we're using mock data.
    setTimeout(() => {
      setArticle(mockArticle);
      setLoading(false);
    }, 500);
  }, [id]);

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
    <div className="bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center text-amber-700 hover:text-amber-900 transition-colors font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Articles
        </button>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
          {/* Header Image */}
          <div className="h-72 w-full bg-gradient-to-r from-amber-400 to-orange-500 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="p-8 md:p-12">
            {/* Article Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm tracking-wide uppercase mb-4">
                <span>Technology</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-300 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{article.author}</p>
                    <p className="text-gray-500 text-sm">{article.date}</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none text-gray-700
                /* Headings */
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mt-8 [&>h3]:mb-3
                /* Paragraphs */
                [&>p]:leading-relaxed [&>p]:mb-6
                /* Lists */
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6
                [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-6
                /* Code Blocks */
                [&>pre]:bg-slate-900 [&>pre]:text-slate-50 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-8
                [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-sm
                /* Inline Code */
                [&>:not(pre)>code]:bg-gray-100 [&>:not(pre)>code]:text-amber-600 [&>:not(pre)>code]:px-1.5 [&>:not(pre)>code]:py-0.5 [&>:not(pre)>code]:rounded [&>:not(pre)>code]:font-medium
                /* Blockquotes */
                [&>blockquote]:border-l-4 [&>blockquote]:border-amber-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-6
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}