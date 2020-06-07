import React from 'react'
import VerdictStyle from './verdictStyle'

// Conditional component for the verdict
export default function Results(props) {

  // Map each sentence pair (string, sentiment) to a list element
  const formattedSentences = props.sentences.map((sentence, i) => {
    return <tr><td>{sentence[0]}</td><td>{sentence[1]}</td></tr>
  });

  return (
    <div id="result">
      <span id="sentiment">Sentiment: {props.sentiment}</span>
      <br/>
      <span id="verdict">Result: <VerdictStyle verdict={props.verdict}/></span>
      <br/>
      <div id="sentences">
        <table>
        <th>Sentence</th>
        <th>Sentiment</th>
        {formattedSentences}
        </table>
      </div>
    </div>
  )
}


