const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUprgrade = document.getElementById("clickUprgrade");
const autoclickerUprgade = document.getElementById("counterautoclickerUprgade");
const autoclickerUprgade2 = document.getElementById("counterautoclickerUprgade2");
const charita = document.getElementById("charita");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerIncreaseNumber = 0;
let autoclickerInterval;
let clickUprgradePrize = 50;
let clickAutoclickerPrize = 100;
let autoclicker2IncreaseNumber = 0;
let autoclicker2Interval;
let clickAutoclicker2Prize = 500;
let charitaPrize = 10000;

// .onclick - na kliknuti
// () => arrow funkce
// {} - scope
cookie.onclick = () => {
  //Zvednout cislo o 1
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1;
  //++ - inkrement
  numberOfCookies += cookieIncreaseNumber;
  //Zobrazit v odstavci
  counter.innerHTML = "Počet Kazmitchů: " + numberOfCookies;
};

clickUprgrade.onclick = () => {
  if (numberOfCookies >= clickUprgradePrize) {
    //odecist cenu
    //numberOfCookies = numberOfCookies 50;
    numberOfCookies -= clickUprgradePrize;
    clickUprgradePrize *= 2;
    clickUprgrade.innerHTML = `Buy koště: ${clickUprgradePrize} (zvýší sílu kliknutí o 1)`;
    //zobrazime pocet
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    //zvednout klikani o 1
    cookieIncreaseNumber++;
  }
};

autoclickerUprgade.onclick = () => {
  if (numberOfCookies >= clickAutoclickerPrize) {
    //odecteme cenu
    numberOfCookies -= clickAutoclickerPrize;
    clickAutoclickerPrize *=2;
    autoclickerUprgade.innerHTML = `Buy Háša: ${clickAutoclickerPrize} (+1 kliknutí za sekundu)`;
    //zobrazime pocet susenek
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    autoclickerIncreaseNumber++;
    clearInterval(autoclickerInterval);
    //spustime autoclicker
    setInterval(() => {
      numberOfCookies += autoclickerIncreaseNumber;
      counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    }, 1000);
  }
};

autoclickerUprgade2.onclick = () => {
  if (numberOfCookies >= clickAutoclicker2Prize) {
    //odecteme cenu
    numberOfCookies -= clickAutoclicker2Prize;
    clickAutoclicker2Prize *=2;
    autoclickerUprgade2.innerHTML = `Buy Markus: ${clickAutoclicker2Prize} (+2 kliknutí za sekundu)`;
    //zobrazime pocet susenek
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    autoclicker2IncreaseNumber+=2;
    clearInterval(autoclicker2Interval);
    //spustime autoclicker
    setInterval(() => {
      numberOfCookies += autoclicker2IncreaseNumber;
      counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    }, 1000);
  }
};

charita.onclick = () => {
  if (numberOfCookies >= charitaPrize) {
    numberOfCookies -= charitaPrize;
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    alert("přispěl jsi na doubrou věc <3");
  }
}