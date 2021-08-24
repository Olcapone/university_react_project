import React from "react";
import image from "./university.png";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import s from "./CardUniversity.module.css";

export default function CardUniversity() {
  return (
    <article className={s.article}>
      <div className={s.wrap}>
        <img className={s.card} src={image} alt="University" />
      </div>
      <p className={s.institution}>университет</p>
      <h3 className={s.institutionName}>MIT</h3>
      <ul className={s.iconsBox}>
        <li className={s.icon}>
          <HiPencilAlt />
        </li>
        <li className={s.icon}>
          <HiTrash />{" "}
        </li>
      </ul>
    </article>
  );
}
