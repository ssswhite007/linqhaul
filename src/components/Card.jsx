import React, { useEffect, useState } from "react";
import Config from "./Config/Config";

const Card = ({ visible, position, content }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [cardVisible, setCardVisible] = useState(false);
  const [step, setStep] = useState();

  useEffect(() => {
    if (visible) {
      if (
        content === "Cylinder014_3" ||
        content === "Cylinder014_1" ||
        content === "Cylinder014_2" ||
        content === "Cylinder014_5"
      ) {
        setTitle(Config.controlTower.title);
        setImage(Config.controlTower.image);
        setDescription(Config.controlTower.description);
        setStep(Config.controlTower.step);
        setCardVisible(true);
        return;
      }
      if (
        content === "Cube026" ||
        content === "Cube026_1" ||
        content === "Cube026_2" ||
        content === "Cube026_3" ||
        content === "Cube026_4" ||
        content === "Cube026_5"
      ) {
        setTitle(Config.documentation.title);
        setImage(Config.documentation.image);
        setDescription(Config.documentation.description);
        setStep(Config.documentation.step);
        setCardVisible(true);
        return;
      }
      if (
        content === "Cube011" ||
        content === "Cube011_1" ||
        content === "Cube012" ||
        content === "Cube012_1"
      ) {
        setTitle(Config.entryGate.title);
        setImage(Config.entryGate.image);
        setDescription(Config.entryGate.description);
        setStep(Config.entryGate.step);
        setCardVisible(true);
        return;
      }
      if (
        content === "Cube170" ||
        content === "Cube171_1" ||
        content === "Cube171_2" ||
        content === "Cube171_3"
      ) {
        setTitle(Config.tareWeight.title);
        setImage(Config.tareWeight.image);
        setDescription(Config.tareWeight.description);
        setStep(Config.tareWeight.step);
        setCardVisible(true);
        return;
      }
      if (
        content === "Cube180" ||
        content === "Cube180_1" ||
        content === "Cube180_2" ||
        content === "Cube180_3"
      ) {
        setTitle(Config.grossWeight.title);
        setImage(Config.grossWeight.image);
        setDescription(Config.grossWeight.description);
        setStep(Config.grossWeight.step);
        setCardVisible(true);
        return;
      }
    //   console.log(content)
      setCardVisible(false);
    } else {
      setCardVisible(false);
    }
  }, [content, visible]);

  if (!cardVisible) return null;

  // Tooltip dimensions
  const tooltipWidth = 250; // Set to the width of your tooltip
  const tooltipHeight = 400; // Set to the height of your tooltip

  // Window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate adjusted position
  let adjustedX = position.x;
  let adjustedY = position.y;

  // Adjust for horizontal bounds
  if (adjustedX + tooltipWidth / 2 > windowWidth) {
    adjustedX = windowWidth - tooltipWidth / 2 - 10; // 10px padding from the edge
  } else if (adjustedX - tooltipWidth / 2 < 0) {
    adjustedX = tooltipWidth / 2 + 10; // 10px padding from the edge
  }

  // Adjust for vertical bounds
  if (adjustedY - tooltipHeight < 0) {
    adjustedY = tooltipHeight + 10; // 10px padding from the top
  } else if (adjustedY > windowHeight) {
    adjustedY = windowHeight - 10; // 10px padding from the bottom
  }

  return (
    <div
      className="border border-[#00FFF1] w-[250px]"
      style={{
        position: "absolute",
        left: adjustedX,
        top: adjustedY,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
        pointerEvents: "none",
        transform: "translate(-50%, -100%)",
      }}
    >
      <div className="p-2 gap-2">
        <div className="flex justify-center mb-2">
          <img src={image} className="h-[150px]" alt={title} />
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[20px] h-[20px] rounded-[10px] bg-[#00FFF1] text-[15px] text-[#000000] font-bold flex justify-center items-center">
            {step}
          </div>
          <div className="text-[#00FFF1] text-[15px]">{title}</div>
        </div>
        <div className="pl-[30px]">{description}</div>
      </div>
    </div>
  );
};

export default Card;
