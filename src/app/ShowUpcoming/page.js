import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShowUpcoming from "@/components/nft/marketplace/ShowUpcoming";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="footer-container">
        <ShowUpcoming />
      </div>
      <Footer/>
    </div>
  );
};

export default page;
