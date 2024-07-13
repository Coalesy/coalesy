"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const Img = ({
  darkModeSrc,
  lightModeSrc,
  height,
  width,
  properties,
}) => {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    setIsLightMode(false);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const storedLightMode = localStorage.getItem("isLightMode");
      if (storedLightMode) {
        setIsLightMode(JSON.parse(storedLightMode));
      }
    }, 1000);
  }, [isLightMode]);
  return (
    <Image
      priority
      height={height}
      width={width}
      src={isLightMode ? lightModeSrc : darkModeSrc}
      className={`${properties} `}
      alt="hero"
    />
  );
};
