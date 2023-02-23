import { useState } from "react";
import "./App.css";
// import IncreaseButton from "./assets/components/IncreaseButton";
// import DecreaseButton from "./assets/components/DecreaseButton";
// import ScoreBoard from "./assets/components/ScoreBoard";
import Card from "./components/Card";
import data from "./data.json";

function App() {
    const [cards, setCards] = useState(data);

    function downVoteHandler(index) {
        if (cards[index].score > 0) {
            let temp = [...cards];
            temp[index] = { ...cards[index], score: cards[index].score - 1 };
            setCards(temp);
        } else {
            alert("Cannot Unvote");
        }
    }

    function upVoteHandler(index) {
        if (cards[index].score < 10) {
            let temp = [...cards];
            temp[index] = { ...cards[index], score: cards[index].score + 1 };
            setCards(temp);
        } else {
            alert("Cannot Vote More");
        }
    }

    return (
        <div
            className="App"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center",
                    color: "#f6c31e",
                    fontSize: "30px",
                    fontWeight: "bold",
                }}
            >
                โหวตอาหาร
            </div>

            {/* {cards.map((e, idx) => (
                <div
                    key={idx}
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
                        <IncreaseButton
                            clickHandler={() => upVoteHandler(idx)}
                        />
                        <ScoreBoard value={e.score} />
                        <DecreaseButton
                            clickHandler={() => downVoteHandler(idx)}
                        />
                    </div>
                </div>
            ))} */}
            {cards.map((e, idx) => (
                <Card
                    e={e}
                    key={idx}
                    upVoteHandler={() => upVoteHandler(idx)}
                    downVoteHandler={() => downVoteHandler(idx)}
                />
            ))}
        </div>
    );
}

export default App;
