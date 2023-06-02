import React, { useEffect, useRef, useState } from "react";

import useAuth from '../../Hooks/useAuth';
import useServer from "../../Hooks/useServer";

import validator from "validator";

import { AiOutlineClose } from "react-icons/ai";

const ChangePfpPopUp = ({ setToggle, data }) => {

  const [ user ] = useAuth();
  const { postUpdateProfile } = useServer()

  const [image, setImage] = useState("");
  const [isImage, setIsImage] = useState(null);

  const urlImageRef = useRef();

  useEffect(() => {
    if (validator.isURL(image)) {
      return setIsImage(true);
    } else {
      return setIsImage(false);
    }
  }, [image]);

  const onSubmit = (e) => {
    e.preventDefault()
    if(!isImage){
        return;
    }

    postUpdateProfile({userPfp: image, userId : user._id})
        .then(res => {
            if(res.status === 201){
                window.location.reload();
            }
        })
  }

  return (
    <div className={`popUp-pfp-container`}>
      <div className="popUp-pfp-card">
        <div className="cart-inner">
          <AiOutlineClose
            className="icon"
            onClick={() => setToggle((prev) => !prev)}
          />
          <form onSubmit={onSubmit} className="card-data">
            <h2 className="mb-20 text-center">Change profile picture</h2>
            {isImage ? <img src={image == "" ? data?.user?.userPfp : image}/> : <h3>Plase provide a correct Image Url</h3>}
            <div className="input-container">
              <input
                ref={urlImageRef}
                required
                value={image}
                type="url"
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Image Url</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePfpPopUp;
