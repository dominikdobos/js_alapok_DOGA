export const KUTYAK = [
  {
    faj: "Afrikai oroszlánkutya",
    meret: "40 kg",
    szorzet: "Rövid szőrű",
    kep: "./kepek/afrikai_oroszlankutya.jpg",
  },
  {
    faj: "Hovawart",
    meret: "44 kg",
    szorzet: "Hosszú szőrű",
    kep: "./kepek/Hovawart.jpg",
  },
  {
    faj: "Beagle",
    meret: "25 kg",
    szorzet: "Rövid szőrű",
    kep: "./kepek/beagle.jpg",
  },
  {
    faj: "Angol agár",
    meret: "36 kg",
    szorzet: "Rövid szőrű",
    kep: "./kepek/angol_agar.jpeg",
  },
  {
    faj: "Afgán agár",
    meret: "44 kg",
    szorzet: "Hosszú szőrű",
    kep: "./kepek/afgan_agar.jpg",
  },
];

const KIVALASZTVA = [];

export function kepekMegjelenit(tomb) {
  const TARTALOM_ELEM = document.querySelector(".tartalom");
  let txt = "";
  for (let index = 0; index < tomb.length; index++) {
    txt += `<div><img src="${tomb[index].kep}" alt="kép"><p class="elrejt">HELYES</p></div>`;
  }
  TARTALOM_ELEM.innerHTML = txt;
  kivalaszt();
}

function kivalaszt() {
  const KEPEK = document.querySelectorAll("img");
  const HELYES_KEP = document.querySelectorAll(".tartalom > div");
  const HELYES_P = document.querySelectorAll(".tartalom p");
  for (let index = 0; index < KEPEK.length; index++) {
    KEPEK[index].addEventListener("mouseover", function () {
      if (index === KIVALASZTVA[0]) {
        KEPEK[index].classList.add("helyes-img");
        HELYES_P[index].classList.remove("elrejt");
      } else {
        KEPEK[index].classList.add("kiv");
      }
    });
    KEPEK[index].addEventListener("mouseout", function () {
      if (index === KIVALASZTVA[0]) {
        KEPEK[index].classList.remove("helyes-img");
        HELYES_P[index].classList.add("elrejt");
      } else {
        KEPEK[index].classList.remove("kiv");
      }
    });
  }
}

export function megmutat(tomb) {
  const GOMB_ELEM = document.querySelector("button");
  const KIVALASZTOTT_ELEM = document.querySelector(".kivalasztott");
  GOMB_ELEM.addEventListener("click", function () {
    KIVALASZTVA.pop();
    let vel = Math.floor(Math.random() * tomb.length);
    let txt = `<li>${tomb[vel].faj}; ${tomb[vel].meret}; ${tomb[vel].szorzet}</li>`;
    KIVALASZTOTT_ELEM.innerHTML = txt;
    KIVALASZTVA.push(vel);
  });
}
