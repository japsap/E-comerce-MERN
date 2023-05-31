import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";
import DashboardLinks from "./DashboardLinks";

const PostAnAdd = () => {
  const { useLogout } = useServer();

  const { userId } = useParams();

  const [data] = useFetch(`http://localhost:5000/user/${userId}`, {});

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
          <h1>Post an Add your online store</h1>
          <p>
            Manage your personal information, including phone, numbers and email
            address where you can be contacted
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostAnAdd;
