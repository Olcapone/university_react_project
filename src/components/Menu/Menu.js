import React from "react";
import s from "./Menu.module.css";

export default function Menu(configs) {
  return (
    <ul className={s.list}>
      {configs.props.map((config) => (
        <li className={s.item} key={config.id}>
          {config.icon}
          <p>{config.name}</p>
        </li>
      ))}
    </ul>
  );
}
