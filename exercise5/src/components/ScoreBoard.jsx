import React from "react";

function ScoreBoard({ value }) {
    return (
        <div
            style={{
                margin: "10px",
                padding: "10px",
                backgroundColor: "#78e400",
                borderRadius: "8px",
                border: "2px solid black",
                color: "#9d42f6",
                fontWeight: "bold",
                fontSize: "20px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Sarabun",
            }}
        >
            {value === 0 ? "MIN" : value === 10 ? "MAX" : value}
        </div>
    );
}

export default ScoreBoard;
