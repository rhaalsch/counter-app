let count = 0;
let totalEl = document.getElementById("totalEl");
let saveEl = document.getElementById("saveEl");

function increment() {
  count += 1;
  totalEl.innerHTML = count;
}

function save() {
  saveEl.innerHTML += " " + count + " - ";
  count = 0;
  totalEl.innerHTML = 0;
}
