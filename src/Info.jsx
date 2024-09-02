import "./All.css";

function Info({ freq, common, sent }) {
  return (
    <div className="info">
      <div className="container">
        <div className="sect1">
          <h4>Word Frequency</h4>
          {Object.entries(freq).map(([key, val]) => (
            <div key={key}>
              {key}: {val}
            </div>
          ))}
        </div>
        <div className="sect2">
          <h4>Most Common Words</h4>
          {Object.entries(common).map(([key, val]) => (
            <div key={key}>
              {key}: {val}
            </div>
          ))}
          <h4>Overall Sentiment: {sent}</h4>
        </div>
      </div>
    </div>
  );
}

export default Info;
