import React, { useState } from "react";
import { useParams } from "react-router";


import useFetch from "../../Hooks/useFetch";
import useServer from "../../Hooks/useServer";
import DashboardLinks from "./DashboardLinks";

import { AiOutlinePlus } from 'react-icons/ai';


const PostAnAdd = ({ user }) => {
  const { useLogout, usePostAdd } = useServer();

  const { userId } = useParams();

  const [data] = useFetch(`https://e-comerce-mern-cp8a.vercel.app/user/${userId}`, {});

  const [value, setValue] = useState({
    image: "",
    title: "",
    description: "",
    price: 0,
  });


  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const usePostCatalog = (e) => {
    e.preventDefault();

    const { image, title, price, description } = value;

    usePostAdd({ image, title, price, description, owner: user._id }).then(() => {
      window.location.reload();
    })
  };

  let image = 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375314/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers'

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
        <div className="img-container" onClick={() => {}}>
            <img src={data.user?.userPfp} />
            <div className="image-plus-icon">
              <AiOutlinePlus className="icon"/>
            </div>
          </div>
          <h2>{data.user?.username}</h2>
          <p>{data.user?.email}</p>
          <div className="box-links">
            <DashboardLinks user={data?.user} />
          </div>
        </div>
        <div className="personal-information">
          <h1>Post an Add your online store</h1>
          <p>
            Manage your personal information, including phone, numbers and email
            address where you can be contacted
          </p>
          <div className="post-add-container">
            <div className="add-picture dash-item">
              <img src={value.image == '' ? image : value.image} />
            </div>
            <form onSubmit={usePostCatalog} className="add-data dash-item">
              <div className="input-container">
                <input
                  type="text"
                  required
                  onChange={onChangeHandler}
                  name="title"
                />
                <label>Name</label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  required
                  onChange={onChangeHandler}
                  name="image"
                />
                <label>Image url</label>
              </div>
              <div className="input-container">
                <input
                  type="number"
                  required
                  onChange={onChangeHandler}
                  name="price"
                />
                <label>Price</label>
              </div>
              <div className="input-container">
                <textarea
                  onChange={onChangeHandler}
                  required
                  name="description"
                />
                <label>Description</label>
              </div>
              <div className="buttons mb-20">
                <button>Preview</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnAdd;
