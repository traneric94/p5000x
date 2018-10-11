import React from 'react';
import PhotosItem from '../photos/photos_item';
import LoadingIcon from '../loading/loading_icon';
import Waypoint from 'react-waypoint';

class PhotoFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        this.getMorePhotos = this.getMorePhotos.bind(this);
    }

    componentDidMount() {
        this.props.getPhotos(this.state.page);
    }

    getMorePhotos() {
        console.log(this.state)
        this.props.getPhotos(this.state.page);
        this.setState({ page: this.state.page + 1 })
    }

    renderPhotos() {
        const { ownPhotos, otherPhotos, deletePhoto, currentUser } = this.props;
        if (this.props.currentUser == null) return null;
        let photoArray = this.props.userId != undefined ? ownPhotos : otherPhotos
        return (
            <div className="photos-container">
                {
                    photoArray.map(
                        (photo) => {
                            return <PhotosItem
                                key={photo.id}
                                photo={photo}
                                deletePhoto={deletePhoto}
                                currentUser={currentUser}
                            />;
                        }
                    )
                }
                <Waypoint onEnter={this.getMorePhotos} />
            </div>
        )
    }

    renderLoad() {
        if (this.props.loading) {
            return <LoadingIcon />;
        }
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    {this.renderPhotos()}
                    {this.renderLoad()}

                </div>
            );
        }
    }
}

export default PhotoFeed;
