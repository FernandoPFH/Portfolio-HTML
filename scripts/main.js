var skillsHolderElement = document.getElementById("SkillsHolder");

for (let skills_key in skills) {
    let skill_type_element = builder_SkillsGraph(skills_key,skills[skills_key]);
    skillsHolderElement.appendChild(skill_type_element);
}

var first = true;

// Use Intersection Observer to determine if objects are within the viewport
const observer_1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let score = entry.target.getElementsByTagName("p")[1].innerHTML;
            entry.target.style.width = `${score}%`;
            entry.target.style.animationDuration = `${skills_animationTimeSeconds * (parseInt(score)/100)}s`
            entry.target.classList.add('in-view');
            return;
        }
    });
});

// Get all the elements with the .animate-skill class applied
document.querySelectorAll('.animate-skill').forEach((element) => observer_1.observe(element));

var projectsHolderElement = document.getElementById("projects_type_holder");

for (let projects_key in projects) {
    let project_type_element = builder_Projects(projects_key,projects[projects_key]);
    projectsHolderElement.appendChild(project_type_element);
}

// Use Intersection Observer to determine if objects are within the viewport
const observer_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
        }
    });
});

// Get all the elements with the .animate-skill class applied
document.querySelectorAll('.animate-project').forEach((element) => observer_2.observe(element));