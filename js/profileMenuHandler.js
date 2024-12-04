document.addEventListener("DOMContentLoaded", function() {
    const profilePictureContainer = document.querySelector(
        ".profilePictureContainer",
    );
    const profileMenuContainer = document.querySelector(".profileMenuContainer");

    let isHovering = false;

    profilePictureContainer.addEventListener("mouseover", function() {
        isHovering = true;
        profileMenuContainer.classList.add("openProfileMenu");
        profilePictureContainer.classList.add("profileMenuOpened");
    });

    profilePictureContainer.addEventListener("mouseout", function() {
        isHovering = false;
        setTimeout(function() {
            if (!isHovering) {
                profileMenuContainer.classList.remove("openProfileMenu");
                profilePictureContainer.classList.remove("profileMenuOpened");
            }
        }, 100);
    });

    profileMenuContainer.addEventListener("mouseover", function() {
        isHovering = true;
    });

    profileMenuContainer.addEventListener("mouseout", function() {
        isHovering = false;
        setTimeout(function() {
            if (!isHovering) {
                profileMenuContainer.classList.remove("openProfileMenu");
                profilePictureContainer.classList.remove("profileMenuOpened");
            }
        }, 100);
    });
});
