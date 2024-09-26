const text = document.getElementById("text");

const btn = document.getElementById("btn");

console.log(text);

console.log(btn);

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
