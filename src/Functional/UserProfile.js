import React from 'react'
function UserProfile(props) {
    return (
      <div className="user-profile">
        <img src={props.userProfile.picture} />
        <p>{props.userProfile.name}</p>
      </div>
    );
}

export default UserProfile