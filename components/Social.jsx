import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, Fatwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Md-Rifat-Islam"},
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/muhammad-rifat-islam-9ab376230/"},
    { icon: <FaYoutube />, path: ""},
    { icon: <FaTwitter />, path: ""},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
    );
};

export default Social;