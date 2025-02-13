import React from 'react';

export function MoodTracker() {
  return (
    <main>
    <h2>Hello, ______! (Retrieve user's name from database after login)</h2>
    {/* <!-- <p>*3rd part placeholder will check the date. If the date isn't found in the database of entries, then the user can submit an entry. That way the user can only enter one entry per day</p> --> */}
    <h2>How are you feeling today?</h2>
    {/* <!-- form choose emotion option --> */}
      <div>
        <select id="select" name="varSelect" className="select">
          <option value="" selected disabled hidden>Select Emotion</option>
          <option>😊 happy</option>
          <option>😢 sad</option>
          <option>😡 angry</option>
          <option>😴 tired</option>
          <option>😐 plain</option>
        </select>
    </div>

    {/* <!-- form for optional text entry --> */}
    <div>
        <label for="textarea">Add a note (optional): </label>
        <textarea id="textarea" name="varTextarea"></textarea>
        <button type="submit" id="mood-submit">Submit</button>
        {/* <!-- <p>*Submits emotion, note, with date into the database</p> --> */}
    </div>
    {/* <!-- calendar that retrieves previous entries --> */}
    <div>
        {/* <!-- <p>*calendar feature will retrieve previous entries stored on the database</p> --> */}
        <label for="date">Past Entries</label>
        <input type="date" name="varDate" id="date" />
    </div>
    <p>On _______, you felt (happy, sad, angry, tired, or plain).</p>
    {/* <!-- <p>*if user entered a note* You said: "User's note"</p> --> */}
  </main>
  );
}