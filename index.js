function fullView(imgLink) {
    document.getElementById("fullImage").src = imgLink;
    document.getElementById("fullImageView").style.display = "block";
}

function closeFullView() {
    document.getElementById("fullImageView").style.display = "none";

}