import { useContext, useState } from "react";
import { ImageContext } from "../App";
import Card from "./Card";
import ImageArray from "./ImageArray";

const Unsplash = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  const [visible, setVisible] = useState(8);

  const setMore = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <>
      <h1 className="text-center mt-6 text-2xl">
        Results for {searchImage || "Random"}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <ImageArray item={10} />
        ) : (
          response
            .slice(0, visible)
            .map((data, key) => <Card key={key} data={data} />)
        )}
      </div>
      <div className="w-full flex justify-center items-center py-6">
        <button
          className="p-4 hover:p-5 ease-in-out duration-200 border-2 border-slate-500 rounded-md"
          onClick={setMore}
        >
          Load more images
        </button>
      </div>
    </>
  );
};

export default Unsplash;
