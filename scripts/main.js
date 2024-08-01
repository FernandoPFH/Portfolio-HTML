var projectsHolderElement = document.getElementById("projects_type_holder");

for (let projects_key in projects) {
    let project_type_element = builder_Projects(projects_key,projects[projects_key]);
    projectsHolderElement.appendChild(project_type_element);
}

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {
    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let score = entry.target.getElementsByTagName("p")[1].innerText;
            entry.target.style.width = `${score}%`;
            entry.target.style.animationDuration = `${skills_animationTimeSeconds * (parseInt(score)/100)}s`
            entry.target.classList.add('in-view');
            return;
        }
        });
    });

    // Get all the elements with the .animate-skill class applied
    const allAnimatedElements = document.querySelectorAll('.animate-skill');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));
});

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {
    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
        }
        });
    });

    // Get all the elements with the .animate-skill class applied
    const allAnimatedElements = document.querySelectorAll('.animate-project');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));
});

var skillsHolderElement = document.getElementById("SkillsHolder");

for (let skills_key in skills) {
    let skill_type_element = builder_SkillsGraph(skills_key,skills[skills_key]);
    skillsHolderElement.appendChild(skill_type_element);
}