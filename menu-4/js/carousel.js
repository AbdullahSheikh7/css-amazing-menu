const carousel = (carouselRootContainerId, imagesContainerId, leftBtnId, rightBtnId) => {
    let slide = 0;
    let click = true;

    let carousel = document.querySelector(carouselRootContainerId);

    let images = carousel.querySelector(imagesContainerId).children;

    let left = carousel.querySelector(leftBtnId);
    let right = carousel.querySelector(rightBtnId);

    moveImages(images, slide)

    left.addEventListener("click", (e) => {
        if (click) {
            images[slide <= 0 ? images.length - 1 : slide - 1].style.transition = "left 500ms ease-in-out";
            images[slide].style.transition = "left 500ms ease-in-out";

            slide <= 0 ? slide = images.length - 1 : slide -= 1;

            click ? moveImages(images, slide) : "" ;

            click = false;
            setTimeout(() => {
                resetTransistionForCarousel(images);
                click = true;
            }, 500);
        }
    });

    right.addEventListener("click", (e) => {
        if (click) {
            images[slide >= images.length - 1 ? 0 : slide + 1].style.transition = "left 500ms ease-in-out";
            images[slide].style.transition = "left 500ms ease-in-out";

            slide >= images.length - 1 ? slide = 0 : slide += 1;

            click ? moveImages(images, slide) : "" ;

            click = false;
            setTimeout(() => {
                resetTransistionForCarousel(images);
                click = true;
            }, 500);
        }
    });
}

const moveImages = (imagesArray, slideVariable) => {
    resetForCarousel(imagesArray);

    imagesArray[slideVariable <= 0 ? imagesArray.length - 1 : slideVariable - 1].style.display = "";
    imagesArray[slideVariable <= 0 ? imagesArray.length - 1 : slideVariable - 1].style.left = "-100%";

    imagesArray[slideVariable].style.display = "";
    imagesArray[slideVariable].style.left = "0";

    imagesArray[slideVariable >= imagesArray.length - 1 ? 0 : slideVariable + 1].style.display = "";
    imagesArray[slideVariable >= imagesArray.length - 1 ? 0 : slideVariable + 1].style.left = "100%";
}

const resetForCarousel = (imagesArray) => {
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].style.left = "0";
        imagesArray[i].style.display = "none";
    }
}

const resetTransistionForCarousel = (imagesArray) => {
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].style.transition = "";
    }
}
