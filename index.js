import { Showdata } from "./ui.js";
let sho =new Showdata()


Showdata.showByGategory("mmorpg");

let datashow = document.getElementsByClassName("datashow");

for (let i = 0; i < datashow.length; i++) {
  datashow[i].addEventListener("click", function () {
    Showdata.showByGategory(datashow[i].innerHTML);
  });
}
