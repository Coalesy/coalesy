import React from "react";

function DateDrop() {
  return (
    <div
      // ref={dropdownRef}
      className="bg-[#282232] opacity-70 w-[205px] flex flex-col gap-2 p-4 absolute z-1000 mt-[145px] rounded-[5px] -ml-[16px]"
    >
      <p>Upcoming</p>
      <p>Past</p>
    </div>
  );
}

export default DateDrop;
