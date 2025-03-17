"use strict";

function updatePageHeight() {
  const pageHeight = document.body.scrollHeight; // Full scroll height of the page
  const viewportHeight = window.innerHeight; // Viewport height in pixels
  const extraHeight = viewportHeight * 0.1; // 10vh in pixels
  const totalHeight = pageHeight + extraHeight; // Total height including 10vh buffer

  const baseDuration = 10; // Base duration for animations in seconds for 100vh
  const heightInVh = totalHeight / viewportHeight; // Total height in vh units (e.g., 110vh / 100vh = 1.1)
  const scaledDuration = baseDuration * heightInVh; // Scaled duration (e.g., 10s * 3 = 30s for 300vh)

  const mainElement = document.querySelector(".main");
  const snowfallContainer = document.querySelector(".initial-snow");
  const loaderElement = document.querySelector(".loader");

  // Set heights of various snowfall elements
  mainElement.style.minHeight = `${totalHeight}px`;
  snowfallContainer.style.height = `${totalHeight}px`;
  loaderElement.style.height = `${totalHeight}px`;

  document.documentElement.style.setProperty(
    "--snowfall-height",
    `${totalHeight}px`
  );

  // Set scaled base duration
  document.documentElement.style.setProperty(
    "--base-duration",
    `${scaledDuration}s`
  );
}

// Hide loader after animation
setTimeout(() => {
  const loaderElement = document.querySelector(".loader");
  loaderElement.style.display = "none";
}, 8000);

window.addEventListener("load", updatePageHeight);
window.addEventListener("resize", updatePageHeight);
window.addEventListener("scroll", updatePageHeight);

const today = new Date().getFullYear();
document.getElementById(
  "date"
).innerHTML = `Copyright &copy; ${today} by Shawn Mikkelson`;
