import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Profile.css";
const Profile = () => {
  const { user } = useAuth();
  console.log(user, "for profile");
  console.log(user.photoURL);
  return (
    <div>
      <div className="userDetails">
        {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
        <br />
        <br />
        <h3>Name: {user.displayName}</h3>
        <p>email: {user.email}</p>
        <h6>id: {user.uid}</h6>
      </div>
    </div>
  );
};

export default Profile;
