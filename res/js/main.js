const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookie2 = document.getElementById("cookie2");
const counter2 = document.getElementById("counter2");

let numberOfCookies = 0;
let numberOfCookies2 = 0;
// .onclick - na kliknuti
// () => arrow funkce
// {} - scope
cookie.onclick = () => {
  //Zvednout cislo o 1
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1;
  //++ - inkrement
  numberOfCookies++;
  //Zobrazit v odstavci
  counter.innerText = numberOfCookies;
  counter.innerHTML = "Počet Kazmitchů: " + numberOfCookies;
};
cookie2.onclick = () => {
  //Zvednout cislo o 1
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1;
  //++ - inkrement
  numberOfCookies2++;
  //Zobrazit v odstavci
  counter2.innerText = numberOfCookies2;
  counter2.innerHTML = "Počet košťat: " + numberOfCookies2;
};
