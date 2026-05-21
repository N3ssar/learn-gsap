import { gsap } from "gsap";

const circle = document.createElement("div");
circle.classList.add("circle");
document.body.appendChild(circle);
circle.style.backgroundColor = "red";
circle.style.width = "100px";
circle.style.height = "100px";
circle.style.borderRadius = "50%";
circle.style.margin = "20px";

const square = document.createElement("div");
square.classList.add("square");
document.body.appendChild(square);
square.style.backgroundColor = "blue";
square.style.width = "100px";
square.style.height = "100px";
square.style.margin = "40px";

gsap.to(square, {
  x: 200,
  rotation: 360,
  duration: 2,
  ease: "power2.out",
  yoyo: true,
});

gsap.fromTo(circle, {
  x: 400,
  opacity : 0,
}, {
  x: 200,
  duration: 2,
  ease: "power2.out",
  opacity: 1
});