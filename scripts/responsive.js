style_files = [
    "links_mobile.css",
    "main_mobile.css",
    "projects_mobile.css"
];

style_elements = [];

if (screen.width <= 500) {
    style_files.forEach(style_file => {
        let style_element = document.createElement("link");
        console.log(style_element)
        style_element.href=`styles/${style_file}`;
        style_element.rel='stylesheet';

        style_elements.push(style_element);
        document.head.appendChild(style_element);
    });

    
	if (screen.width <= 500) {
        for (classElement of document.getElementsByClassName("projects_type_holder")) {
            classElement.getElementsByTagName("h1")[0].style.fontSize = "4em";
        }

        for (classElement of document.getElementsByClassName("project_link")) {
            classElement.style.transform = "scale(1.7)";
        }
	}
}

addEventListener("resize", (event) => {
    if (screen.width <= 500 && style_elements.length == 0) {
        style_files.forEach(style_file => {
            let style_element = document.createElement("link");
            console.log(style_element)
            style_element.href=`styles/${style_file}`;
            style_element.rel='stylesheet';
    
            style_elements.push(style_element);
            document.head.appendChild(style_element);
        });
    } else if (screen.width > 500 && style_elements.length != 0) {
        style_elements.forEach(style_element => {
            document.head.removeChild(style_element);
        });
        style_elements = [];
    }

    if (screen.width <= 500) {
        for (classElement of document.getElementsByClassName("projects_type_holder")) {
            classElement.getElementsByTagName("h1")[0].style.fontSize = "4em";
        }

        for (classElement of document.getElementsByClassName("project_link")) {
            classElement.style.transform = "scale(1.7)";
        }
    } else {
        for (classElement of document.getElementsByClassName("projects_type_holder")) {
            classElement.getElementsByTagName("h1")[0].style = {};
        }

        for (classElement of document.getElementsByClassName("project_link")) {
            classElement.style.transform = "";
        }
    }
});
