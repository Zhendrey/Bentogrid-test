//!ACTIVATING A SPOILER!

//!FOREACH METHOD
// export function spoiler(spoilerButtons, invisibleContentElements){
//     spoilerButtons.forEach((spoilerButton, index) => {
//         const originalValue = spoilerButton.textContent;
//         spoilerButton.addEventListener("click", function(event){
//             invisibleContentElements[index].classList.toggle("active");
//             spoilerButton.classList.toggle("minus");
//             if(spoilerButton.classList.contains("minus")){
//                 spoilerButton.textContent = '-';
//             }else{
//                 spoilerButton.textContent = originalValue;
//             }
//         })
//     });
// }

//!PARENT METHOD
export function spoiler(buttonParent, buttonsClass, invisiblePartClass,  invisibleContentElement) {
    buttonParent.addEventListener("click", function(event){
        const targetElem = event.target;
        if(targetElem){
            const originalValue = event.target.textContent;
            const hiddenPart = event.target.closest(invisiblePartClass)
            invisibleContentElement.classList.toggtle("active");
            targetElem.classList.toggle("minus");
            if(targetElem.classList.contains("minus")){
                targetElem.textContent = '-';
            }else{
                targetElem.textContent = originalValue;
            }
        }
    })
}