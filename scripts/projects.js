var duration = 500;

var animating = false;

function moveLinear_ProjectCard(projectCard,distance,oncomplete) {
	animating = true;

	if (projectCard.style.left == ''){
		projectCard.style.left = 0;
	}

	let toPosition = ((projectCard.style.left != '')?parseInt(projectCard.style.left.replace("px","")):0) + distance;

	let anim = projectCard.animate({
		left:`${toPosition}px`
	},{duration:duration,easing:'ease-in-out'});
	
	anim.finished.then(_ => {
		projectCard.style.left=`${toPosition}px`;
		animating = false;
		if (oncomplete)
			oncomplete();
	});
}

function feadOut_ProjectIndex(projectIndex) {
	let anim = projectIndex.children[0].animate({
		height: '0%',
		width: '0%'
	},{duration:duration/2});

	anim.finished.then(_=>{
		projectIndex.innerHTML = '';
	});
}

function feadIn_ProjectIndex(projectIndex) {
	let indicator = document.createElement("div");

	projectIndex.appendChild(indicator);

	let anim = projectIndex.children[0].animate({
		width: '75%',
		height: '75%'
	},{duration:duration/2});

	anim.finished.then(_=>{
		indicator.style.width='75%';
		indicator.style.height='75%';
	});
}

function builder_Projects(project_type_name,projects_list) {
	var projects_elements = [];
	var projects_element_index = 0;
	var projects_index_element = null;

	let root = document.createElement("div");
	root.classList.add("projects_type_holder");
	root.classList.add("animate-project");

	let title = document.createElement("h1");
	title.textContent = project_type_name;
	root.appendChild(title);

	// Project Card
	let projects_card_holder = document.createElement("div");
	projects_card_holder.classList.add("projects_card_holder");
	projects_list.forEach(project => {
		let project_card_root = document.createElement("div");
		project_card_root.classList.add("project_card");
		
		let project_card_img_root = document.createElement("div");
		let project_card_img = document.createElement("img");
		project_card_img.src = project["img"];
		project_card_img_root.appendChild(project_card_img);
		project_card_root.appendChild(project_card_img_root);

		let project_info_root = document.createElement("div");
		project_info_root.classList.add("project_info");

		let project_info_title = document.createElement("h1");
		project_info_title.textContent = project["title"];
		project_info_root.appendChild(project_info_title);

		let projects_link_root = document.createElement("div");
		
		if (project["github_link"] != null) {
			let project_link_root = document.createElement("a");
			project_link_root.classList.add("project_link");
			project_link_root.href = project["github_link"];
			project_link_root.target="_blank" 
			project_link_root.rel="noopener noreferrer"

			project_link_root.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';

			let project_link_name = document.createElement("p");
			project_link_name.textContent = "Github";
			project_link_root.appendChild(project_link_name);

			projects_link_root.appendChild(project_link_root);
		}
		
		if (project["demo_link"] != null) {
			let project_link_root = document.createElement("a");
			project_link_root.classList.add("project_link");
			project_link_root.href = project["demo_link"];
			project_link_root.target="_blank" 
			project_link_root.rel="noopener noreferrer"

			project_link_root.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>';
			
			let project_link_name = document.createElement("p");
			project_link_name.textContent = "Play Demo";
			project_link_root.appendChild(project_link_name);

			projects_link_root.appendChild(project_link_root);
		}

		project_info_root.appendChild(projects_link_root);

		let project_info_desc = document.createElement("p");
		project_info_desc.innerHTML = project["desc"];
		project_info_root.appendChild(project_info_desc);

		project_card_root.appendChild(project_info_root);

		projects_elements.push(project_card_root);
		projects_card_holder.appendChild(project_card_root);
	});
	root.appendChild(projects_card_holder);

	let project_index = document.createElement("div");
	project_index.classList.add("project_index");

	projects_list.forEach(project => {
		let index = document.createElement("div");
		index.onclick = _ => {moveProjectCard(projects_list.indexOf(project))};
		project_index.appendChild(index);
	});

	let project_index_indicator = document.createElement("div");
	project_index_indicator.style.width = '75%';
	project_index_indicator.style.height = '75%';
	project_index.children[0].appendChild(project_index_indicator);
	projects_index_element = project_index;
	root.appendChild(project_index);

	function moveProjectCard(targetElementIndex) {
		if (projects_elements.length == 1 || animating)
			return;

		let cardWidth = projects_elements[projects_element_index].clientWidth;

		if (targetElementIndex < 0) {
			targetElementIndex = projects_elements.length - 1;

			let currentProjectCard = projects_elements[projects_element_index]
			let nextProjectCard = projects_elements[targetElementIndex]

			let toPosition = ((nextProjectCard.style.left != '')?parseInt(nextProjectCard.style.left.replace("px","")):0) - cardWidth * projects_elements.length;
			nextProjectCard.style.left = `${toPosition}px`;

			moveLinear_ProjectCard(currentProjectCard,cardWidth);
			moveLinear_ProjectCard(nextProjectCard,cardWidth,_=>{
				projects_elements.forEach(project_element => {
					let toPosition = -cardWidth * (projects_elements.length-1);
					project_element.style.left = `${toPosition}px`;
				});
			});
		} else if (projects_elements.length <= targetElementIndex) {
			targetElementIndex = 0;

			let currentProjectCard = projects_elements[projects_element_index]
			let nextProjectCard = projects_elements[targetElementIndex]

			let toPosition = ((nextProjectCard.style.left != '')?parseInt(nextProjectCard.style.left.replace("px","")):0) + cardWidth * projects_elements.length;
			nextProjectCard.style.left = `${toPosition}px`;

			moveLinear_ProjectCard(currentProjectCard,-cardWidth);
			moveLinear_ProjectCard(nextProjectCard,-cardWidth,_=>{
				projects_elements.forEach(project_element => {
					if (project_element == nextProjectCard)
						return;
					
					project_element.style.left = `0px`;
				});
			},duration);
		} else {
			if (projects_element_index - targetElementIndex == 0) {
				return;
			} else {
				projects_elements.forEach(project_element => {
					let direction = projects_element_index - targetElementIndex;

					moveLinear_ProjectCard(project_element,direction*cardWidth);
				});
			}
		}

		feadOut_ProjectIndex(projects_index_element.children[projects_element_index]);
		feadIn_ProjectIndex(projects_index_element.children[targetElementIndex]);
		projects_element_index = targetElementIndex;
	}

	let left_arrow = document.createElement("div");
	left_arrow.onclick = _ => {moveProjectCard(projects_element_index-1)};
	left_arrow.classList.add("arrow");
	left_arrow.style.transform = "translate(0%, -50%) rotate(180deg)";
	left_arrow.style.left = "30px";
	left_arrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';
	root.appendChild(left_arrow);

	let right_arrow = document.createElement("div");
	right_arrow.onclick = _ => {moveProjectCard(projects_element_index+1)};
	right_arrow.classList.add("arrow");
	right_arrow.style.right = "30px";
	right_arrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';
	root.appendChild(right_arrow);

	return root;
}