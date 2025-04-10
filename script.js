const generateBtn = document.querySelector("#generateBtn");
const gridContainer = document.querySelector("#gridContainer");

generateBtn.addEventListener("click", () => {
    //이미지가 30개 이상일 경우 모든 이미지 삭제
    if(gridContainer.children.length >=30){
        const confirmed = confirm("30장이 다 찼습니다.\n모든 사진을 지우시겠습니까?");
        if(confirmed){
            gridContainer.innerHTML=""; //INnerHTML을 ""로 하여 그리드컨테이너에 아무것도 안 넣음
        }else{
            return;
        }
    }
    const img = document.createElement("img");

    // 매번 다른 이미지를 위해 랜덤 숫자 추가
    const randomNum = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/200/300?random=${randomNum}`;

    gridContainer.appendChild(img); //자식으로 추가

    
  
});
