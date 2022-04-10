VanillaTilt.init(document.querySelector(".img ,.img1,.imagedog,.card-recent"), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(
  document.querySelectorAll(".img,.img1,.imagedog,.card-recent")
);

function togglemenu() {
  const bar = document.querySelector(".bar");
  const nevigation = document.querySelector(".nevigation");
  const searchbar = document.querySelector(".searchbar");
  bar.classList.toggle("open");
  nevigation.classList.toggle("open");
  searchbar.classList.toggle("open");
}
