const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUprgrade");
const upgradeTxt = document.getElementById("upgradeTxt");
const upgradeTxt2 = document.getElementById("upgradeTxt2");
const upgradeTxt3 = document.getElementById("upgradeTxt3");
const autoclickerUprgade = document.getElementById("counterautoclickerUprgade");
const autoclickerUprgade2 = document.getElementById("counterautoclickerUprgade2");
const charita = document.getElementById("charita");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");


let numberOfCookies = 0;
let cookieIncreaseNumber = 1;
let autoclickerIncreaseNumber = 0;
let autoclickerInterval;
let clickUpgradePrize = 50;
let clickAutoclickerPrize = 100;
let autoclicker2IncreaseNumber = 0;
let autoclicker2Interval;
let clickAutoclicker2Prize = 500;
let charitaPrize = 10000;
let charitaCount = 0;
let img1Prize = 1000;
let img2Prize = 10000;
let img3Prize = 100000;
let img4Prize = 1000000;

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
  if (numberOfCookies >= clickUpgradePrize) {
    //odecist cenu
    //numberOfCookies = numberOfCookies 50;
    numberOfCookies -= clickUpgradePrize;
    clickUpgradePrize *= 2;
    upgradeTxt.innerHTML = `Buy koště: ${clickUpgradePrize} (zvýší sílu kliknutí o 1)`;
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
    upgradeTxt2.innerHTML = `Buy Háša: ${clickAutoclickerPrize} (+1 kliknutí za sekundu)`;
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
    upgradeTxt3.innerHTML = `Buy Markus: ${clickAutoclicker2Prize} (+10 kliknutí za sekundu)`;
    //zobrazime pocet susenek
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    autoclicker2IncreaseNumber += 10;
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
    alert("Děkujeme! přispěl jsi na doubrou věc! <3");
    charitaCount++;
    nadace.innerText = `Na ONEMANSHOW FOUNDNADATION jsi přispěl celkem ${charitaCount}X`;
  }
}
img1.onclick = () => {
  if (numberOfCookies >= img1Prize) {
    numberOfCookies -= img1Prize;
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    document.getElementById("cookie").src = "./res/img/ospalykazma.png";
  }
}
img2.onclick = () => {
  if (numberOfCookies >= img2Prize) {
    numberOfCookies -= img2Prize;
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    document.getElementById("cookie").src = "./res/img/KappaKazma.png";
  }
}
img3.onclick = () => {
  if (numberOfCookies >= img3Prize) {
    numberOfCookies -= img3Prize;
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    document.getElementById("cookie").src = "./res/img/kazma_prachy.png";
  }
}
img4.onclick = () => {
  if (numberOfCookies >= img4Prize) {
    numberOfCookies -= img4Prize;
    counter.innerText = "Počet Kazmitchů: " + numberOfCookies;
    document.getElementById("cookie").src = "./res/img/moneyrainkazma.png";
  }
}