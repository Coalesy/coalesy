import React from "react";
import discord from "../Images/discord.svg";
import instagram from "../Images/instagram.svg";
import medium from "../Images/medium.svg";
import twitter from "../Images/new-twitter.svg";
import youtube from "../Images/youtube.svg";
import telegram from "../Images/telegram.svg";
import Image from "next/image";

export const Social = [
  {
    Icon: discord,
    link: "",
  },
  {
    Icon: telegram,
    link: "",
  },
  {
    Icon: twitter,
    link: "",
  },
  {
    Icon: instagram,
    link: "",
  },
  {
    Icon: youtube,
    link: "",
  },
  {
    Icon: medium,
    link: "",
  },
];

export const Socials = () => {
  return (
    <div className="flex gap-[17px]">
      {Social.map((soc, index) => (
        <Image src={soc.Icon} key={index} alt="social" />
      ))}
    </div>
  );
};
