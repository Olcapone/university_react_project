import React from "react";
import s from "./Description.module.css";
import CardUniversity from "../CardUniversity/CardUniversity";
import Title from "../Title/Title";

export default function Description() {
  return (
    <div className={s.section}>
      <Title text={"Информация о университете"} />
      <section className={s.container}>
        <CardUniversity />
        <p className={s.description}>
          Опыт, концентрат знаний и возможность избежать большинство ошибок при
          приеме на работу. Мы знаем, что хотят большинство локальных и
          иностранных компаний и можем вам это дать. А еще мы постоянно
          совершенствуем наши курсы программирования, добавляя туда что-то
          новое. Вы можете лично ознакомиться с историями успеха наших
          выпускников, чтобы убедиться в эффективности нашей методики обучения.
          Да, мы начнем с азов и самой простой информации. Знаем, что
          большинство людей приходят к нам с нулевыми знаниями.
        </p>
      </section>
    </div>
  );
}
