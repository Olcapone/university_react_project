import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import s from "./Wrapper.module.css";

export default function Wrapper() {
  return (
    <section className={s.container}>
      <Sidebar />
      <Main />
    </section>
  );
}
