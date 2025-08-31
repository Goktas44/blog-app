
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
            {featuredPosts.map((post, index) => (
              <Card key={index} post={post}></Card>

            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}