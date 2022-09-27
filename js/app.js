const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

//* SLIDER

let slideIndex = 0;

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                slideIndex = i;
                hideTabContent();
                showTabContent(slideIndex);
            }
        });
    }
});

const timer = () => {
    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 0;
    }
    hideTabContent()
    showTabContent(slideIndex)
}
setInterval(timer, 2000)

//* MODAL

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll("[data-modal]");

modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
});

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    clearInterval(modalTimeout);
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

modal.addEventListener("click", (event) => {
    if (
        event.target === modal ||
        event.target.classList.contains("modal__close")
    ) {
        closeModal();
    }
});

function openModalScroll() {
    const page = document.documentElement;

    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal();

        window.removeEventListener("scroll", openModalScroll);
    }
}

window.addEventListener("scroll", openModalScroll);
const modalTimeout = setTimeout(openModal, 50000);
