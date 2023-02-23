import React from "react";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import ScoreBoard from "./ScoreBoard";

function Card({ e, upVoteHandler, downVoteHandler }) {
    return (
        <div
            style={{
                background: "#fcecd6",
                width: "700px",
                height: "280px",
                borderRadius: "15px",
                padding: "20px",
                margin: "1px",
                border: "2px solid black",
            }}
        >
            <img src={e.myPic} />
            <h2>{e.titleType}</h2>
            <h4>{e.name}</h4>
            <p>{e.description}</p>
            <div
                style={{
                    display: "flex",
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                }}
            >
                <IncreaseButton clickHandler={upVoteHandler} />
                <ScoreBoard value={e.score} />
                <DecreaseButton clickHandler={downVoteHandler} />
            </div>
        </div>
    );
}

export default Card;
