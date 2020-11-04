const $climate = document.getElementById("Climate");
const $consumption = document.getElementById("Consumption");
const $resource = document.getElementById("Resources");
const $people = document.getElementById("People");

$climate.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png ')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";

    $consumption.backgroundColor = "transparent";
    $resource.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("frame").src = " https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "energy soureces and prefer to travel green";
}

$consumption.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png ')";
    document.body.style.backgroundSize = "100% 100%";
    $consumption.style.backgroundColor = "#27AE60";

    $climate.style.backgroundColor = "transparent";
    $resource.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("frame").src = " https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the left overs.";
}
$resource.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $resource.style.backgroundColor = "#f2994a";

    $climate.style.backgroundColor = "transparent";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("frame").src = " https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Avoid all things plastic. Belive in Reduce, Reuse and Recycle";
}
$people.onclick = () => {
    document.body.style.backgroundImage = "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $people.style.backgroundColor = "#eb5757";

    $resource.style.backgroundColor = "transparent";
    $climate.style.backgroundColor = "transparent";
    $consumption.backgroundColor = "transparent";
    document.getElementById("frame").src = " https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    document.getElementById("save").innerHTML = "Do your bit! Never waste  food.Rather offer it to people or animals who are in need.";
}