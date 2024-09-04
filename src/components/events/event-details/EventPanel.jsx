import React from "react";

const EventPanel = ({handleGetLabel}) => {
  const panneldata = [
    {
      icon: "",
      label: "All",
      value: "",
    },
    {
      icon: "",
      label: "Gaming",
      value: "",
    },
    {
      icon: "",
      label: "Entertainment",
      value: "",
    },
    {
      icon: "",
      label: "Blockchain",
      value: "",
    },
    {
      icon: "",
      label: "Education",
      value: "",
    },
    {
      icon: "",
      label: "Music",
      value: "",
    },
    {
      icon: "",
      label: "Dao",
      value: "",
    },
  ];
  return (
    <div>
      <div>
        {panneldata.map((pannel, i) => (
          <div key={i} onClick={()=> handleGetLabel(pannel.label)}>
            <span>{pannel.icon}</span>
            <span>{pannel.label}</span>
            <span>{pannel.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPanel;
