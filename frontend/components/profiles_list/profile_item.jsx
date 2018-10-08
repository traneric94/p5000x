import React from 'react';
import { Link } from 'react-router-dom';

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { profileUrl, username } = this.props.user
    return <div>
        <div className="profile-item-container">
          <Link to={`${username}`}>
            <img className="default-profile" src={profileUrl} />
          </Link>
          <br />
          {username}
        </div>
      </div>;
  }
}

export default ProfileItem;
