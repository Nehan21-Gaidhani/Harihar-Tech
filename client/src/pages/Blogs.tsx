import { useState } from "react";

const blogPosts = [
  {
    title: "CI/CD for Machine learning",
    category: "DevOps",
    img: "/assets/blog2.png",
  },
  {
    title: "Predictive Analytics Tools",
    category: "Data Analytics",
    img: "/assets/blog3.png",
  },
  {
    title: "Artificial Intelligence Vs Human Intelligence",
    category: "AI & ML",
    img: "/assets/blog4.png",
  },
  {
    title: "How to Master a Programming Language?",
    category: "Software Development",
    img: "/assets/blog5.png",
  },
  {
    title: "The Role of AI in DevOps",
    category: "DevOps",
    img: "/assets/blog6.png",
  },
  {
    title: "20 Machine Learning Tools to Try in 2025",
    category: "AI & ML",
    img: "/assets/blog7.png",
  },
];

const categoryStyles = {
  All: "bg-gray-100 text-gray-700",
  "Data Analytics": "bg-indigo-100 text-indigo-700",
  "AI & ML": "bg-purple-100 text-purple-700",
  "Software Development": "bg-cyan-100 text-cyan-700",
  "DevOps": "bg-emerald-100 text-emerald-700",
  "Cloud": "bg-sky-100 text-sky-700",
};

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filters = Object.keys(categoryStyles);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <section className="bg-white pt-[7.5rem] pb-[7.5rem] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Insights & Innovation
          </h1>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Explore expert perspectives, industry trends, and actionable
            strategies that empower you to stay ahead in the evolving world of
            technology, business, and innovation.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full font-medium border transition-all duration-200 ${selectedCategory === filter
                    ? `${categoryStyles[filter]} border-transparent`
                    : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
                  }`}
                onClick={() => setSelectedCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 w-full max-w-sm"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="p-4 text-left">
                  {/* Category Tag */}
                  <span
                    className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${categoryStyles[post.category] || "bg-gray-100 text-gray-700"}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    by Author Name - June 5, 2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
