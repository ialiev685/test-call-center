import React from "react";
//API
import { fetchRecordCall } from "../../services/API";
//style
import "./ButtonDetect.scss";

export const ButtonDetect = ({ item }) => {
  const handleDetect = async () => {
    const record = item.record;
    const partnership_id = item.partnership_id;

    const result = await fetchRecordCall({ record, partnership_id });
    //   const result = await fetchRecordCall(record);
    // const result = await fetchRecordCall(partnership_id);
    console.log("record", result);
  };

  return (
    <button onClick={handleDetect} type="button" className="button-detect">
      Распознать
    </button>
  );
};
