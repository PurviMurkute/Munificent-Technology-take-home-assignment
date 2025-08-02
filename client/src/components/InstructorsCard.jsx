import React from "react";

const InstructorsCard = ({ image, name, email }) => {
  return (
    <div className="flex justify-center items-center w-[420px] bg-[#d9d9d9] px-4 md:px-8 py-2 rounded-md shadow border-1 border-[#FF5400]">
      <img
        src={image}
        alt="picture"
        className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full m-2 md:m-3 object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium py-2 md:p-3">{name}</h3>
        <p className="text-sm md:text-md">{email}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
