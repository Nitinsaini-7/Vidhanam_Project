import { Link } from "react-router-dom";
import Title from "../../components/Title";
import { blogData } from "../../data";

const Blog = () => {
  return (
    <section className="mt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <Title text1={"Blogs"} />
        </div>
        <ul className="grid mt-10 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogData.map((items, index) => (
            <li
              className="w-full mx-auto group rounded-md duration-200 cursor-pointer hover:shadow-xl sm:max-w-sm shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px]"
              key={index}
            >
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full rounded-md"
              />
              <div className="p-5 space-y-4">
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">
                    {items.date}
                  </span>
                  <h3 className="text-lg text-gray-800 duration-150 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                    {items.desc}
                  </p>
                </div>
                <div className="">
                  <Link
                    className="border-indigo-600 border rounded-md  p-2 hover:bg-indigo-600 hover:text-white duration-200 text-indigo-600"
                    to={`/blog/${items.id}`}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
