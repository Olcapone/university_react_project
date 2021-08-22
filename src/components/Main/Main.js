import React from "react";
import s from "./Main.module.css";
import Section from "../Section/Section";
import Description from "../Description/Description";

export default function Main() {
  return (
    <div className={s.main}>
      <Description />
      <Section />
    </div>
  );
}
