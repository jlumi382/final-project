document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const openModalButton = document.querySelector(".openModalButton");
    const closeModalButton = document.querySelector(".closeModalButton");

    openModalButton.addEventListener("click", function() {
        modal.showModal();
    });
    closeModalButton.addEventListener("click", function() {
        modal.close();
    });
});
