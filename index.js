// créer 3 variables pour stocker 3 chiffres aléatoires
// Donner au body une couleur de fond en rgb()
// Montrer sur le body la couleur rgb()

const getColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
};

setInterval(getColor, 2000);
