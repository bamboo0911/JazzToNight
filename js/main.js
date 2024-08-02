document.addEventListener("DOMContentLoaded", function () {
    const carousalItems = document.querySelectorAll('.carousal-item');
    const prevButton = document.querySelector('.carousal-prev');
    const nextButton = document.querySelector('.carousal-next');
    let currentIndex = 0;

    function showItem(index) {
        carousalItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % carousalItems.length;
        showItem(currentIndex);
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + carousalItems.length) % carousalItems.length;
        showItem(currentIndex);
    }

    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);

    setInterval(showNextItem, 3000);

    showItem(currentIndex);
});
