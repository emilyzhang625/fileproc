function Info({ freq, common, sent }) {
  return (
    <div>
      <div>Frequency of each word</div>
      {Object.entries(freq).map(([key, val]) => (
        <div key={key}>
          {key}: {val}
        </div>
      ))}
      <div>Top 10 most common words</div>
      {Object.entries(common).map(([key, val]) => (
        <div key={key}>
          {key}: {val}
        </div>
      ))}
      <div>The overall sentiment is {sent}</div>
    </div>
  );
}

export default Info;
