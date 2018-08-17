import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfileItem from './profile_item';

const arrayOfPics = [window.zuck, window.trump, window.disaster]

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
          this.props.users.map((user, idx) => {
            return (
              <ProfileItem
                key={idx}
                user={user}
                currentUser={this.props.currentUser}
                profile={arrayOfPics[idx]}
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
