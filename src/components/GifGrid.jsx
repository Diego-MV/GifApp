import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGift } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGift(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
      <div className="row ">
        
          {images.map((img,i) => (
            <div className="col-md-3">
             <GifGridItem key={img.id} {...img} />
            </div>
          ))}
        
      </div>
    </>
  );
};

export default GifGrid;
