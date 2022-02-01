import React from "react";
import { dataMemes } from "../data";

export default function Meme() {
  function handleClick() {
    const memeArray = dataMemes.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length + 1);
    console.log(randomNum);
    const memeUrl = memeArray[randomNum].url;
    console.log(memeUrl)
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button onClick={handleClick} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
