import "./All.css";
import proc from "../services/proc";

function Info({ freq, common, sent, setShow }) {
  const handleCancel = () => {
    proc.delText();
    setShow(false);
  };

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
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
