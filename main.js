// Hamburger And Close icon Events
let closeIcon = document.querySelector(".close-icon");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let mobileMenu = document.querySelector(".mobile-menu");


hamburgerIcon.addEventListener("click", function () {
    this.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    mobileMenu.classList.remove("hidden");
});

closeIcon.addEventListener("click", function () {
    this.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    mobileMenu.classList.add("hidden");
});


// Pledge Process
let rewardBtns = document.querySelectorAll('.reward-btn');
let successBtn = document.querySelector('.success-btn');
let overlay = document.querySelector('.overlay');
let successBox = document.querySelector('.success');

rewardBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        overlay.classList.remove("hidden");
        successBox.classList.remove("hidden");
        successBtn.addEventListener('click', function () {
            successBox.classList.add("hidden");
            overlay.classList.add("hidden")
        })
    });
});


// Back Button process
let backBtn = document.querySelector('.back-btn');
let backBox = document.querySelector('.back-box');
let closeIconModal = document.querySelector('.close-icon-modal');

backBtn.addEventListener('click', function () {
    backBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
    closeIconModal.addEventListener('click', function () {
        backBox.classList.add("hidden");
        overlay.classList.add("hidden");
    });
});


// Checked pledges and toggle form
let articles = document.querySelectorAll(".back-box .available");

articles.forEach(function (article) {
    article.addEventListener("click", function () {
        articles.forEach(function (article) {
            article.children[0].children[0].children[0].checked = false;
            if (article.children[2] != undefined && !article.children[2].classList.contains('hidden')) {
                article.children[2].classList.add('hidden');
            }
            article.style.borderColor = 'rgb(226 232 240)';
        });
        articles.forEach(function (article) {
        });
        this.children[0].children[0].children[0].checked = true;
        this.style.borderColor = '#07887f';
        if (this.children[2] != undefined) {
            this.children[2].classList.remove("hidden");
        }
    })
});

