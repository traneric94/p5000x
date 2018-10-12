import React from 'react'
import PhotosItem from "./photos_item_container";

class PhotoFeedRow extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="photo-row">
                {this.props.row.map((photo) =>(
                    <PhotosItem 
                        key={photo.id} 
                        photo={photo} 
                    />
                ))}
            </div>
        );
    }
} 

export default PhotoFeedRow;