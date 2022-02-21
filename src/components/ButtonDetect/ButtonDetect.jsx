import React, { useState } from "react";
//API
import { fetchRecordCall } from "../../services/API";
//style
import "./ButtonDetect.scss";
//component
import { ReactComponent as CrossIcon } from "./cross.svg";

export const ButtonDetect = ({ item }) => {
  const [audio, setAudio] = useState("");

  const handleDetect = async (values) => {
    const record = values.record;
    const partnership_id = values.partnership_id;

    const result = await fetchRecordCall({ record, partnership_id });

    const reader = new FileReader();
    reader.readAsDataURL(result); //конвертируем blob в base64 в и вызываем onload

    reader.onload = () => {
      console.log("reader.result", reader.result);

      setAudio(reader.result);
    };
  };

  return audio !== "" ? (
    <div style={{ position: "absolute", top: "10px", left: "5px" }}>
      <audio
        controls
        source={audio}
        type="audio/mpeg"
        style={{ height: "40px" }}
      ></audio>
      <CrossIcon
        onClick={() => setAudio("")}
        style={{
          position: "absolute",
          top: "15px",
          right: "6px",
          with: "10px",
          height: "10px",
        }}
      />
    </div>
  ) : (
    <button
      onClick={() => handleDetect(item)}
      type="button"
      className="button-detect"
    >
      Распознать
    </button>
  );
};
