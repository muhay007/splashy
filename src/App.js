import { createContext, useState } from "react";
import Unsplash from "./components/Unsplash";
import Heading from "./components/Heading";
import Axios from "./components/Axios";

// Create Context
export const ImageContext = createContext();

function App() {
  document.title = "Splashy";
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = Axios(
    `search/photos?page=1&query=random&per_page=30&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Heading />
      <Unsplash />
    </ImageContext.Provider>
  );
}

export default App;
