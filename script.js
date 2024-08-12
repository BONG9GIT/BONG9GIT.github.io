document.addEventListener("DOMContentLoaded", function() {
    const furnitureBtn = document.getElementById("furniture-btn");
    const furnitureProject = document.getElementById("furniture-project");
    const mainContainer = document.querySelector(".main-container");
    const backBtn = document.querySelector(".back-btn");

    furnitureBtn.addEventListener("click", function() {
        mainContainer.style.display = "none";
        furnitureProject.style.display = "block";
    });

    backBtn.addEventListener("click", function() {
        furnitureProject.style.display = "none";
        mainContainer.style.display = "flex";
    });
});
