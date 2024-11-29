document.addEventListener("DOMContentLoaded", function() {
    const profilePictureContainer = document.querySelector(
        ".profilePictureContainer",
    );
    const profileMenuContainer = document.querySelector(".profileMenuContainer");

    profilePictureContainer.addEventListener("click", function() {
        profileMenuContainer.classList.toggle("openProfileMenu");
        profilePictureContainer.classList.toggle("profileMenuOpened");
    });
});
