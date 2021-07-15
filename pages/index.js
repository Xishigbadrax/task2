import styles from "../styles/Home.module.css";
import React, { useState, Component } from "react";

export default function Form() {
  const aimag = {
    songolt1: <option value="songolt2">songolt 6</option>,
    songolt2: <option value="songolt1">songolt 7</option>,
  };
  const sum1 = {
    songolt1: <option value="songolt 2">sum11</option>,
    songolt2: <option value="songolt 1">sum12</option>,
  };
  const sum2 = {
    songolt1: <option value="songolt2">sum21</option>,
    songolt2: <option value="songolt1">sum22</option>,
  };
  const [SumOp, setSumOp] = useState(null);
  const [AimagDuureg, setAimagDuureg] = useState(Object.values(aimag));
  const [Sum, setSum] = useState(Object.values(Object.values(sum1)));
  const [value, setValue] = useState(aimag.songolt2);

  if (value == "songolt1") {
    setSum(Object.values(Object.values(sum1)));
  }
  if (value == "songolt2") {
    setSum(Object.values(Object.values(sum2)));
  }

  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <form>
      <label htmlFor="name">Аймаг/Хот</label>
      <select defaultValue={value} onChange={handleChange}>
        {AimagDuureg}
      </select>
      <label htmlFor="name">Сум/Дүүрэг</label>
      <select>{Sum}</select>
      <button type="submit">Submit</button>
    </form>
  );
}
