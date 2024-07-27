import Image from "next/image";
import React from "react";

const CreateContract = () => {
  return (
    <div className="col-span-4">
      <h2>Create Contract</h2>
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4">
            <p className="h-[30px] w-[30px] grid place-items-center rounded-full p-3 bg-[#443448]">
              1
            </p>
            <div className="flex flex-col gap-[13px]">
              <p>Logo Image</p>
              <input type="file" />
            </div>
          </div>
          <div className="flex  gap-4">
            <p className="h-[30px] w-[30px] grid place-items-center rounded-full p-3 bg-[#443448]">
              2
            </p>
            <div>
              <p>Contract details</p>
              <div className="flex gap-[13px]">
                <div className="flex flex-col gap-[13px]">
                  <p>Collection Name</p>
                  <select name="" id="" className="bg-[#443448]">
                    <option value="Biance Token Nft">Biance Token Nft</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[13px]">
                  <p>Symbol</p>
                  <div>BTF</div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px]">
                <p>Supply</p>
                <input type="number" className="bg-[#443448]" />
              </div>
            </div>
          </div>
          <div className="flex  gap-4">
            <p className="h-[30px] w-[30px] grid place-items-center rounded-full p-3 bg-[#443448]">
              3
            </p>
            <div className="flex flex-col gap-[13px]">
              <p>Blockchain</p>
              <select className="bg-[#443448]">
                <option value="">Etherum-ERC20</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <Image />
          <div>
            <ul>
              <li>What Is an NFT?</li>
              <li>What can NFT be used for?</li>
              <li>How to create an NFT - On Coalesy?</li>
              <li>How to create an NFT - On Coalesy?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
