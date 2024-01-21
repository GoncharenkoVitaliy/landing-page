import photo1 from "../images/photo-005-1.jpeg";
import photo2 from "../images/photo-005-2.jpeg";
import photo3 from "../images/photo-005-3.jpeg";
import photo4 from "../images/photo-005-4.jpeg";
import photo5 from "../images/photo-005-5.jpeg";
import photo6 from "../images/photo-005-6.jpeg";
import photo7 from "../images/photo-005-7.jpeg";
import photo8 from "../images/photo-005-8.jpeg";

interface iImages {
  id: number;
  src: string;
  classNames: string;
}

const images: iImages[] = [
  { id: 1, src: photo1, classNames: "one" },
  { id: 2, src: photo2, classNames: "two" },
  { id: 3, src: photo3, classNames: "three" },
  { id: 4, src: photo4, classNames: "four" },
  { id: 5, src: photo5, classNames: "five" },
  { id: 6, src: photo6, classNames: "six" },
  { id: 7, src: photo7, classNames: "seven" },
  { id: 8, src: photo8, classNames: "eight" },
];

export default images;
