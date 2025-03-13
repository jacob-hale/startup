import React, { useRef, useState, useEffect } from "react";

export function ShareLove() {
  const loveImageRef = useRef(null);
  const [currentMessage, setCurrentMessage] = useState("Kirby is feeling 😴 tired");
  const [notifications, setNotifications] = useState([]);
  const [quote, setQuote] = useState("");

  // Mock data
  const messages = [
    "Kirby is feeling 😴 tired",
    "Luigi is feeling 😢 sad",
    "Bowser is feeling 😡 angry",
    "Link is feeling 😐 plain",
  ];

  // Fetch a random quote from the backend
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/quote');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data.quote);
      } catch (error) {
        console.error(error);
        // setQuote("Failed to load quote. Please try again later.");
      }
    };

    fetchQuote();
  }, []);

  // Mock notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const userName = `User-${Math.floor(Math.random() * 100)}`;
      const newNotification = `${userName} sent you love! ❤️`;

      setNotifications((prevNotifications) => [
        newNotification,
        ...prevNotifications,
      ]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Dismiss notification
  const dismissNotifications = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Love animation
  const loveAnimation = () => {
    if (loveImageRef.current) {
      loveImageRef.current.classList.remove("love-active");
      void loveImageRef.current.offsetWidth; 
      loveImageRef.current.classList.add("love-active");
    }
  };

  // Refresh message
  const handleRefresh = () => {
    let randomMessage;
    do {
      randomMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (randomMessage === currentMessage);
    setCurrentMessage(randomMessage);
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
        <p>{quote}</p> {/* Display the random quote */}
      </div>
      <button type="button" onClick={handleRefresh}>Refresh</button>

      {/* Notifications */}
      <div className="notifications">
        <h4>Notifications</h4>
        {notifications.length > 0 ? (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => dismissNotifications(notification.id)}
                style={{ cursor: "pointer" }}
              >
                {notification}
              </li>
            ))}
          </ul>
        ) : (
          <p>No new notifications.</p>
        )}
      </div>
    </main>
  );
}