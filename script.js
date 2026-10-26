const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const count = document.getElementById("count");
const bar = document.getElementById("bar");
const empty = document.getElementById("empty");
const clearBtn = document.getElementById("clear");
const filterBtns = document.querySelectorAll(".filters button");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let filter = "all";

const save = () => localStorage.setItem("todos", JSON.stringify(todos));

function render() {
  list.innerHTML = "";
  const shown = todos.filter(t =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done);

  shown.forEach(t => {
    const li = document.createElement("li");
    li.className = t.done ? "done" : "";
    li.innerHTML = `
      <button class="check" aria-label="Toggle task">
        <svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>
      </button>
      <span class="text"></span>
      <button class="del" aria-label="Delete task">&times;</button>`;
    li.querySelector(".text").textContent = t.text; // safe from HTML injection

    li.querySelector(".check").onclick = () => { t.done = !t.done; save(); render(); };
    li.querySelector(".del").onclick = () => {
      li.classList.add("removing");
      setTimeout(() => { todos = todos.filter(x => x.id !== t.id); save(); render(); }, 300);
    };
    list.appendChild(li);
  });

  const left = todos.filter(t => !t.done).length;
  const done = todos.length - left;
  count.textContent = `${left} task${left === 1 ? "" : "s"} left`;
  bar.style.width = todos.length ? (done / todos.length) * 100 + "%" : "0";
  empty.hidden = shown.length > 0;
  clearBtn.hidden = done === 0;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  todos.unshift({ id: Date.now(), text, done: false });
  input.value = "";
  save(); render();
});

filterBtns.forEach(b => b.onclick = () => {
  filter = b.dataset.filter;
  filterBtns.forEach(x => x.classList.toggle("active", x === b));
  render();
});

clearBtn.onclick = () => { todos = todos.filter(t => !t.done); save(); render(); };

render();
