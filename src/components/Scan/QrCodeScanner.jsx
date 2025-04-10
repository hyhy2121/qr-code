import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import s from "./QrCodeScanner.module.css";

import { SCAN_DATA } from "../constans";

console.log(SCAN_DATA);

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result.at(0).rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result.at(0).rawValue])
    );
  };

  return (
    <div className={s.wrapper}>
      <Scanner
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 200 },
        }}
      />
      <p>{scanned}</p>
    </div>
  );
};
