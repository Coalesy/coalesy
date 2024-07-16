import Image from "next/image";
import React from "react";

const Trusted = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center gap-4 py-8">
        <div>
          <Image
            className=""
            src="./line.svg"
            alt="Next.js Logo"
            width={92}
            height={33}
          />
        </div>
        <div>
          <h1 className="text-[20px]">Backed by the best</h1>
        </div>
        <div>
          <Image
            className=""
            src="./line.svg"
            alt="Next.js Logo"
            width={92}
            height={33}
          />
        </div>
      </div>

      <div className="flex justify-center">
      <Image
            className=""
            src="./trusted.svg"
            alt="Next.js Logo"
            width={932}
            height={63}
          />
      </div>
    </div>
  );
};

export default Trusted;
