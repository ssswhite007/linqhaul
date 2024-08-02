import React, { useEffect, useState } from "react";
import CardTooltip from "./Config/CardTooltip";
const MainCard = ({ image, title, description, module, benefits }) => {
  return (
    <div
      className={"border border-[#00FFF1] w-[250px]"}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "15px",
        borderRadius: "5px",
        pointerEvents: "none",
      }}
    >
      <div className=" gap-2 flex">
        <div className="w-[50px] h-[50px] rounded-[25px] bg-black flex items-center px-1 mb-1">
          <img src={image} className="w-full" />
        </div>
        <div className="flex items-center font-bold text-[#00FFF1]">
          {title}
        </div>
      </div>
      <div className="text-[12px] leading-[14px] mb-2">
        {description}
      </div>

      <div className="font-bold text-[#00FFF1] text-[14px] mb-3">Key Modules:</div>
      <div className="grid grid-cols-4 m-auto gap-2 border-b pb-2 border-b-[#00FFF1] mb-2">
        <div className="flex flex-col items-center text-center tooltip">
            <div className="flex items-center"><img src={module[0].image} className="w-[50x] h-[50px]"/></div>
            <CardTooltip title={module[0].title}/>
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={module[1].image} /></div>
            
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={module[2].image} /></div>
            
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={module[3].image} /></div>
            
        </div>
      </div>

      <div className="font-bold text-[#00FFF1] text-[14px] mb-3">Benefits:</div>
      <div className="grid grid-cols-4 m-auto gap-2 border-b pb-2 border-b-[#00FFF1]">
        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={benefits[0].image} className="w-[50x] h-[50px]"/></div>
            
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={benefits[1].image}  className="w-[50x] h-[50px]"/></div>
            
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={benefits[2].image} className="w-[50x] h-[50px]" /></div>
            
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center"><img src={benefits[3].image} className="w-[50x] h-[50px]" /></div>
            
        </div>
      </div>
    </div>
  );
};

export default MainCard;
