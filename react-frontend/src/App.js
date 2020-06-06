import React, {useState, useEffect} from 'react';
import Form from './components/form'
import VerdictStyle from './components/verdictStyle'
import './App.css'


function App() {
  const [sentiment, setSentiment] = useState(0);
  const [verdict, setVerdict] = useState("???");

  useEffect(() => {
    fetch('/sentiment')
      .then(res => res.json())
      .then(data => {
      setSentiment(data.sentiment);
      setVerdict(data.verdict);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form setSentiment={setSentiment} setVerdict={setVerdict}/ >
      <div id="result">
        <span id="sentiment">Sentiment: {sentiment}</span>
        <br/>
        <span id="verdict">Verdict: <VerdictStyle verdict={verdict}/></span>
      </div>
    </div>
  );
}

export default App;
