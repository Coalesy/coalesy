"use client";
import React, { useState } from "react";
import { SelectInput } from "./SelectInput";
import { Deploy } from "./dropdowns/Deploy";
import CreateNft from "./CreateNft";
import CreateContract from "./CreateContract";

const Create = ({ setIsActive }) => {
  const [isCreateComponent, setIsCreateComponent] = useState(false);
  const questions = [
    "What Is an NFT?",
    "What can NFT be used for?",
    "How to create an NFT - On Coalesy?",
    "How to create an NFT - On Coalesy?",
  ];

  return (
    <div className="flex flex-col gap-5 mt-14 ml-10 py-8">
      <div className="">
        <div className="flex items-center text-sm gap-1">
          <span
            onClick={() => setIsActive(false)}
            className="text-white cursor-pointer opacity-70"
          >
            NFTs
          </span>
          <span className="text-white">{">"}</span>
          <span className="text-white">Create contract</span>
          {isCreateComponent && (
            <>
              <span className="text-white">{">"}</span>
              <span className="text-white">Create nft</span>
            </>
          )}
        </div>
      </div>
      <div className="flex  gap-10">
        {isCreateComponent ? (
          <CreateNft />
        ) : (
          <CreateContract setIsCreateComponent={setIsCreateComponent} />
        )}
        <div className="w-[40%] flex flex-col gap-4">
          <video src="" controls className="h-[170px]"></video>
          <div className="flex flex-col gap-5">
            <h1 className="text-[20px]">Related questions</h1>
            <div className="flex flex-col gap-4">
              {questions.map((question, i) => (
                <span key={i} className="text-white text-sm opacity-70">
                  {question}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
