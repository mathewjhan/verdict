import React, {useState} from 'react';
import Form from './components/form'
import VerdictStyle from './components/verdictStyle'
import './App.css'

function App() {
  // Set up states for app
  const [sentiment, setSentiment] = useState(0);
  const [verdict, setVerdict] = useState("???");
  const [sentences, setSentences] = useState([]);

  // Map each sentence pair (string, sentiment) to a list element
  const formattedSentences = sentences.map((sentence, i) => {
    return <tr><td>{sentence[0]}</td><td>{sentence[1]}</td></tr>
  });

  // Return App component
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form setSentences={setSentences} setSentiment={setSentiment} setVerdict={setVerdict}/ >
      <div id="result">
        <span id="sentiment">Sentiment: {sentiment}</span>
        <br/>
        <span id="verdict">Result: <VerdictStyle verdict={verdict}/></span>
        <br/>
        <div id="sentences">
          <table>
          <th>Sentence</th>
          <th>Sentiment</th>
          {formattedSentences}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
