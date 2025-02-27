import React, { useRef, useState } from "react";

export function ShareLove() {
  const loveImageRef = useRef(null);
  const [loveCount, setLoveCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("Kirby is feeling 😴 tired");
  const [previousMessage, setPreviousMessage] = useState("");

  // Mock data
  const messages = [
    "Kirby is feeling 😴 tired",
    "Luigi is feeling 😢 sad",
    "Bowser is feeling 😡 angry",
    "Link is feeling 😐 plain",
  ];

  const loveAnimation = () => {
    if (loveImageRef.current) {
      loveImageRef.current.classList.remove("love-active");
      void loveImageRef.current.offsetWidth; // Force reflow
      loveImageRef.current.classList.add("love-active");
    }
    setLoveCount(loveCount + 1);
  };

  const handleRefresh = () => {
    // Mock
    let randomMessage;
    do {
      randomMessage = messages[Math.floor(Math.random() * messages.length)];

    } while (randomMessage === currentMessage);
    setPreviousMessage(currentMessage);
    setCurrentMessage(randomMessage);
    setLoveCount(0);
  };

  return (
    <main>
      <h3>Share Some Love</h3>
      <div className="love-card">
        <h4>{currentMessage}</h4>
        <p>Send some love!</p>
        <button type="button" id="heart" onClick={loveAnimation}>
        <span className="heart-emoji">❤️</span>
        </button>
        <img
          src="favicon.ico"
          alt="Hugging a heart emoji"
          className="love-image"
          ref={loveImageRef}
        />
        <p>Total love sent: {loveCount}</p>
      </div>
      <button type="button" onClick={handleRefresh}>Refresh</button>
    </main>
  );
}