import React, { useState } from "react";

import useServer from "../Hooks/useServer";
import useFetch from '../Hooks/useFetch'

import UserData from "../Components/UserDash/UserData";
import DashboardLinks from "../Components/UserDash/DashboardLinks";

import { AiOutlinePlus } from 'react-icons/ai';
import ChangePfpPopUp from "../Components/PopUps/ChangePfpPopUp";

const UserDash = ({ user }) => {
  const { useLogout } = useServer();

  const [ data ] = useFetch(`http://localhost:5000/user/${user._id}`, {})

  const [ toggle, setToggle] = useState(true)

  return (
    <div className="user-dashboard-container">
      {!toggle && <ChangePfpPopUp setToggle={setToggle} toggle={toggle} data={data}/> }
      <div className="quick-actions">
        <h2>{data.user?.username}'s Account</h2>
        <button className="global-button" onClick={useLogout}>
          Sign out
        </button>
      </div>
      <div className="account-data-conatiner">
        <div className="small-account-box">
          <div className="img-container" onClick={() => {setToggle(prev => !prev)}}>
            <img src={data.user?.userPfp} />
            <div className="image-plus-icon">
              <AiOutlinePlus className="icon"/>
            </div>
          </div>
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
