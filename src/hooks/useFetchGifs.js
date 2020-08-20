import { useState, useEffect } from "react";
import getGifs from '../helpers/getGifs';

export const useFetchGift = ( category ) => {
    const [images, setImages] = useState({images: [], loading:true});
    
    useEffect( () => {
        getGifs( category )
            .then(imgs => {
                setImages({
                    images: imgs,
                    loading: false
                });
            })
    }, [category])

    return images;
}