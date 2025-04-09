const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener("click", () => {
    const img = document.createElement("img");

    // 매번 다른 이미지를 위해 랜덤 숫자 추가
    const randomNum = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/200/300?random=${randomNum}`;

    gridContainer.appendChild(img);
});
