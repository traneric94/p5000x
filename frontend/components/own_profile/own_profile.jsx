import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class OwnProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }

  render() {
    if (!this.props.user[this.props.id]) {
      return null;
    }
    return (
      <div>
      <h1 className="username"> { this.props.user[this.props.id].username} </h1>
      </div>
    )
  }

}

export default OwnProfile;
