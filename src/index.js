import "./styles.scss";
const form_divs = document.querySelectorAll(".form-control");
console.log(form_divs);
const words = ["Email", "Password"];
for (let i = 0; i < form_divs.length; i++) {
  let transitionDelay = 0;
  const label = document.createElement("label");
  label.setAttribute("for", i === 0 ? "email" : "password");
  for (let j = 0; j < words[i].length; j++) {
    transitionDelay += 50;
    const span = document.createElement("span");
    span.innerText = words[i][j];
    span.setAttribute("style", `transition-delay:${transitionDelay}ms`);
    label.append(span);
  }
  form_divs[i].append(label);
}
