// Variável global para o mapa Leaflet
let map = null;

// --- Tela de carregamento ---
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
  }, 1500);
});

// --- Efeito de aparecer navbar ao rolar ---
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = document.getElementById("hero").offsetHeight;
  navbar.classList.toggle("visible", scrollY > heroHeight * 0.3);
});

// --- Inicialização do mapa ---
document.addEventListener("DOMContentLoaded", function () {
  const latitude = 31;
  const longitude = -100;
  const zoom = 6;

  map = L.map("map").setView([latitude, longitude], zoom);

  // Camada de tiles padrão (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  // Ícone personalizado
  const cowboyHatIcon = L.icon({
    iconUrl: "img/cowboy-hat-illustration-png.webp",
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // Lista de localizações
  const locations = [
    {
      coords: [29.426, -98.486],
      title: "The Alamo",
      description: "Sinta a emoção de pisar...",
    },
    {
      coords: [32.759, -97.349],
      title: "Fort Worth Stockyards",
      description: "Quer viver um dia de caubói?...",
    },
    {
      coords: [31.555, -97.118],
      title: "Texas Ranger Hall of Fame",
      description: "Descubra as lendas dos heróis...",
    },
    {
      coords: [29.725, -99.074],
      title: "Bandera",
      description: "Calce a bota e ajeite o chapéu...",
    },
    {
      coords: [29.25, -103.25],
      title: "Big Bend National Park",
      description: "A aventura te chama!...",
    },
  ];

  // Criação dos marcadores no mapa
  locations.forEach((location, index) => {
    L.marker(location.coords, {
      icon: cowboyHatIcon,
      title: location.title,
    }).addTo(map).bindPopup(`
        <div style="text-align: center; min-width: 220px;">
          <b style="font-size: 1.2em; color: #FFD700;">${location.title}</b>
          <p>${location.description}</p>
        </div>
      `);
  });
});

// --- Função para mudar foco do mapa ---
function mudaMapa(lugar) {
  if (!map) return;
  const locations = {
    Alamo: { coords: [29.426, -98.486], zoom: 15 },
    Forth: { coords: [32.759, -97.349], zoom: 15 },
    Bandera: { coords: [29.725, -99.074], zoom: 15 },
    "Big Bend": { coords: [29.25, -103.25], zoom: 12 },
    "Texas Ranger": { coords: [31.555, -97.118], zoom: 15 },
    padrao: { coords: [31, -100], zoom: 6 },
  };
  if (locations[lugar])
    map.flyTo(locations[lugar].coords, locations[lugar].zoom, {
      animate: true,
      duration: 2,
    });
}
