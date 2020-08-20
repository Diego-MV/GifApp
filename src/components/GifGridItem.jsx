import React from 'react'

const GifGridItem = ( {id, title, url } ) => {
    return (
        <div className="card mb-4" >
            <img src={url} class="card-img-top img-fluid rounded-bottom" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <a href={url} class="btn btn-primary" target="blank">Abrir en GIPHY</a>
                </div>
        </div>
    )
}

export default GifGridItem;
