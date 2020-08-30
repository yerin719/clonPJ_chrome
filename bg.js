const body = document.querySelector("body");

const numImg = 5;

function paintBg(randomInt)
{
    const image = new Image();
    image.src = `images/${randomInt}.jpg`;
    image.classList.add("bgImg")
    body.prepend(image);
}

function genRandom(numOfImg){
    return Math.ceil(Math.random() * numOfImg);
}

function init(){
    const rImgNum = genRandom(numImg);
    paintBg(rImgNum);
}

init();