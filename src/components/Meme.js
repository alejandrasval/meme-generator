import React, { useState } from "react";
import { dataMemes } from "../data";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(dataMemes);

  function handleClick() {
    const memeArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length + 1);
    console.log(randomNum);
    const memeUrl = memeArray[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memeUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={handleClick} className="form-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="containerImg">
        <img className="memeImg" src={meme.randomImage} alt="" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
