import React from "react";
import s from "./Main.module.css";
import Section from "../Section/Section";

export default function Main() {
  return (
    <div className={s.main}>
      Main
      <Section />
    </div>
  );
}
