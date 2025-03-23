document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });

    document.getElementById("yes").addEventListener("click", function() {
        alert("Ура! Ты идёшь гулять! 🎉");
    });
});
