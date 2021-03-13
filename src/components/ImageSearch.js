import { useState } from "react";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="my-12">
      <form onSubmit={onSubmit}>
        <div className="flext items-center py-2">
          <input
            className=" border-b-2 border-green-600  w-full text-gray-700 py-1 leading-tight focus:outline-none text-lg"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search Image ........"
          />
          <button
            type="submit"
            className=" bg-green-500 border-green-500 hover:bg-green-400 hover:border-green-400 text-sm  text-white py-1 px-2 rounded block mt-3"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
