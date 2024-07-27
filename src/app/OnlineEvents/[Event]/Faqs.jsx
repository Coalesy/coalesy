import React from "react";
import { Faq } from "./Faq";
const faq = [
  {
    Ques: "When is Solana launching their solidity program?",
    Ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui aliquam architecto enim totam mollitia expedita, in soluta labore similique.",
  },
  {
    Ques: "When is Solana launching their solidity program?",
    Ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui aliquam architecto enim totam mollitia expedita, in soluta labore similique.",
  },
  {
    Ques: "When is Solana launching their solidity program?",
    Ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui aliquam architecto enim totam mollitia expedita, in soluta labore similique.",
  },
  {
    Ques: "When is Solana launching their solidity program?",
    Ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui aliquam architecto enim totam mollitia expedita, in soluta labore similique.",
  },
  {
    Ques: "When is Solana launching their solidity program?",
    Ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui aliquam architecto enim totam mollitia expedita, in soluta labore similique.",
  },
];
export const Faqs = () => {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="leading-[24.2px] text-lg font-bold">Common question</h3>
      <ul className="container flex gap-10 flex-col">
        {faq.map((item, index) => (
          <Faq key={index} {...item} index={index} />
        ))}
      </ul>
    </div>
  );
};
