import processText from "./processText";
import { useState } from "react";
import Info from "./Info";

function Button() {
  const [show, setShow] = useState(false);
  const [freq, setFreq] = useState(null);
  const [common, setCommon] = useState(null);
  const [sent, setSent] = useState(null);
  const [proc, setProc] = useState(false);

  const handleUp = () => {
    const file = document.getElementById("textFile").files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const text = event.target.result;
      console.log(text);
      const result = processText(text);
      console.log(result);
      setFreq(result.wordFreq);
      setCommon(result.mostCommon);
      setSent(result.sent);
      setShow(true);
    };

    reader.readAsText(file);
  };

  const handleFile = (event) => {
    const selected = event.target.files[0];
    if (selected) setProc(true);
    else setProc(false);
  };

  return (
    <div>
      <input
        type="file"
        accept=".txt"
        id="textFile"
        onChange={handleFile}
      ></input>
      {proc && <button onClick={handleUp}>Process text file</button>}
      {show && <button onClick={() => setShow(false)}>Hide</button>}
      {show && <Info freq={freq} common={common} sent={sent} />}
    </div>
  );
}

export default Button;
