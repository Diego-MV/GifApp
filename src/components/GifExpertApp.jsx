import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);


  return (
    <>
      <AddCategory setCategories={setCategories}/>
      <ol>
        {
            categories.map( category => (
                <GifGrid key={ category } category={category}/>
            ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
