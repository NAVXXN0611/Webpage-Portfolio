const glow = document.querySelector(".cursor-glow");
const loader = document.querySelector(".loader");
const floatingCards = document.querySelectorAll(".float-card");

document.body.classList.add("loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("is-hidden");
    document.body.classList.remove("loading");
  }, 900);
});

window.addEventListener("pointermove", (event) => {
  glow.style.transform = `translate3d(${event.clientX - 144}px, ${event.clientY - 144}px, 0)`;
});

window.addEventListener("pointerleave", () => {
  glow.style.opacity = "0";
});

window.addEventListener("pointerenter", () => {
  glow.style.opacity = "0.7";
});

floatingCards.forEach((card, index) => {
  const speed = 0.0018 + index * 0.00035;
  const distance = 7 + index * 2;

  function animate(time) {
    const y = Math.sin(time * speed + index) * distance;
    const rotate = Math.cos(time * speed + index) * 1.4;
    card.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});

document.querySelectorAll(".project-card, .skill-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.13), rgba(255,255,255,0.035) 38%, rgba(255,255,255,0.018) 70%)
    `;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018))";
  });
});
