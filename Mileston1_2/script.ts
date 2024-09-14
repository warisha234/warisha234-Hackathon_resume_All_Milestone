const toggleSkillsButton = document.getElementById("toggleSkillsButton");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsButton?.addEventListener("click", () => {
  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
});
