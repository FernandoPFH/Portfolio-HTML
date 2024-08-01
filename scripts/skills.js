function builder_SkillsGraph(skill_type_name,skills_list) {
    let root = document.createElement("div");
    root.classList.add("skill_type");

    let title = document.createElement("h1");
    title.textContent = skill_type_name;
    root.appendChild(title);

    let skillsHolder = document.createElement("div");
    root.appendChild(skillsHolder);

    skills_list.sort(function(a, b){
        return b['score'] - a['score'];
    });

    skills_list.forEach(skill => {
        let skill_graph_root = document.createElement("div");
        skill_graph_root.classList.add("skill");
        skill_graph_root.classList.add("animate-skill");
        
        let skill_graph_name = document.createElement("p");
        skill_graph_name.textContent = skill["name"];
        skill_graph_root.appendChild(skill_graph_name);

        let skill_graph_score = document.createElement("p");
        skill_graph_score.textContent = skill["score"];
        skill_graph_root.appendChild(skill_graph_score);

        skillsHolder.appendChild(skill_graph_root);
    });

    return root
}