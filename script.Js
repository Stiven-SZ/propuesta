
  const botonNo = document.getElementById("no");

  botonNo.onmouseover = function () {
    botonNo.style.position = "absolute";
    botonNo.style.left = Math.random() * window.innerWidth + "px";
    botonNo.style.top = Math.random() * window.innerHeight + "px";
  };

  document.getElementById("si").onclick = function () {
    alert("💖 Sabía que dirías que sí 💖");
  };

