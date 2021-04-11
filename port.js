const menuBtn = document.querySelector(".cover-head-img");
const leftCover = document.querySelector(".left");

let status = false;

menuBtn.addEventListener("click", function () {
    if (status == false) {
        leftCover.style.left = 0;
        status = true;
    } else if (status == true) {
        leftCover.style.left = `${-90}%`;
        status = false;

    }
});

const btnHome = document.querySelector(".h4-home");
const btnAbout = document.querySelector(".h4-about");
const btnWork = document.querySelector(".h4-work");
const btnProject = document.querySelector(".h4-project");
const btnActivity = document.querySelector(".h4-activity");
const btnContact = document.querySelector(".h4-contact");

btnHome.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
});
btnAbout.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
});
btnWork.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
});
btnProject.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
});
btnActivity.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
});
btnContact.addEventListener("click", function () {
    leftCover.style.left = `${-90}%`;
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