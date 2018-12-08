import React from 'react';

class Photos extends React.Component {
    constructor(props) {
        super(props);

        this.renderedit = this.renderEdit.bind(this);
    }

    componentDidMount() {
        this.props.getPhoto(this.props.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.photo_id !== prevProps.match.params.photo_id) {
            this.props.getPhoto(this.props.id)
        }
    }

    renderEdit() {
        if (this.props.currentUser.id === this.props.photo.author_id) {
            return (
                <img
                    className="edit-button"
                    onClick={() => this.props.openModal(this.props.id)}
                    src={window.edit}
                />
            )
        }
        return null;
    }

    render() {

        if (!this.props.photo) return null;
            return <div>
                <div className="photo-show-container">
                  <img className="photo-show" src={this.props.photo.photoUrl} />
                  <h3 className="photo-text">
                    {this.props.photo.title} by {this.props.photo.author.username}
                  </h3>
                  {this.renderEdit()}
                </div>

                <div className="photo-info">
                </div>
              </div>;
    }
}

export default Photos;