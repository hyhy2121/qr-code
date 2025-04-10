import React from "react";
import s from "./style.module.css";
import { SCAN_DATA } from "./constans";
import { QRCodeSVG } from "qrcode.react";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");


  return (
    <div className={s.wrapper}>
      {data.map((text, index) => (
        <p key={index} className={s.scan_card}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};
