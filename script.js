let map = null;

document.addEventListener("DOMContentLoaded", function () {
  const latitude = 31;
  const longitude = -100;
  const zoom = 5;

  map = L.map("map").setView([latitude, longitude], zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const cowboyHatIcon = L.icon({
    iconUrl: "img/cowboy-hat-illustration-png.webp",
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  L.marker([29.426, -98.486], { icon: cowboyHatIcon })
    .addTo(map)
    .bindPopup(
      `
    <b>O Alamo</b><br>
    Sinta a emoção de pisar no solo sagrado onde a história americana começou!
    `
    );

  L.marker([32.759, -97.349], { icon: cowboyHatIcon })
    .addTo(map)
    .bindPopup(
      "<b>Fort Worth Stockyards</b><br>Quer viver um dia de caubói? Rodeios, museus e lojas temáticas esperam por você!"
    );

  L.marker([31.555, -97.118], { icon: cowboyHatIcon })
    .addTo(map)
    .bindPopup(
      "<b>Texas Ranger Hall of Fame</b><br>Descubra as lendas dos heróis do Texas! Este museu é uma viagem no tempo."
    );

  L.marker([29.725, -99.074], { icon: cowboyHatIcon })
    .addTo(map)
    .bindPopup(
      "<b>Bandera</b><br>Calce a bota e ajeite o chapéu! Bem-vindo à 'Cowboy Capital of the World', onde a história pulsa em cada esquina."
    );

  L.marker([29.25, -103.25], { icon: cowboyHatIcon })
    .addTo(map)
    .bindPopup(
      "<b>Big Bend National Park</b><br>A aventura te chama! Prepare-se para cenários de tirar o fôlego e uma rica história do Velho Oeste."
    );
});

function mudaMapa(lugar) {
  const locations = {
    Alamo: [29.426, -98.486],
    Forth: [32.759, -97.349],
    Bandera: [29.725, -99.074],
    "Big Bend": [29.25, -103.25],
    "Texas Ranger": [31.555, -97.118],
  };

  if (map && locations[lugar]) {
    const [latitude, longitude] = locations[lugar];
    map.setView([latitude, longitude], 10);
  } else if (lugar == "padrao") {
    map.setView([31, -100], 5);
  }
}
