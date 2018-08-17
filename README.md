# Welcome to 5000px! 

5000px is an image sharing site inspired by [500px](https://500px.com/).

### [Live Demo](https://p5000x.herokuapp.com/#/)

## Overview

5000px utilizes a Rails/PostgreSQL backend and React.js/Redux frontend.

Photo content accredited to Unsplash, Photo storage achieved via AWS S3.

This project was produced over the course of 10 days, and will be iteratively developed.

## Features

+ Secure frontend and backend user authentication using BCrypt.
+ Users have full CRUD functionality for photos.
+ Adaptive home feed to display all photos.


## Technical Features
### Home Feed

![Home Feed](https://github.com/traneric94/p5000x/blob/master/app/assets/images/home%20feed.png)

### Modal Photo View

![Photo View](https://github.com/traneric94/p5000x/blob/master/app/assets/images/show.png)

### Modal Photo Edit

![Photo Edit](https://github.com/traneric94/p5000x/blob/master/app/assets/images/edit.png)

5000px uses modal views to maximize interactivity for the user, and add a layer of depth to 5000px. The DRY principle, made toggling the display and edit views of Photos the most intuitive, rather than creating entirely separate components and modals for each of the CRUD photo functions.

```
  render() {
    let display = this.state.visible ? (
      <div>
        <PhotoEditContainer photo={this.props.photo} />
        {this.renderButton()}</div>
    ) : (
      <div className="show">
        <div className="open-pic">
          <img src={this.props.photo.photoUrl}/></div>
        <div className="details">
          <h1 ref={subtitle => this.subtitle = subtitle}>
            {this.props.photo.title} </h1>
          <h2>{this.props.photo.description}</h2>
          {this.renderButton()}
        </div>
      </div>
    );
    return (
      <div>
        <img
          className="default-pic"
          src={this.props.photo.photoUrl}
          onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false} >
          {display}
        </Modal>
      </div>
    )
  }
}
```

### Possible Future Features

+ User Interactions via Follows/Likes
+ Photo Tags
+ Photo/User/Tag Search
