import React, {useState} from 'react'

export default function Form(props) {
  const [chat, setChat] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method : 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({chat})
    }

    fetch('/sentiment', requestOptions)
      .then(res => res.json())
      .then(res => {
        props.setSentiment(res.sentiment);
        props.setVerdict(res.verdict);
      });
  }

  function handleChange(e) {
    setChat(e.target.value);
  }

  return (
    <div id="form-container">
      <form id="chat-form" onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-input" id="text-description">
            Verdict.
          </label>
        </h2>
        <textarea onChange={handleChange} value={chat} id="chatlog" name="new-input" rows="5" cols="50" placeholder="Input a chatlog and determine its sentiment." />
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
