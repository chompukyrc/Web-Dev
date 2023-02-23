import React from "react";

// destructuring
function DecreaseButton({ clickHandler }) {
    return (
        <button
            style={{ margin: "15px", padding: "5px" }}
            onClick={clickHandler}
        >
            Click to Unvote
        </button>
    );
}

export default DecreaseButton;
