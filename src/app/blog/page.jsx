"use client";

import { useState, useMemo } from "react";
import Card from "../../components/ui/Card";

// Mock data for design purposes
const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with the latest features of Next.js 15, including the new App Router and server components.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover advanced techniques for styling your applications with Tailwind CSS and create beautiful, responsive designs.",
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Design",
  },
  {
    id: 3,
    title: "React Best Practices 2024",
    excerpt:
      "Explore the latest best practices for React development, including hooks, performance optimization, and component architecture.",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Development",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    excerpt:
      "Learn how to create mobile-first responsive layouts that work perfectly across all devices and screen sizes.",
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Design",
  },
  {
    id: 5,
    title: "State Management in React",
    excerpt:
      "Compare different state management solutions for React applications and choose the right one for your project.",
    author: "David Brown",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Development",
  },
  {
    id: 6,
    title: "Modern JavaScript Features",
    excerpt:
      "Stay up-to-date with the latest JavaScript features and how to use them effectively in your development workflow.",
    author: "Emily Davis",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Technology",
  },
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Date");
  const [selectedReadTime, setSelectedReadTime] = useState("All Time");

  const filteredAndSortedBlogs = useMemo(() => {
    return mockBlogs
      .filter((post) => {
        // Search Filter
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

        // Category Filter
        const matchesCategory =
          selectedCategory === "All Categories" ||
          post.category === selectedCategory;

        // Read Time Filter
        // Extract number from "X min read"
        const readTimeMinutes = parseInt(post.readTime);
        let matchesReadTime = true;

        if (selectedReadTime === "< 5 min") {
          matchesReadTime = readTimeMinutes < 5;
        } else if (selectedReadTime === "5-8 min") {
          matchesReadTime = readTimeMinutes >= 5 && readTimeMinutes <= 8;
        } else if (selectedReadTime === "> 8 min") {
          matchesReadTime = readTimeMinutes > 8;
        }

        return matchesSearch && matchesCategory && matchesReadTime;
      })
      .sort((a, b) => {
        if (sortBy === "Date") {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else if (sortBy === "Title") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "Author") {
          return a.author.localeCompare(b.author);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy, selectedReadTime]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest articles, insights, and stories from our
            community
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            >
              <option>All Categories</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Development</option>
            </select>

            <select
              value={selectedReadTime}
              onChange={(e) => setSelectedReadTime(e.target.value)}
              className="px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            >
              <option>All Time</option>
              <option>&lt; 5 min</option>
              <option>5-8 min</option>
              <option>&gt; 8 min</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            >
              <option value="Date">Sort by Date</option>
              <option value="Title">Sort by Title</option>
              <option value="Author">Sort by Author</option>
            </select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedBlogs.length > 0 ? (
            filteredAndSortedBlogs.map((post) => (
              <Card key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No posts found matching your criteria.
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium hover:scale-102 transform">
            Load More Posts
          </button>
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">150+</h3>
              <p className="text-gray-600">Published Articles</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">50K+</h3>
              <p className="text-gray-600">Monthly Readers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">25+</h3>
              <p className="text-gray-600">Expert Writers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
