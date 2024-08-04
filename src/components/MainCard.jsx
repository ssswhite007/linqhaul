import React from 'react';
import PropTypes from 'prop-types';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CardTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    color: 'white',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    fontSize: '16px',
  },
}));

const MainCard = ({ image, title, description, module, benefits }) => (
  <div
    className="border border-[#00FFF1] w-[250px] bg-black/70 text-white p-4 rounded-md"
  >
    <div className="flex gap-2 mb-2">
      <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="flex items-center font-bold text-[#00FFF1]">
        {title}
      </div>
    </div>
    <div className="text-xs leading-[14px] mb-2">{description}</div>

    <div className="font-bold text-[#00FFF1] text-sm mb-3">Key Modules:</div>
    <div className="grid grid-cols-4 gap-2 mb-2 border-b pb-2 border-b-[#00FFF1]">
      {module.map((mod, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <CardTooltip title={mod.title}>
            <div className="flex items-center">
              <img src={mod.image} alt={mod.title} className="w-[50px] h-[50px]" />
            </div>
          </CardTooltip>
        </div>
      ))}
    </div>

    <div className="font-bold text-[#00FFF1] text-sm mb-3">Benefits:</div>
    <div className="grid grid-cols-4 gap-2">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <CardTooltip title={benefit.title}>
            <div className="flex items-center">
              <img src={benefit.image} alt={benefit.title} className="w-[50px] h-[50px]" />
            </div>
          </CardTooltip>
        </div>
      ))}
    </div>
  </div>
);

MainCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  module: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainCard;
