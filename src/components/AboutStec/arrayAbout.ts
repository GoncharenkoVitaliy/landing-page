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
      "Привет, я Junior Frontend - маг веб-разработки! Мой стек технологий включает адаптивную верстку на HTML, CSS, и JS.",
    text2:
      "Я также владею React и Redux Toolkit - волшебными инструментами, которые твои идеи в реальность!",
    text3: "Давай создадим вместе что-то удивительное и неповторимое!",
  },
  {
    photo: photo4,
    subtitle: "Магия веб-разработки",
    text1:
      "Добро пожаловать в мир веб-разработки, где каждая строка кода - это волшебство, а каждый пиксель - это часть великого искусства!",
    text2:
      "Здесь ты сможешь погрузиться в увлекательный мир адаптивной верстки, узнать секреты создания красивых и функциональных интерфейсов, и научиться использовать магию React и Redux Toolkit!",
    text3:
      "Подготовься к приключению, ведь веб-разработка - это не просто профессия, это искусство, в котором ты можешь стать настоящим магом!",
  },
];
export default arrayAbout;
