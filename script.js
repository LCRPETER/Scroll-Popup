// creation d'une variable qui est initialisé à true qui va nous permettre à la suite de faire apparaitre l'élément qu'une seule fois si on le met à fals
let playOne = true;

// Créer un événement au scroll
// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // Faire apparaitre la popup quand on est en bas du site
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }
  // Faire apparaitre la popup quand on est en bas du site
  if (scrollValue > 0.85 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOne = false;
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
