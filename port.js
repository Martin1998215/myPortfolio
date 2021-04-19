const menuBtn = document.querySelector(".cover-head-img");
const leftCover = document.querySelector(".left");
const trends = document.querySelector('.trend-photos');

const trendPrev = document.querySelector('.trend-prev');
const trendNext = document.querySelector('.trend-next');

let status = false;
let trendCount = 0;
const trendArray = [
    "s1.png", "s3.png", "s6.png", "s7.png", "s10.png", "s12.png", "s15.png", "s14.png", "s2.png"
];


menuBtn.addEventListener("click", function () {
    if (status == false) {
        leftCover.style.display = "block";
        status = true;
    } else if (status == true) {
        leftCover.style.display = "none";
        status = false;

    }
});

// trendPrev.addEventListener("click", function(){
//     trendCount--;
//     if (trendCount > trendArray.length - 1) {
//         trends.src = trendArray[trendCount];
//     }
// });
setInterval(function () {
    trendCount++;
    if (trendCount > trendArray.length - 1) {
        trendCount = 0;
    }
    trends.src = trendArray[trendCount];
}, 6000);


const btnHome = document.querySelector(".h4-home");
const btnAbout = document.querySelector(".h4-about");
const btnWork = document.querySelector(".h4-work");
const btnProject = document.querySelector(".h4-project");
const btnActivity = document.querySelector(".h4-activity");
const btnContact = document.querySelector(".h4-contact");


btnHome.addEventListener("click", function () {
    leftCover.style.display = "none";
});
btnAbout.addEventListener("click", function () {
    leftCover.style.display = "none";
});
btnWork.addEventListener("click", function () {
    leftCover.style.display = "none";
});
btnProject.addEventListener("click", function () {
    leftCover.style.display = "none";
});
btnActivity.addEventListener("click", function () {
    leftCover.style.display = "none";
});
btnContact.addEventListener("click", function () {
    leftCover.style.display = "none";
});

function removeMenu() {
    leftCover.style.left = `${-90}%`;
}

function Menu(item) {
    let i = 0;
    const tab = document.querySelectorAll(".main");
    for (i; i < tab.length; i++) {
        tab[i].style.display = 'none';
    }

    document.getElementById(item).style.display = "block";
}

document.getElementById("link").onclick();