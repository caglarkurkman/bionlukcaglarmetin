import React from "react";

const BlogCard = () => {
  // Kartların içeriğini bir array olarak tanımlıyoruz
  const blogs = [
    {
      id: 1,
      category: "Elektrik",
      title: "Blogbaşlık Blogbaşlık",
      description:
        "Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus.",
      date: "Aralık 31, 2022",
      readTime: "4 Mins read",
    },
    {
      id: 2,
      category: "Teknoloji",
      title: "Yeni Teknolojiler Hakkında",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula libero sed arcu aliquam, vel tempor odio luctus.",
      date: "Ocak 1, 2023",
      readTime: "3 Mins read",
    },
    {
      id: 3,
      category: "Bilim",
      title: "Bilimsel Gelişmeler",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      date: "Ocak 5, 2023",
      readTime: "5 Mins read",
    },
    // Daha fazla kart ekleyebilirsiniz...
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="max-w-sm border rounded-lg shadow-md p-4 bg-white"
        >
          {/* Görsel */}
          <div className="w-full h-40 bg-gray-300 rounded-t mb-4"></div>

          {/* Kategori */}
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase tracking-wider">
            {blog.category}
          </span>

          {/* Başlık */}
          <h3 className="mt-2 text-xl font-bold text-gray-800 leading-snug">
            {blog.title}
          </h3>

          {/* Açıklama */}
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {blog.description}
          </p>

          {/* Alt Bilgi */}
          <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 flex items-center font-semibold"
            >
              Devamı <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
    