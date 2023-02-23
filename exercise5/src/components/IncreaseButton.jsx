import React from "react";

function IncreaseButton({ clickHandler }) {
    return (
        <button
            style={{ margin: "15px", padding: "5px" }}
            onClick={clickHandler}
        >
            Click to Vote
        </button>
    );
}

export default IncreaseButton;
