import React from "react";
import { menuConfig } from "../utils/menu";
import Menu from "../Menu/Menu";
import s from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={s.aside}>
      <Menu props={menuConfig} />
    </aside>
  );
}
