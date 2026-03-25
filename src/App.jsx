import React, { useState } from "react";

const App = () => {
  const [file, setfile] = useState();

  let handleFileSubmit = (e) => {
    let url = e.target.files[0];

    let blob = URL.createObjectURL(url);

    console.log(blob);

    setfile(blob);
  };

  return (
    <div>
      <input onChange={handleFileSubmit} type="file" />

      <img width={400} src={file} alt="" />
    </div>
  );
};

export default App;
