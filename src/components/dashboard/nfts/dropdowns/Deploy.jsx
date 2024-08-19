import Image from "next/image";
import React from "react";

export const Deploy = ({
  isOpen,
  isComplete,
  setIsCreateComponent,
  setIsDeploy,
}) => {
  const handleCreateNft = () => {
    setIsDeploy(false);
    setIsCreateComponent(true);
  };
  return (
    isOpen && (
      <div
        className={
          "h-screen fixed bg-[rgba(0,0,0,0.2)] top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center"
        }
      >
        {isComplete ? (
          <div
            className={`${
              isOpen ? " translate-y-0" : " translate-y-[-100%]"
            } transition-transform duration-200 bg-[#0a0511] shadow gap-4 flex items-center justify-center flex-col rounded-2xl max-w-[400px] px-4 w-full h-[350px]`}
          >
            <Image
              src={"/assets/dashboard/Vector(2).svg"}
              alt="logo"
              height={50}
              width={50}
              priority
            />
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-[25px]">Deployed successfully</h2>
              <p className="text-sm opacity-70">
                We&apos;ve deployed your contract to blockchain. You can now
                create your collection
              </p>
              <div className="flex items-center justify-center">
                <button
                  onClick={handleCreateNft}
                  className="py-2 w-[50%] mt-5 px-8 rounded bg-[#FF5B96] text-white text-sm"
                >
                  Create collection
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`${
              isOpen ? " translate-y-0" : " translate-y-[-100%]"
            } transition-transform duration-200 bg-[#0a0511] shadow gap-4 flex items-center justify-center flex-col rounded-2xl max-w-[400px] px-4 w-full h-[350px]`}
          >
            <Image
              src={"/assets/dashboard/Vector(1).svg"}
              alt="logo"
              height={50}
              width={50}
              priority
            />
            <div className="text-center flex flex-col gap-3">
              <h2 className="text-[25px]">Deploying</h2>
              <p className="text-sm opacity-70">
                We&apos;re deploying your contract. Please confirm from your
                wallet.
              </p>
            </div>
          </div>
        )}
      </div>
    )
  );
};
