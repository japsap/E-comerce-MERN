import shoe1 from "../Assets/Images/shoes/firstShoe.png";
import shoe2 from "../Assets/Images/shoes/shoe2.png";
import shoe3 from "../Assets/Images/shoes/shoe3.png";
import shoe4 from "../Assets/Images/shoes/shoe4.png";

import emptyCart from '../Assets/Images/cart.png'

import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BsCalendar3, BsGlobe } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";

export const Data = {
  navbarLinks: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Store",
      path: "/",
    },
    {
      id: 3,
      name: "Men",
      path: "/",
    },
    {
      id: 4,
      name: "Contacts",
      path: "/",
    },
  ],
  headerData: {
    h1: "Design & hight quality",
    p: "Sale of high-quality branded sneakers in a wide range with unique designs",
    btn1: "Open Store",
    btn2: "Explore More",
  },
  swiperShoes: [
    {
      id: 1,
      image: shoe1,
    },
    {
      id: 2,
      image: shoe2,
    },
    {
      id: 3,
      image: shoe3,
    },
    {
      id: 4,
      image: shoe4,
    },
  ],
  errorPage: {
    h1: "404 - PAGE NOT FOUND",
    p: "The page your are looking for might have been removed, had its name changed or is temporarily unavailable",
    button: "Go back",
  },
  boxAccountLinks: [
    {
      id: 2,
      name: "Billing & Payments",
      path: "/",
    },
    {
      id: 4,
      name: "Gift Cards",
      path: "/",
    },
  ],
  accountBoxData: [
    {
      id: 1,
      name: "Name",
      desc: "Alexander Ivanov",
      icon: <AiOutlineUser />,
    },
    {
      id: 2,
      name: "Date of Birth",
      desc: "15 July 2005",
      icon: <BsCalendar3 />,
    },
    {
      id: 3,
      name: "Country Region",
      desc: "Sofia, Bulgaria",
      icon: <BsGlobe />,
    },
    {
      id: 4,
      name: "Language",
      desc: "English ( UK ) - English",
      icon: <HiLanguage />,
    },
    {
      id: 5,
      name: "Contactable at",
      desc: "alexmmech@gmail.com",
      icon: <AiOutlineMail />,
    },
  ],
  emptyCartError: {
    img: emptyCart,
    h1: "Oops! Your cart is empty!",
    p: "Looks like you haven`t added anything to your cart yet.",
    button: "Show now",
  },
};
