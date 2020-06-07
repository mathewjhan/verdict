import React, {useState} from 'react';
import Form from './components/form'
import Results from './components/results'
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
      <Form setSentences={setSentences} setKeywords = {setKeywords} setSentiment={setSentiment} setVerdict={setVerdict}/ >
      <Results sentiment={sentiment} verdict={verdict} sentences={sentences}/>
    </div>
  );
}

export default App;
