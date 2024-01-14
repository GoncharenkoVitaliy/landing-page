import photo6_1 from '../images/photo-006-1.jpeg';
import photo6_2 from "../images/photo-006-2.jpeg";
import photo6_3 from "../images/photo-006-3.jpeg";
import photo6_4 from "../images/photo-006-4.jpeg";

export interface iArrayNews {
  id: number;
  image: string;
  sabtitle: string;
  date: string;
  text: string;
  link: string;
}

const arrayNews: iArrayNews[] = [
  {
    id: 1,
    image: photo6_1,
    sabtitle: "Волшебные возможности React и Redux Toolkit!",
    date: "06.01.2024",
    text: "Узнай, как создать магические приложения с помощью React и Redux Toolkit!",
    link: "https://redux-toolkit.js.org/",
  },
  {
    id: 2,
    image: photo6_2,
    sabtitle: "Новый уровень адаптивной верстки!",
    date: "06.01.2024",
    text: "Открой для себя секреты создания красивых и удобных интерфейсов с помощью адаптивной верстки!",
    link: "https://www.basicweb.ru/css/css_adaptive_p1.php",
  },
  {
    id: 3,
    image: photo6_3,
    sabtitle: "Магия HTML, CSS, и JS!",
    date: "06.01.2024",
    text: "Узнай, как превратить обычный код в волшебство с помощью HTML, CSS, и JS!",
    link: "https://mate.academy/dev-blog/ru/front-end-and-js-ru/css-javascript-animations/",
  },
  {
    id: 4,
    image: photo6_4,
    sabtitle: "Веб-разработка - искусство!",
    date: "06.01.2024",
    text: "Погрузись в мир веб-разработки и открой для себя искусство создания удивительных веб-приложений!",
    link: "https://mixelte.github.io/pages/html-css-js/?pg=1",
  },
];

export default arrayNews