document.addEventListener("DOMContentLoaded", function() {
    const contributionsButton = document.getElementById("contributionsButton");
    const secondHomeSection = document.querySelector(".secondHomeSection");

    contributionsButton.addEventListener("click", function() {
        secondHomeSection.style.display = "block"; // Make the section visible immediately

        // Allow browser to render before applying the transition
        setTimeout(() => {
            secondHomeSection.classList.add("secondSectionShowed");
            secondHomeSection.scrollIntoView({ behavior: "smooth" });
        }, 10); // Small delay to ensure transition starts
    });
});
