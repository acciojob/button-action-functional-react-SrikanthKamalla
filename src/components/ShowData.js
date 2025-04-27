import React, { useState } from "react";

const ShowData = () => {
  const [showPara, setShowPara] = useState(false);
  return (
    <div>
      <button onClick={() => setShowPara(true)}>Click me</button>
      {showPara && (
        <p>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
};

export default ShowData;
