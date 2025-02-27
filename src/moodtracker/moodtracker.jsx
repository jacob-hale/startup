import React, { useState, useEffect } from 'react';

export function MoodTracker() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [username, setUsername] = useState("");

  // retrieve user name from storage
  useEffect (() => {
    // mock
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
    }
  }, []);


  // load past entries
  useEffect (() => {
    // mock
    const savedEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    setEntries(savedEntries);
  }, []);


  const handleSubmit = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood,
      note,
    };
    const updateEntries = [...entries, newEntry];
    localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
    setMood("");
    setNote("");
  };

  return (
    <main>
    <h2>Hello, {username}!</h2>
    {/* <!-- <p>*3rd part placeholder will check the date. If the date isn't found in the database of entries, then the user can submit an entry. That way the user can only enter one entry per day</p> --> */}
    <h2>How are you feeling today?</h2>
    {/* <!-- form choose emotion option --> */}
      <div>
        <select 
          id="select" 
          name="varSelect" 
          className="select" 
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="" disabled hidden>Select Emotion</option>
          <option>😊 happy</option>
          <option>😢 sad</option>
          <option>😡 angry</option>
          <option>😴 tired</option>
          <option>😐 plain</option>
        </select>
    </div>

    {/* <!-- form for optional text entry --> */}
    <div>
        <label htmlFor="textarea">Add a note (optional): </label>
        <textarea 
          id="textarea" 
          name="varTextarea"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button type="submit" id="mood-submit" onClick={handleSubmit}>
          Submit
        </button>
        {/* <!-- <p>*Submits emotion, note, with date into the database</p> --> */}
    </div>
    {/* <!-- calendar that retrieves previous entries --> */}
    <div>
        {/* <!-- <p>*calendar feature will retrieve previous entries stored on the database</p> --> */}
        <label htmlFor="date">Past Entries</label>
        <input type="date" name="varDate" id="date" />
    </div>
    <p>On _______, you felt (happy, sad, angry, tired, or plain).</p>
    {/* <!-- <p>*if user entered a note* You said: "User's note"</p> --> */}
  </main>
  );
}