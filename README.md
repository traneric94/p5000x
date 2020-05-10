# Welcome to 5000px! 

5000px is an image sharing site inspired by [500px](https://500px.com/).

### [Live Demo](https://p5000x.herokuapp.com/#/)


## Features

+ Secure frontend and backend user authentication using BCrypt.
+ Users have full CRUD functionality for photos with modal views.
+ Adaptive home feed to display all photos.

### Home Feed

![Home Feed](https://github.com/traneric94/p5000x/blob/master/app/assets/images/home%20feed.png)

## Technologies

5000px utilizes a Rails/PostgreSQL backend and React.js/Redux frontend. Rails serves as the framework mainly due to the small time-frame allowed for this project, as it prioritizes convenience at the irrelevant cost of scalability.

Photo content accredited to Unsplash, Photo storage achieved via AWS S3.

This project was produced over the course of 10 days, and will be iteratively developed.


## Significant Code

5000px uses modal views to maximize interactivity for the user, and add a layer of depth to 5000px. The implementation of the  modal view is modeled below.

```
function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <PhotoFormContainer />
      </div>
    </div>
  )
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};
```

## Possible Future Features

+ User Interactions via Follows/Likes
+ Photo Tags
+ Photo/User/Tag Search
