import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { imgContext } from "./MyContext";

const PlaceImage = ({ place, imageSize }) => {
  let tt = useContext(imgContext)

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={tt.imageSize}
    />
  );
};

export default PlaceImage;
