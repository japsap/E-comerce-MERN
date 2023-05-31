import React from "react";
import { Link, useParams } from "react-router-dom";

import { Data } from "../Constants/Data";

import useServer from "../Hooks/useServer";
import useFetch from '../Hooks/useFetch'
import UserData from "../Components/UserDash/UserData";
import PostAnAdd from "../Components/UserDash/PostAnAdd";
import DashboardLinks from "../Components/UserDash/DashboardLinks";

const UserDash = ({ user }) => {
  const { useLogout } = useServer();

  const [ data ] = useFetch(`http://localhost:5000/user/${user._id}`, {})

  return (
    <div className="user-dashboard-container">
      <div className="quick-actions">
        <h2>{data.user?.username}'s Account</h2>
        <button className="global-button" onClick={useLogout}>
          Sign out
        </button>
      </div>
      <div className="account-data-conatiner">
        <div className="small-account-box">
          <img src={data.user?.userPfp} />
          <h2>{data.user?.username}</h2>
          <p>{data.user?.email}</p>
          <div className="box-links">
            <DashboardLinks user={data?.user}/>
          </div>
        </div>
        <div className="personal-information">
          <UserData/>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
