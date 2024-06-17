const carreaux = document.querySelectorAll(".container div");
const conducteur = document.querySelector("h2");
let turn = "player1";
let counter = 0;

carreaux.forEach((carreau) => {
  carreau.addEventListener("click", () => {
    if (carreau.id !== "done") {
      if (turn === "player1") {
        carreau.innerHTML = `
            <span>X</span>
            `;
        turn = "player2";
        conducteur.textContent = "Au tour du joueur 2 !";
        carreau.id = "done";
        counter++;
        console.log(counter);
      } else {
        carreau.innerHTML = `
            <span>0</span>
            `;
        turn = "player1";
        conducteur.textContent = "Au tour du joueur 1 !";
        carreau.id = "done";
        counter++;
        console.log(counter);
      }
    }
    if (counter === 9) {
      finish();
    }
  });
});

const finish = () => {
  conducteur.textContent = "partie terminée !";
  document.body.innerHTML += `<button id="again">Recommencer</button>`;
};
