import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import InitialBg from "../assets/bhHero.jpg";

export const links = {
  book:
    "https://bookings.nowbookit.com/?accountid=3146bc11-0056-4be9-8114-a7645ff06b3f&venueid=4249&theme=light&colors=hex,b0120a",
  voucher:
    "https://giftcards.nowbookit.com/cards/card-selection?accountid=3146bc11-0056-4be9-8114-a7645ff06b3f&venueid=4249&theme=light&accent=215,15,0",
};

export const social = [
  {
    name: "facebook",
    link: "https://www.facebook.com/ChinchingastronomyPerth",
    icon: <FaFacebookSquare className="social-icon" />,
    color: "fb",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/chinchingastronomy/?hl=en",
    icon: <FaInstagram className="social-icon" />,
    color: "insta",
  },
];

export const contacts = {
  address: " 457 Canning Hwy, Como WA 6152",
  iconAdd: <FaAddressBook />,
  phone: "(08) 9313 3490",
  iconPhone: <AiOutlinePhone />,
  direction:
    "https://www.google.com/maps/place/Chin+Chin+Gastronomy/@-32.0051871,115.857379,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bd07d05eb3bd:0xd994797bad6ca867!8m2!3d-32.0051917!4d115.8595677",
  email: "chinchingastronomy@gmail.com",
  iconEmail: <AiOutlineMail />,
};

export const slides = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: InitialBg,
  },
];
