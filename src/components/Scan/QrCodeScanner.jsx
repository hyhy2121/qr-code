import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import s from "./QrCodeScanner.module.css";

import { SCAN_DATA } from "../constans";

console.log(SCAN_DATA);

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    if (!result) return;

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    if (prevData.includes(result.text)) return;

    setScanned(result.text);

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]));
  };

  return (
    <div className={s.wrapper}>
      <QrReader
        constraints={{ facingMode: "enviroment" }}
        scanDelay={1000}
        onResult={scanHandler}
        containerStyle={{ width: "300px" }}
      />
      <p>{scanned}</p>
    </div>
  );
};
