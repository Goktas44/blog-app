'use client';

import { useState, useEffect, useMemo } from 'react';
import Card from '../../components/ui/Card';
import getAllBlog from '../../services/blogS/getAllBlog';
import { mockBlogs } from '@/data/blogs';

export default function ArticlePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Date");
  const [selectedReadTime, setSelectedReadTime] = useState("All Time");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getAllBlog();
        setPosts(data);
        setUsingMockData(false);
      } catch (err) {
        // API başarısız olursa mock data kullan
        console.log("API failed, using mock data:", err.message);
        setPosts(mockBlogs);
        setUsingMockData(true);
        setError(null); // Hata gösterme, mock data var
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Get unique categories from posts
  const categories = useMemo(() => {
    const cats = [...new Set(posts.map(post => post.category).filter(Boolean))];
    return ["All Categories", ...cats];
  }, [posts]);

  // Filtered and sorted posts
  const filteredAndSortedPosts = useMemo(() => {
    return posts
      .filter((post) => {
        // Search Filter
        const matchesSearch =
          post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

        // Category Filter
        const matchesCategory =
          selectedCategory === "All Categories" ||
          post.category === selectedCategory;

        // Read Time Filter
        const readTimeMinutes = parseInt(post.readTime) || 0;
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
          return (a.title || "").localeCompare(b.title || "");
        } else if (sortBy === "Author") {
          return (a.author || "").localeCompare(b.author || "");
        }
        return 0;
      });
  }, [posts, searchQuery, selectedCategory, sortBy, selectedReadTime]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Articles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest articles, insights, and stories
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest articles, insights, and stories from our community
          </p>
          {usingMockData && (
            <p className="text-sm text-amber-600 mt-2">
              📝 Demo modunda çalışıyor (Mock data)
            </p>
          )}
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Search articles..."
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
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map((post) => (
              <Card key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No articles found matching your criteria.
            </div>
          )}
        </div>

        {/* Article Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">{posts.length}+</h3>
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
}