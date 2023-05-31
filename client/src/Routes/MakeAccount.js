import React, { useState } from "react";

import {
  AiOutlineLogin,
  AiOutlineEyeInvisible,
  AiOutlineEye,
} from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import useServer from "../Hooks/useServer";
import useAuth from "../Hooks/useAuth";

const MakeAccount = () => {
  const [ user ] = useAuth();

  const [hasAccount, setHasAccont] = useState(true);
  const [togglePass, setTogglePass] = useState(false);
  const [ error, setError] = useState('')

  const { useRegister, useLogin } = useServer()

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const useRegisterSubmit = (e) => {
    e.preventDefault();

    useRegister(data.username, data.email, data.password, data.repeatPassword)
        .then(res => {
            if(res.status == 404){
                setError(res.message)
            } else if(res.status == 201){
                setHasAccont(prev => !prev);
            }
        })
  };

  const useLoginSubmit = (e) => {
    e.preventDefault();

    useLogin(data.email, data.password, data.repeatPassword)
        .then(res => {
            console.log(res)
            if(res.status == 404){
                setError(res.message)
            } else if(res.status == 201){
                localStorage.setItem("auth", res.token);
                window.location.href = `/dashboard/${user._id}`
            }
        })
  };

  return (
    <div className="account-container">
      {hasAccount ? (
        <div className="register-container container-in">
          <div className="background"></div>

          <form onSubmit={useRegisterSubmit} className="data-container">
            <div className="text">
              <IoCreateOutline className="icon" />
              <h1>Sign up</h1>
              <p>Sign up, if you dont have an accont here</p>
            </div>

            <div className="input-container">
              <input
                onChange={onChangeHandler}
                required
                name="username"
              />
              <label>Username</label>
            </div>
            <div className="input-container">
              <input onChange={onChangeHandler} required name="email" />
              <label>Email</label>
              <MdAlternateEmail className="icon" />
            </div>
            <div className="input-container">
              <input onChange={onChangeHandler} required name="password" type={!togglePass ? "password" : 'text'} />
              <label>Password</label>
              {togglePass ? (
                <AiOutlineEyeInvisible
                  className="icon"
                  onClick={() => setTogglePass((prev) => !prev)}
                />
              ) : (
                <AiOutlineEye
                  className="icon"
                  onClick={() => setTogglePass((prev) => !prev)}
                />
              )}
            </div>
            <div className="input-container">
              <input
                onChange={onChangeHandler}
                required
                name="repeatPassword"
              />
              <label>Repeat Password</label>
            </div>
            <div className="remember-me">
              <p>
                Have an account{" "}
                <span onClick={() => setHasAccont((prev) => !prev)}>
                  Sign in
                </span>
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
      ) : (
        <div className="login-container container-in">
          <form onSubmit={useLoginSubmit} className="data-container">
            <div className="text">
              <AiOutlineLogin className="icon" />
              <h1>Sign in</h1>
              <p>Sign in, if you dont have an accont here</p>
            </div>
            <div className="input-container">
              <input onChange={onChangeHandler} required name="email" />
              <label>Email</label>
              <MdAlternateEmail className="icon" />
            </div>
            <div className="input-container">
              <input onChange={onChangeHandler} required name="password" />
              <label>Password</label>
              <p>Forgot Password?</p>
            </div>
            <div className="input-container">
              <input
                onChange={onChangeHandler}
                required
                name="repeatPassword"
              />
              <label>Repeat Password</label>
            </div>
            <div className="remember-me">
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccont((prev) => !prev)}>
                  Register
                </span>
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}

            <button type="submit">Sign in</button>
          </form>
          
          <div className="background"></div>
        </div>
      )}
    </div>
  );
};

export default MakeAccount;
