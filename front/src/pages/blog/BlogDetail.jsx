// src/pages/BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { blogDetailsData } from "../../data";
import Error from "../Error";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogDetailsData.find((b) => b.id === (id));

  if (!blog) {
    return <div>
      <Error/>
    </div>;
  }

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div>
        <img src={blog.img} alt={blog.title} className="w-full h-full mb-6 rounded-md" />
      </div>

      <div className="space-y-4">
        {/* Render the description paragraphs */}
        {blog.content[0].description.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph}
          </p>
        ))}

        {/* Render the key reasons section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            {blog.content[0].keyPointsHead}
          </h2>
          <ul className="list-decimal space-y-4 ml-5">
            {blog.content[0].keyPointTitle.map((title, index) => (
              <li key={index}>
                <span className="font-semibold">{title}</span> {blog.content[0].keyPoints[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogDetail;
