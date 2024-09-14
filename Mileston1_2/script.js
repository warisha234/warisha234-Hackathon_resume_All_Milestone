var toggleSkillsButton = document.getElementById("toggleSkillsButton");
var skillsSection = document.getElementById("skillsSection");
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
