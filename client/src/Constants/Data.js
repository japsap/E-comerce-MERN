import shoe1 from "../Assets/Images/shoes/firstShoe.png";
import shoe2 from "../Assets/Images/shoes/shoe2.png";
import shoe3 from "../Assets/Images/shoes/shoe3.png";
import shoe4 from "../Assets/Images/shoes/shoe4.png";


import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { BsCalendar3, BsGlobe  } from 'react-icons/bs';
import { HiLanguage } from 'react-icons/hi2';

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
  shoeCards: [
    {
      id: 1,
      name: "Wild Rider Layers Unisex Sneakers",
      price: "$121",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/02/sv01/fnd/IND/fmt/png/,Wild-Rider-Layers-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 2,
      name: "Wild Rider Layers 2 Unisex Sneakers",
      price: "$151",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/03/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 3,
      name: "Wild Rider Layers Unisex3 sneakers",
      price: "$161",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/01/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 4,
      name: "PUMA Serve Pro Lite Unisex shoes",
      price: "$261",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/01/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 5,
      name: "PUMA Serve Pro Lite Unisex",
      price: "$321",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374902/11/sv01/fnd/IND/fmt/png/PUMA-Serve-Pro-Lite-Unisex-Shoes",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 6,
      name: "one8 Virat Kohli Basket Classice Unisex Sneakers",
      price: "$371",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375314/01/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 7,
      name: "Caracal SoftFoam+Sneakers",
      price: "$171",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369863/18/sv01/fnd/IND/fmt/png/Caracal-SoftFoam+-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 8,
      name: "Mirage Mox Brightly Packed Shoes",
      price: "$271",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/375168/01/sv01/fnd/IND/fmt/png/Mirage-Mox-Brightly-Packed-Shoes",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 9,
      name: "Future Rider Play On Unisex Sneakers",
      price: "$571",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/69/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      favorite: false,
    },
    {
      id: 10,
      name: "Future Rider2 Play On Unisex Sneakers",
      price: "$571",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/68/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 11,
      name: "Future Rider3 Play On Unisex Sneakers",
      price: "$571",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371149/72/sv01/fnd/IND/fmt/png/Future-Rider-Play-On-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 12,
      name: "Rebound Lay-Up Lo SoftFoam+Mesh Shoes",
      price: "$571",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/370914/01/sv01/fnd/IND/fmt/png/Rebound-Lay-Up-Lo-SoftFoam+-Mesh-Shoes",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
    {
      id: 13,
      name: "one8 Virat Kohli Basket Classic Unisex Sneakers",
      price: "$471",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/375314/02/sv01/fnd/IND/fmt/png/one8-Virat-Kohli-Basket-Classic-Unisex-Sneakers",
      description:
        "With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex. With design elements inspired by the movement and motion of city life, the Wild Rider Layers Unisex Sneakers brings a fresh new dimension to the iconic Rider family.",
      fav: false,
    },
  ],
  errorPage: {
    h1: '404 - PAGE NOT FOUND',
    p:'The page your are looking for might have been removed, had its name changed or is temporarily unavailable',
    button: 'Go back'
  },
  boxAccountLinks: [
    {
      id: 2,
      name: 'Billing & Payments',
      path: '/'
    },
    {
      id: 3,
      name: 'Order History',
      path: '/'
    },
    {
      id: 4,
      name: 'Gift Cards',
      path: '/'
    },
  ],
  accountBoxData: [
    {
      id: 1,
      name : 'Name',
      desc : "Alexander Ivanov",
      icon: <AiOutlineUser/>
    },
    {
      id: 2,
      name : 'Date of Birth',
      desc : "15 July 2005",
      icon: <BsCalendar3/>
    },
    {
      id: 3,
      name : 'Country Region',
      desc : "Sofia, Bulgaria",
      icon: <BsGlobe/>
    },
    {
      id: 4,
      name : 'Language',
      desc : "English ( UK ) - English",
      icon: <HiLanguage/>
    },
    {
      id: 5,
      name : 'Contactable at',
      desc : "alexmmech@gmail.com",
      icon: <AiOutlineMail/>
    },
  ]
};
