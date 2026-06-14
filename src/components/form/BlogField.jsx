import React from "react";

const BlogField = ({ data, handleRead }) => {
  return (
    <div>
      {/* for picking the blog category */}
      <select
        name="category"
        id=""
        onChange={handleRead}
        value={data.category}
        className="pl-3 pr-3 py-2 mt-2 mb-4 h-10 xs:w-[60%] sm:w-[45%] md:w-[40%] border-1 border-gray-500  capitalize  xs:text-xs lg:text-sm font-light bg-[#1e1e1e]"
      >
        <option value="">choose a topic category</option>
        <option value="quantom computing">quantom computing</option>
        <option value="biotechnology">biotechnology</option>
        <option value="renewable energy">renewable energy</option>
        <option value="technology">technology</option>
        <option value="health">health</option>
        <option value="politics">politics</option>
        <option value="environment">environment</option>
        <option value="sports">sports</option>
        <option value="space exploration">space exploration</option>
      </select>
      {/* for the title*/}
      <label className="block capitalize  xs:text-sm  lg:text-md" htmlFor="">
        title
      </label>
      <input
        type="text"
        name="title"
        onChange={handleRead}
        value={data.title}
        placeholder=" your title"
        className="pl-3 pr-3 py-2 mt-2 mb-4 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
    </div>
  );
};

export default BlogField;
