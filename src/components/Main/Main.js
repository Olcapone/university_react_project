import React from "react";
import s from "./Main.module.css";
import Section from "../Section/Section";
import Description from "../Description/Description";
import Title from "../Title/Title";

export default function Main() {
  return (
    <div className={s.main}>
      <Description />
      <Title text={"Преподаватели"} />
      <Section />
      <Title text={"Города"} />
      <Section />
      <Title text={"Факультеты"} />
      <Section />
    </div>
  );
}
