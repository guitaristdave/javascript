const button = document.getElementById("btn");
const insertDiv = document.getElementById("ins");
const video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-rK70sCX5w?si=IdRHo4WJgEg57Bmd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

function addButtonClick() {
    insertDiv.innerHTML = video;
}

button.addEventListener("click", addButtonClick);