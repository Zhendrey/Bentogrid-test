const cardItems = document.querySelectorAll(".item");

cardItems.forEach((element, index) => {
    element.id = 'card-' + index;
});