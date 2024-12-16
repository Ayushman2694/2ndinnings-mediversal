import { useState } from "react";

const blogPosts = [
  {
    title: "Nutrition After 60: Dietary Guidelines for a Healthier You",
    excerpt:
      "As we age, our nutritional needs change. Learn about the essential nutrients and dietary habits that can help maintain your health and vitality in your golden years.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/elderly-nutrition.jpg",
    category: "Nutrition",
    author: "Dr. Anita Sharma",
    date: "2023-05-15",
    readTime: "5 min read",
  },
  {
    title: "The Power of Social Connections in Senior Well-being",
    excerpt:
      "Discover how maintaining strong social ties can significantly improve mental health, cognitive function, and overall quality of life for seniors.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/elderly-social.jpg",
    category: "Mental Health",
    author: "Psychologist Rahul Verma",
    date: "2023-05-10",
    readTime: "4 min read",
  },
  {
    title: "Gentle Exercises for Improved Mobility and Balance",
    excerpt:
      "Explore a range of senior-friendly exercises designed to enhance flexibility, strengthen muscles, and reduce the risk of falls.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/elderly-exercise.jpg",
    category: "Fitness",
    author: "Physiotherapist Priya Patel",
    date: "2023-05-05",
    readTime: "6 min read",
  },
  {
    title: "Understanding Dementia: Early Signs and Coping Strategies",
    excerpt:
      "Learn to recognize the early signs of dementia and discover effective strategies for supporting loved ones affected by this condition.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/dementia-care.jpg",
    category: "Health",
    author: "Neurologist Dr. Rajesh Kumar",
    date: "2023-04-30",
    readTime: "7 min read",
  },
  {
    title: "Creating a Safe and Comfortable Home for Seniors",
    excerpt:
      "Explore practical tips and modifications to make your home safer and more comfortable for aging in place.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/senior-home-safety.jpg",
    category: "Home Care",
    author: "Occupational Therapist Sneha Gupta",
    date: "2023-04-25",
    readTime: "5 min read",
  },
  {
    title: "Mindfulness and Meditation: A Path to Senior Wellness",
    excerpt:
      "Discover how mindfulness practices and meditation can reduce stress, improve sleep, and enhance overall well-being for older adults.",
    image:
      "https://rlzqjjxzjwlxvqbpvxhm.supabase.co/storage/v1/object/public/images/senior-meditation.jpg",
    category: "Wellness",
    author: "Yoga Instructor Amit Singh",
    date: "2023-04-20",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6FFF9] via-[#F0FFF9] to-[#E6FFF9]">
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          2nd Innings
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="/plans"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Plans
          </a>
          <a
            href="/services"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Our Services
          </a>
          <a
            href="/blog"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            Blog
          </a>
        </nav>
      </header>

      {/* <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
            Insights for Your Golden Years
          </h1>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto mb-8">
            Explore our collection of articles on health, wellness, and
            lifestyle tips for a fulfilling senior life.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="ml-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div
              key={post.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-teal-100 text-teal-800 rounded-full mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-teal-800 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-teal-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-teal-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mr-4">{post.author}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mr-4">{post.date}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
                <button className="w-full px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <main className="flex-grow flex flex-col mt-40 justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-green-700">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </main>

        {/* {filteredPosts.length === 0 && (
          <div className="text-center text-teal-600 mt-8">
            No articles found matching your search. Try a different keyword.
          </div>
        )} */}

        {/* <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-800 mb-4">
            Stay Informed with 2nd Innings
          </h2>
          <p className="text-teal-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, tips, and
            insights on senior care and well-being.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="ml-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-r-md">
              Subscribe
            </button>
          </div> */}
        {/* </div> */}
      {/* </main> */}
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function BlogPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
//       {/* Header */}
//       <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl font-bold text-teal-700 hover:text-teal-800 transition-colors"
//         >
//           2nd Innings
//         </Link>
//         <nav className="hidden md:flex space-x-8">
//           <Link
//             to="/plans"
//             className="text-teal-600 hover:text-teal-700 transition-colors"
//           >
//             Plans
//           </Link>
//           <Link
//             to="/services"
//             className="text-teal-600 hover:text-teal-700 transition-colors"
//           >
//             Our Services
//           </Link>
//           <Link
//             to="/blog"
//             className="text-teal-600 hover:text-teal-700 transition-colors"
//           >
//             Blog
//           </Link>
//         </nav>
//       </header>

//       {/* Coming Soon Content */}
      // <main className="flex-grow flex flex-col justify-center items-center">
      //   <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      //   <p className="text-lg text-green-700">
      //     We're working hard to bring you something amazing. Stay tuned!
      //   </p>
      // </main>
//     </div>
//   );
// }
