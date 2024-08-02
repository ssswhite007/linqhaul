import React from "react";

const CardTooltip = (props) => {
    const {title} = props
    // console.log(imageurl)
    return (
        <div className="tooltiptext">
            {title}
        </div>
    )
}

export default CardTooltip