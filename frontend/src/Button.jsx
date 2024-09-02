function Button() {
  const handleUp = () => {
    const file = document.getElementById("textFile").files[0];
    console.log(file);
    const reader = new FileReader();

    reader.onload = function (event) {
      const text = event.target.result;
      console.log(text);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".txt" id="textFile"></input>
      <button onClick={handleUp}>Process Text File</button>
    </div>
  );
}

export default Button;
