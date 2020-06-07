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
      <div id="sentences">
        <table className="table table-danger table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
            <th scole="col">Sentence</th>
            <th scope="col">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {formattedSentences}
          </tbody>
        </table>
      </div>
      <div id="keywords" className="card">
        <div className="card-body">
          <h5 class="card-title">Key Phrases</h5>
          <p class="card-text">{props.keywords.join()}</p>
        </div>
      </div>
      <div id="sentiment" className="card">
        <div className="card-body">
          <h5 class="card-title">Overall sentiment</h5>
          <p class="card-text">{props.sentiment}</p>
        </div>
      </div>
      <div id="verdict" className="card">
        <div className="card-body">
          <h5 class="card-title">Result</h5>
          <p class="card-text"><VerdictStyle verdict={props.verdict}/></p>
        </div>
      </div>
    </div>
  )
}


