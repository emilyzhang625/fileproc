import { useState } from "react";
import Info from "./Info";
import procText from "../services/proc";
import "./All.css";

function Button() {
  const [show, setShow] = useState(false);
  const [freq, setFreq] = useState(null);
  const [common, setCommon] = useState(null);
  const [sent, setSent] = useState(null);

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (event) {
        const text = event.target.result;
        procText(text).then((res) => {
          console.log(res);
          setFreq(res.freq);
          setCommon(res.comm);
          setSent(res.sent);
          setShow(true);
        });
      };
    } else setShow(false);
  };

  return (
    <div>
      {!show && (
        <div className="container2">
          <input
            type="file"
            accept=".txt"
            id="textFile"
            onChange={handleFile}
          ></input>
        </div>
      )}
      {show && (
        <Info freq={freq} common={common} sent={sent} setShow={setShow} />
      )}
    </div>
  );
}

export default Button;
