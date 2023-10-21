const images = [
    { title: "Lindhagensgatan - Tegelbacken", path: "images/1930-cst-fhp.jpg" },
    { title: "Tegelbacken - Johanneshov", path: "images/1930-cst-gup.jpg" },
    { title: "Centralstationen - Östra station/Ropsten", path: "images/1930-cst-nordost.jpg" },
];

function DisplayImages() {
    images.forEach((image) => {
        let newImageEl = document.createElement("div");
        newImageEl.classList.add("image");

        let newHeadingEl = document.createElement("h1");
        newHeadingEl.innerText = image.title;
        newImageEl.append(newHeadingEl);

        let newImgEl = document.createElement("img");
        newImgEl.setAttribute("src", image.path);
        newImageEl.append(newImgEl);

        const sectionEl = document.querySelector("section");
        sectionEl.append(newImageEl);
    });
}

DisplayImages();