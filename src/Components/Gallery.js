import React from "react";

function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./images", false, /\.jpg$/)).slice(2,5);
  console.log(images)

  return (
    <div>
      <h2>Take a look at some of our past events</h2>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Name ${index}`} />
      ))}
    </div>
  );
}

export default Gallery;