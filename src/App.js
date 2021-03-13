import { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  console.log(images);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=20419170-da25b877402ce8e1de759a175&q=${term}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setImages(res.data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto mt-6 px-28">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading .....</h1>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mx-auto">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
