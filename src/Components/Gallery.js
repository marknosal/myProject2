import React from "react";

function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./images", false, /\.jpg$/)).slice(2,5);
  const imageWidth = 800;
  const imageHeight = 600;
  const objectFit = 'cover';


  return (
    <div style={{ height: '100vh' }}>
        <h2>Take a look at some of our past events</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'mistyrose' }}>
            {images.map((image, index) => (
                <>
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Name ${index+1}`} 
                        style={{ width: imageWidth, height: imageHeight, objectFit: objectFit }}
                    />
                    <br></br>
                </>
            ))}
        </div>
    </div>
  );
}

export default Gallery;