import React, { useRef } from "react";

export function ShareLove() {
  const loveImageRef = useRef(null);

  const loveAnimation = () => {
    if (loveImageRef.current) {
      loveImageRef.current.classList.remove("love-active");
      void loveImageRef.current.offsetWidth; // Force reflow
      loveImageRef.current.classList.add("love-active");
    }
  };

  return (
    <main>
      <h3>Share Some Love</h3>
      <div className="love-card">
        <h4>Bob is feeling tired</h4>
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
      </div>
      <button type="button">Refresh</button>
    </main>
  );
}