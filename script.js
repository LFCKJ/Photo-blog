const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src="https://picsum.photos/200/300?random=1";

    gridContainer.appendChild(img);
});