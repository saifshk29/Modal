function modal(){
    let element = document.querySelector(".modal");
    element.classList.add("modalvisible");
   
}
function overlayvis(){
    let element_overlay = document.querySelector(".overlay");
    element_overlay.classList.add("overlayvisible");
}
function removemodal(){
    let element_modal = document.querySelector(".modal");
    element_modal.classList.remove("modalvisible");
   
}
function removeoverlayvis(){
    let element_overlay_remove = document.querySelector(".overlay");
    element_overlay_remove.classList.remove("overlayvisible");
}