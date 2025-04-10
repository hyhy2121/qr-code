import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import s from "./QrCodeGenerator.module.css";

import { GENERATE_DATA } from "../constans";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    );

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_form}>
        <input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="hello"
          className={s.input}
        />
        <button type="button" onClick={onClickHandler} className={s.button}>
          Сгенерить
        </button>
      </div>
      <div className={s.wrapper_qrcode}>
        {result !== "" && <QRCodeSVG value={result} className={s.qrcode} />}
      </div>
    </div>
  );
};
