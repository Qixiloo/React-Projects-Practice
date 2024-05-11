import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageGallery({ url, page = 1, numberOfImages = 5 }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(false);
      const response = await fetch(
        `${getUrl}?page=${page}&limit=${numberOfImages}`
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        console.log(data);
        setLoading(true);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (!loading) {
    return <div>The pictures are loading</div>;
  }

  if (errorMessage) {
    alert(errorMessage);
  }

  function handlePrevious(index) {
    setCurrentImage(index === 0 ? images.length - 1 : index - 1);
  }

  function handleNext(index) {
    setCurrentImage(index === images.length - 1 ? 0 : index + 1);
  }

  function handleSetIndex(index) {
    setCurrentImage(index);
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrevious(currentImage)}
      />

      {images && images.length > 0 ? (
        images.map((image, index) => (
          // <div key={index}>{image.download_url}</div>
          <img
            key={image.id}
            alt={image.title}
            src={image.download_url}
            className={index === currentImage ? "showimage" : "hideimage"}
          />
        ))
      ) : (
        <div>No pictures shown</div>
      )}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext(currentImage)}
      />
      <span span className="circle-indicators">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                onClick={() => handleSetIndex(index)}
                className={
                  index === currentImage ? "thisbutton" : "otherbutton"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
