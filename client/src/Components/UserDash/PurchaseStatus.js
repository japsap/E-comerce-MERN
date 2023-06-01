import React from 'react';

import { useParams } from 'react-router';

import DashboardLinks from './DashboardLinks';

import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";

const PurchaseStatus = () => {

    const { userId } = useParams();

  const [data] = useFetch(`http://localhost:5000/user/${userId}`, {});

  const { useLogout } = useServer()

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

      </div>
    </div>
  </div>
  )
}

export default PurchaseStatus