import React, {useState} from 'react';
import Form from './components/form'
import Results from './components/results'
import Logo from './images/logo.png'
import './App.css'

function App() {
  // Set up states for app
  const [sentiment, setSentiment] = useState(0);
  const [verdict, setVerdict] = useState("???");
  const [sentences, setSentences] = useState([]);
  const [keywords, setKeywords] = useState([]);

  // Return App component
  return (
    <div className="App">
      <div className="header">
        <img id="logo" src={Logo}/><span>Verdict.</span>
      </div>
      <div className="row">
        <div id="left-column" className="column">
          <Form setSentences={setSentences} setKeywords={setKeywords} setSentiment={setSentiment} setVerdict={setVerdict}/>
        </div>

        <div id="right-column" className="column">
          <Results sentiment={sentiment} keywords={keywords} verdict={verdict} sentences={sentences}/>
        </div>
      </div>
    </div>
  );
}

export default App;
