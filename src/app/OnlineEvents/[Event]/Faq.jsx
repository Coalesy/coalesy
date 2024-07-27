import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

export const Faq = ({ Ques, ans, index }) => {
  return (
    <li>
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <p className="bg-[#443448] rounded-full grid items-center p-3 h-[34px] w-[34px] place-content-center">
            {index + 1}
          </p>
          <h3>{Ques}</h3>
        </div>
        <IoIosArrowRoundDown />
      </div>
      <p>{ans}</p>
    </li>
  );
};
