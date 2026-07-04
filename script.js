function openVideo(link){
    window.open(link, "_blank");
}

// DARK MODE
const toggle = document.getElementById("modeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("light");
};
