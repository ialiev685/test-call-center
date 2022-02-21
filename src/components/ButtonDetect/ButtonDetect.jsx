import React, { useState } from "react";
//API
import { fetchRecordCall } from "../../services/API";
//style
import "./ButtonDetect.scss";

export const ButtonDetect = ({ item }) => {
  const [record, setRecord] = useState(null);

  const handleDetect = async () => {
    const record = item.record;
    const partnership_id = item.partnership_id;

    const result = await fetchRecordCall({ record, partnership_id });

    console.log("result", result);

    // const blob = new Blob(result);
    const url = window.URL.createObjectURL(result);
    console.log(url);

    // setRecord(url);

    // if (result?.data) {
    setRecord(url);

    // }
  };

  return record ? (
    <audio
      src={record}
      controls
      type="audio/mpeg"
      style={{ height: "40px", position: "absolute", top: "10px", left: "5px" }}
    ></audio>
  ) : (
    <button onClick={handleDetect} type="button" className="button-detect">
      Распознать
    </button>
  );
};
