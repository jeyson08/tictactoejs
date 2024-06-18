const carreaux = document.querySelectorAll(".container div");
const conducteur = document.querySelector("h2");
let turn = "player1";
let counter = 0;

const game = () => {
  conducteur.textContent = "Le joueur 1 commence !";
  carreaux.forEach((carreau) => {
    carreau.addEventListener("click", () => {
      if (!carreau.classList.contains("done")) {
        if (turn === "player1") {
          carreau.firstChild.textContent = "X";
          turn = "player2";
          conducteur.textContent = "Au tour du joueur 2 !";
          carreau.classList.add("done");
          counter++;
          console.log(counter);
        } else {
          carreau.firstChild.textContent = "0";
          turn = "player1";
          conducteur.textContent = "Au tour du joueur 1 !";
          carreau.classList.add("done");
          counter++;
          console.log(counter);
        }
      }
      result();
      if (counter === 9) {
        finish();
      }
    });
  });
};

const finish = () => {
  const allDone = document.querySelectorAll(".done");
  // const allSpan = document.querySelectorAll(".container div > *");

  again.addEventListener("click", () => {
    allDone.forEach((div) => {
      div.innerHTML = `<span></span>`;
      div.classList.remove("done");
    });
    reboot();
  });
};

const reboot = () => {
  turn = "player1";
  counter = 0;
  game();
};

const result = () => {
  const un = document.querySelector("[id='1'] span");
  const deux = document.querySelector("[id='2'] span");
  const trois = document.querySelector("[id='3'] span");
  const quatre = document.querySelector("[id='4'] span");
  const cinq = document.querySelector("[id='5'] span");
  const six = document.querySelector("[id='6'] span");
  const sept = document.querySelector("[id='7'] span");
  const huit = document.querySelector("[id='8'] span");
  const neuf = document.querySelector("[id='9'] span");
  if (
    (un.textContent === deux.textContent &&
      deux.textContent === trois.textContent &&
      un.textContent !== "" &&
      deux.textContent !== "" &&
      trois.textContent !== "") ||
    (un.textContent === quatre.textContent &&
      quatre.textContent === sept.textContent &&
      un.textContent !== "" &&
      quatre.textContent !== "" &&
      sept.textContent !== "") ||
    (sept.textContent === huit.textContent &&
      huit.textContent === neuf.textContent &&
      sept.textContent !== "" &&
      huit.textContent !== "" &&
      neuf.textContent !== "") ||
    (trois.textContent === six.textContent &&
      six.textContent === neuf.textContent &&
      trois.textContent !== "" &&
      six.textContent !== "" &&
      neuf.textContent !== "") ||
    (quatre.textContent === cinq.textContent &&
      cinq.textContent === six.textContent &&
      quatre.textContent !== "" &&
      cinq.textContent !== "" &&
      six.textContent !== "") ||
    (deux.textContent === cinq.textContent &&
      cinq.textContent === huit.textContent &&
      deux.textContent !== "" &&
      cinq.textContent !== "" &&
      huit.textContent !== "") ||
    (un.textContent === cinq.textContent &&
      cinq.textContent === neuf.textContent &&
      un.textContent !== "" &&
      cinq.textContent !== "" &&
      neuf.textContent !== "") ||
    (sept.textContent === cinq.textContent &&
      cinq.textContent === trois.textContent &&
      sept.textContent !== "" &&
      cinq.textContent !== "" &&
      trois.textContent !== "")
  ) {
    if (turn === "player2") {
      console.log("Le joueur 1 a gagné");
      conducteur.textContent = "Le joueur 1 a gagné ! Partie terminée.";
    } else {
      console.log("Le joueur 2 a gagné");
      conducteur.textContent = "Le joueur 2 a gagné ! Partie terminée.";
    }
    finish();
  }
};

game();
