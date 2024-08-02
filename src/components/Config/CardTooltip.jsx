import React from "react";

const CardTooltip = (props) => {
    const {title} = props
    // console.log(imageurl)
    return (
        <div className="tooltiptext bg-white"
            onMouseOver={()=> console.log("here")}
        >
            {title}
        </div>
    )
}

export default CardTooltip