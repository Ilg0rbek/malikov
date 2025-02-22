import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaTelegram,
  FaCode,
  FaInstagram
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Malikov Ilg'or. All Rights Reserved.`,
  author: {
    name: "Malikoff I",
    accounts: [
      {
        url: "https://github.com/Ilg0rbek",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://t.me/techcornerjs",
        label: "Telegram",
        type: "telegram",
        icon: <FaTelegram />
      },
      {
        url: "https://www.instagram.com/ilgorbek.abdumalikovv",
        label: "Instagram Account",
        type: "insta",
        icon: <FaInstagram />
      },
      {
        url: "https://www.linkedin.com/in/abdumalikov-ilgorbek/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:ilgorbekabdumalikov331@gmail.com",
        label: "Mail Ilgor",
        type: "mail",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
