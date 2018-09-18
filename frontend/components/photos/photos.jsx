import React from 'react';
import { Link } from 'react-router-dom';
import PhotosItem from './photos_item';
import { getOwnPhotos1 } from "../../reducers/selectors";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      childChange: false
    };
    this.changeChild = this.changeChild.bind(this)
  }

  changeChild() {
    this.setState({ childChange: !this.state.childChange })
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  renderPhotos() {
    if (this.props.view == "profile" && this.props.photos.lenght > 0) {
      const ownPhotos = getOwnPhotos1(this.props.photos, this.props.currentUser)
      return (
        <div className="photos-container">
          {
            ownPhotos.map(
              (photo) => {
                return <PhotosItem key={photo.id} photo={photo} deletePhoto={this.props.deletePhoto} currentUser={this.props.currentUser} changeChild={this.changeChild} />;
              }
            )
          }
        </div>
      )
    } else {
      return (
        <div className="photos-container">
          {
            this.props.photos.map(
              (photo) => {
                return (
                  <PhotosItem
                    key={photo.id}
                    photo={photo}
                    deletePhoto={this.props.deletePhoto}
                    currentUser={this.props.currentUser}
                    changeChild={this.changeChild}
                  />
                );
              }
            )
          }
        </div>
      )
    }
  }


  render() {
    console.log(this)
    if (!this.props.currentUser) {
      return <div className="splash">
          <img className="background-image" src={window.background} />
          <div className="greeting-message">
            <h1>Inspire and share with the world's photographers</h1>
            <br/><br/><br/><br/>
            <Link id="entry-button" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>;
    } else {
      return (
        <div >
          {/* <form>
          <input 
            className="search-bar"
            type="text"
            value={this.state.search}
            placeholder="Search for photos, people, or places"
            onChange={this.updateSearch.bind(this)}
          />
          <input type="submit" name="" id="" value="search"/>

          </form> */}
          {this.renderPhotos()}
        </div>
      );
    }
  }
}

export default Photos;
