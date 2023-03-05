import Fruit from "./fruits.jpg";
import textFile from './data.txt'

const addImage = () => {
  const img = document.createElement("img");
  img.alt = textFile;
  img.width = 100;
  img.height = 100;
  img.src = Fruit;
  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
