import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Card = ({ data }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[<img src={data.urls.regular} alt={data.alt_description} />]}
      />

      <img
        className="h-72 w-full object-cover rounded-lg shadow-md transition duration-500 hover:scale-105 cursor-pointer"
        src={data.urls.regular}
        alt={data.alt_description}
        onClick={() => setToggler(!toggler)}
      />
    </>
  );
};

export default Card;
