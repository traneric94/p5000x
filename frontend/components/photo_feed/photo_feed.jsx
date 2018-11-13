import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import Waypoint from 'react-waypoint';
import PhotoFeedRow from './photo_feed_row';

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
        this.props.getPhotos(this.state.page);
        this.setState({ page: this.state.page + 2 })
    }

    renderPhotos() {
        const { ownPhotos, otherPhotos, deletePhoto, currentUser } = this.props;
        if (this.props.currentUser == null) return null;
        let photoArray = this.props.userId != undefined ? ownPhotos : otherPhotos
        let rows = [];
        for (let i = 0; i < photoArray.length - 2; i+=3) {
            rows.push([photoArray[i], photoArray[i+1], photoArray[i+2]]);
        }

        return (
            <div className="photos-container-new">
                {
                    rows.map((row, i) => {
                        return (
                            <PhotoFeedRow 
                                key={row[0].id}
                                row={row}
                            />
                        )
                    })
                    // photoArray.map(
                    //     (photo) => {
                    //         return <PhotosItem
                    //             key={photo.id}
                    //             photo={photo}
                    //             deletePhoto={deletePhoto}
                    //             currentUser={currentUser}
                    //         />;
                    //     }
                    // )
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
