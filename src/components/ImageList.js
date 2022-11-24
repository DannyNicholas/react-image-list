import React from "react";

const ImageList = (props) => {

    const images = props.images.map((image) => {
       return (
            <div key={image.id} className="ui large images">
                <img className="ui image" src={image.webformatURL} alt="" />
            </div>
        )
    })

    return(
        <div>
            {images}
        </div>
    )
}

export default ImageList;