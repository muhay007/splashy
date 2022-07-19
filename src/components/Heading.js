import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&per_page=30&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&per_page=30&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="bg-slate-800 flex justify-around items-center py-5">
      <h1 className="text-3xl font-black cursor-pointer hidden md:block text-white">
        SPLASHY.
      </h1>
      <div className="flex md:w-auto w-96 md:px-6">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Anything..."
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
            required
          />
        </div>
        <button
          onClick={handleButtonSearch}
          disabled={!searchValue}
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchField;
