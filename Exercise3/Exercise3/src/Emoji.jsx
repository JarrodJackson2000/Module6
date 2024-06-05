import { useState } from "react";

function EmojiChanger() {
  const [happy, setHappy] = useState(true);

  function changeMood() {
    setHappy(!happy);
  }
  return (
    <>
      <div className="MoodChanger componentBox">
        Current Mood: {happy ? "\u{1F60A}" : "\u{1F622}"}
      </div>
      <button onClick={changeMood}>Change Mood</button>
    </>
  );
}

export default EmojiChanger;
