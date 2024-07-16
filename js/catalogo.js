document.querySelectorAll(".thumbnail").forEach((img) => {
  img.addEventListener("click", () => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("imagenAmpliada").src = img.src;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
