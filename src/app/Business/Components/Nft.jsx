import Image from "next/image";
import React from "react";

export const Nft = ({
  item,
  vol,
  floor,
  sales,
  owners,
  image,
  listed,
  logo,
}) => {
  return (
    <tr className="w-full ">
      <td colspan="2" className="border">
        <div className="flex gap-4">
          {item}
          <Image src={image} alt="nft" />
        </div>
      </td>
      <td className="p-3 border">
        <div className="flex items-center gap-2">
          <Image src={logo} alt={item} width={10} height={10} />
          {vol}
        </div>
      </td>
      <td className="p-3  border">
        <div className="flex items-center gap-2">
          <Image src={logo} alt={item} width={10} height={10} />
          {floor}
        </div>
      </td>
      <td className="p-3  border">
        <div className="flex items-center gap-2">
          <Image src={logo} alt={item} width={10} height={10} />
          {sales}
        </div>
      </td>
      <td className="p-3  border">{owners}</td>
      <td className="p-3  border">{listed}</td>
    </tr>
  );
};
