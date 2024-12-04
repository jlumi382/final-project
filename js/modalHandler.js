document.addEventListener("DOMContentLoaded", function() {
    let containers = document.querySelectorAll(".provinceHighlightContainer");
    for (let i = 0; i < containers.length; i++) {
        containers[i].addEventListener("click", function() {
            let dialogId = this.getAttribute("data-dialog");
            let modal = document.getElementById(dialogId);
            modal.showModal();
        });
    }
    let closeButtons = document.querySelectorAll(".closeHighlightDialog");
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function() {
            let modal = this.closest("dialog");
            modal.classList.add("closeModal");
            modal.addEventListener(
                "animationend",
                function() {
                    modal.classList.remove("closeModal");
                    modal.close();
                    modal.removeEventListener("animationend", arguments.callee, false);
                },
                false,
            );
        });
    }
});
