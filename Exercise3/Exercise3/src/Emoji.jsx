import { useState } from "react";

function EmojiChanger() {
  const [emoji, setEmoji] = useState("\u{1F60A}");

  function changeMood() {
    if (emoji == "\u{1F60A}") {
      setEmoji("\u{1F622}");
    } else {
      setEmoji("\u{1F60A}");
    }
  }
  return (
    <>
      <div className="MoodChanger componentBox">Current Mood: {emoji}</div>
      <button onClick={changeMood}>Change Mood</button>
    </>
  );
}

export default EmojiChanger;
