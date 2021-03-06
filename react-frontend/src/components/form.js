import React, {useState} from 'react'

export default function Form(props) {
  const [chat, setChat] = useState('');

  // On submission of form, send a POST request to Flask server
  function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method : 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({chat})
    }

    // Send POST request and then update states in App.js
    fetch('/sentiment', requestOptions)
      .then(res => res.json())
      .then(res => {
        props.setSentiment(res.sentiment);
        props.setVerdict(res.verdict);
        props.setKeywords(res.keywords);
        props.setSentences(res.worstSentence.map((sentence, i) => {
          return [sentence, res.worstScore[i]];
      }).filter((item) => item[0] !== ''));
      });
  }

  // Handle text area
  function handleChange(e) {
    setChat(e.target.value);
  }

  // Return component
  return (
    <div id="form-container">
      <form id="chat-form" onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={chat} id="chatlog" name="new-input" rows="7" cols="50" placeholder="Input a chatlog and determine its sentiment." />
      <br/>
          <button type="submit" className="btn submitButton btn-lrg btn-danger">
            Check Toxicity
          </button>
          <div class="divider"/>
          <button className="btn btn-lrg btn-secondary" onClick={() => setChat('')}>
            Reset
          </button>
      </form>
    </div>
  )
}
