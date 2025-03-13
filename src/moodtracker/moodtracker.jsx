import React, { useState, useEffect } from 'react';

export function MoodTracker() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [username, setUsername] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);

  // retrieve user name from storage
  useEffect (() => {
    // mock
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
    }
  }, []);


  // load past entries
  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch('/api/mood-entries');
      const data = await response.json();
      setEntries(data);
    };
  
    fetchEntries();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  const handleSubmit = async () => {
    if (!mood) {
      alert('Please select a mood.');
      return;
    }
  
    const today = formatDate(new Date());
    const newEntry = {
      date: today,
      mood,
      note,
    };
  
    const response = await fetch('/api/mood-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });
  
    if (response.ok) {
      const updatedEntries = await response.json();
      setEntries(updatedEntries);
      alert('Entry submitted successfully!');
      setMood('');
      setNote('');
    } else {
      const errorData = await response.json();
      alert(errorData.error || 'Failed to submit entry.');
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    const formattedDate = formatDate(new Date(date + "T00:00:00"));
    
    const entry = entries.find((entry) => entry.date === formattedDate);
    
    setSelectedEntry(entry || null);
  };

  return (
    <main>
    <h2>Hello, {username}!</h2>
    <h2>How are you feeling today?</h2>
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
        <button type="button" id="mood-submit" onClick={handleSubmit}>
          Submit
        </button>
    </div>
    <div>
        <h3>Past Entries</h3>
        <label htmlFor="date">Select a date: </label>
        <input
          type="date"
          id="date"
          name="varDate"
          value={selectedDate}
          onChange={handleDateChange}
        />

        {selectedEntry ? (
          <div>
            <p>On {selectedEntry.date}, you felt {selectedEntry.mood}.</p>
            {selectedEntry.note && <p>You said: "{selectedEntry.note}"</p>}
          </div>
        ) : (
          selectedDate && <p>No entry found for this date.</p>
        )}
    </div>
    
  </main>
  );
}