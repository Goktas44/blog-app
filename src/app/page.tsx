
import HeroSection from "../components/home/HeroSection";
import Card from "../components/ui/Card";
export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt: "Learn how to build modern web applications with the latest features in Next.js 15.",
      date: "2024-03-15",
      author: "John Doe",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering TypeScript for React Development",
      excerpt: "Discover advanced TypeScript patterns and best practices for React applications.",
      date: "2024-03-12",
      author: "Jane Smith",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Create beautiful and responsive designs using Tailwind CSS utility classes.",
      date: "2024-03-10",
      author: "Mike Johnson",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <HeroSection></HeroSection>
      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (

              <Card key={post.id} props={post}></Card>

              // <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              //   <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-200"></div>
              //   <div className="p-6">
              //     <h4 className="text-xl font-semibold text-gray-900 mb-3 hover:text-amber-600 cursor-pointer">
              //       {post.title}
              //     </h4>
              //     <p className="text-gray-600 mb-4 line-clamp-3">
              //       {post.excerpt}
              //     </p>
              //     <div className="flex items-center justify-between text-sm text-gray-500">
              //       <div className="flex items-center space-x-2">
              //         <span>{post.author}</span>
              //         <span>•</span>
              //         <span>{post.date}</span>
              //       </div>
              //       <span>{post.readTime}</span>
              //     </div>
              //   </div>
              // </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8">
            Get the latest articles and tutorials delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}


    </div>
  );
}