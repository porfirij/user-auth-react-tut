import { useState } from "react";

const useInput = () => {
  const [inputData, setInputData] = useState();
  const [error, setError] = useState(false);

  const inputDataHandler = (event) => {
    setInputData(event.target.value);
  };

  const inputDataReset = () => {
    setInputData("");
  };

  return {
    dataValue: inputData,
    dataHandler: inputDataHandler,
    dataReset: inputDataReset,
    dataError: error
  };
};

export default useInput;
