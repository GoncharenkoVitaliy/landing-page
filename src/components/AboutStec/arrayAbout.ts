import photo3 from "../images/photo-003.jpeg";
import photo4 from "../images/photo-004.jpeg";

export interface iArrayAbout {
  photo: string,
  subtitle: string,
  text1: string,
  text2: string,
  text3: string,
}

const arrayAbout: iArrayAbout[] = [
  {
    photo: photo3,
    subtitle: "О моем стеке",
    text1:
      "Верстка адаптивных и кроссбраузерных сайтов с использованием HTML5 и CSS3, методологии BEM, знание препроцессора SCSS.",
    text2: "Язык программирования JavaScript.",
    text3: "Библиотека React и state manager Redux, строгая типизация языка TypeScript JS.",
  },
  {
    photo: photo4,
    subtitle: "Инструментарий",
    text1:
      "Мой инструментарий включает работу в двух операционных системах - Linux-Ubuntu и Windows 10. А также пакетный менеджер npm",
    text2:
      "Работаю с дизайн-макетами в таких программах как Figma, Photoshop и Marsy.",
    text3:
      "Кроме того, я работаю с сервером JSON server, а также использую инструменты Faker и fakeStoreApi. Эти инструменты позволяют мне эффективно отрабатывать работу с сервером и создавать фейковые данные для тестирования и разработки.",
  },
];
export default arrayAbout;
