const avaliacao_cards = document.querySelectorAll(".avaliacao span");
const enviar = document.querySelector(".enviar");
const avaliacao_point = document.getElementById("avaliacao");
const avaliacao_section = document.querySelector(".avaliacao_section");
const obrigado_section = document.querySelector(".obrigado_section");
let nota = null;

avaliacao_cards.forEach((avaliacao_card) => {
  avaliacao_card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked"); 
    nota = e.target.innerText;
    console.log(nota);
  });
});

enviar.addEventListener("click", () => {
  if (nota) {
    nota.innerText = nota;
    avaliacao_section.classList.add("hidden");
    obrigado_section.classList.remove("hidden");
  }
});
