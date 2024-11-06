window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;

  document.getElementById("alpha").innerText = alpha;
  document.getElementById("beta").innerText = beta;
  document.getElementById("gamma").innerText = gamma;
}
