import React, { useEffect, useState } from "react";

import useFetch from "../../Hooks/useFetch";

import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsCalendar3, BsGlobe } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";

import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router";

import Geocode from "react-geocode";

const UserData = () => {
  const { userId } = useParams();

  const [location, setLocation] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [data, _, isLoading] = useFetch(
    `https://e-comerce-mern-cp8a.vercel.app/user/${userId}`,
    {},
  );

  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  Geocode.setApiKey("191694631229152436891x35123")
   
  const [placename, setPlaceName] = useState(null);
  const [error, setError] = useState("");
  const geolocationAPI = navigator.geolocation;

  // useEffect(() => {
  //   if (!geolocationAPI) {
  //     setError("Geolocation API is not available in your browser!");
  //   } else {
  //     Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //       (response) => {
  //         const address = response.results[0].formatted_address;
  //         let city;
  //         for (
  //           let i = 0;
  //           i < response.results[0].address_components.length;
  //           i++
  //         ) {
  //           for (
  //             let j = 0;
  //             j < response.results[0].address_components[i].types.length;
  //             j++
  //           ) {
  //             switch (response.results[0].address_components[i].types[j]) {
  //               case "locality":
  //                 city = response.results[0].address_components[i].long_name;
  //                 break;
  //             }
  //           }
  //         }
  //         setPlaceName(city);
  //       },
  //       (error) => {
  //         console.error(error);
  //       },
  //     );
  //   }
  // }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Personal Information</h1>
          <p>
            Manage your personal information, including phone, numbers and email
            address where you can be contacted
          </p>
          <div className="account-box-datas">
            <div className="box-card">
              <div className="text">
                <h3>Name</h3>
                <p>{data?.user?.username}</p>
              </div>
              <AiOutlineUser className="icon" />
            </div>

            <div className="box-card">
              <div className="text">
                <h3>Date of birth</h3>
                <p>{NaN}</p>
              </div>
              <BsCalendar3 className="icon" />
            </div>

            <div className="box-card">
              <div className="text">
                <h3>Country Region</h3>
                <p>API Key Error!</p>
              </div>
              <BsGlobe className="icon" />
            </div>

            <div className="box-card">
              <div className="text">
                <h3>Language</h3>
                <p>{userLocale}</p>
              </div>
              <HiLanguage className="icon" />
            </div>

            <div className="box-card">
              <div className="text">
                <h3>Contactable at</h3>
                <p>{data?.user?.email}</p>
              </div>
              <AiOutlineMail className="icon" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserData;
