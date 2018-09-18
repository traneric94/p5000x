import React from 'react';
import ProfileItem from './profile_item';
import LoadingIcon from "../loading/loading_icon";

class Profiles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.loading) {
      return <LoadingIcon />;
    }
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
