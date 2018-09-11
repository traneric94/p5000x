import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfileItem from './profile_item';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="photos-container">
        {
          this.props.otherUsers.map((user, idx) => {
            return (
              <ProfileItem
                key={idx}
                user={user}
              />
            )
          }
        )
      }
      </div>
    );
  }
}

export default Profiles;
