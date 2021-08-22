import s from "./Title.module.css";

export default function Description({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}
