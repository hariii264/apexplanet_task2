function navigate(sectionId) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

function setMood(mood) {
  document.getElementById("moodDisplay").textContent = mood;
}

const facts = [
  "Honey never spoils.",
  "Bananas are berries, but strawberries aren’t.",
  "Octopuses have three hearts.",
  "A group of flamingos is called a 'flamboyance'.",
  "Humans share 60% of their DNA with bananas.",
  "There are more stars in the universe than grains of sand on Earth.",
  "You can't hum while holding your nose.",
  "Sloths can hold their breath longer than dolphins."
];

function showFact() {
  const random = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = random;
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.style.background = "#e74c3c";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
