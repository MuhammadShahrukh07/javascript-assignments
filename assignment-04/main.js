const byDefaultName = "Ali";
const byDefaultDesc = "Teacher";
const bydefaultPic = "assets/images/profile.jpg";
const bydefaultBackgroundColor = "whitesmoke";

const card = document.getElementById("card");
const pic = document.getElementById("pic");
const profileName = document.getElementById("name");
const desc = document.getElementById("designation");
const text = document.getElementById("text");

const nextImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoFBwNjCv5kvDIRa5xcQCprDtJKoJgRw07Q&s", 
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728345600&semt=ais_hybrid", 
    "https://media.istockphoto.com/id/1300845620/nl/vector/gebruikerspictogramflat-ge%C3%AFsoleerd-op-witte-achtergrond-gebruikerssymbool-vectorillustratie.jpg?s=612x612&w=0&k=20&c=4dASe2yO6fHasNA10-bfURiAvIPrDSwUTgMO9C40h2w=",
    "assets/images/profile.jpg" 
];

const nextBgColors = ["#63bbf2", "#00ffff", "#2f4f4f", "#f07f5e"];

var imgIndex = 0;
var colorIndex = 0;

document.getElementById("newName").addEventListener("click", function() {
    profileName.textContent = text.value || byDefaultName;
    text.value = "";  
});

document.getElementById("newDesignation").addEventListener("click", function() {
    desc.textContent = text.value || byDefaultDesc;
    text.value = "";  
});

document.getElementById("newPicture").addEventListener("click", function() {
    imgIndex = (imgIndex + 1) % nextImages.length;
    pic.src = nextImages[imgIndex];
});

document.getElementById("newBackground").addEventListener("click", function() {
    colorIndex = (colorIndex + 1) % nextBgColors.length;
    card.style.backgroundColor = nextBgColors[colorIndex];
});

document.getElementById("reset").addEventListener("click", function() {
    profileName.textContent = byDefaultName;
    desc.textContent = byDefaultDesc;
    pic.src = bydefaultPic;
    card.style.backgroundColor = bydefaultBackgroundColor;
    imgIndex = 0;  
    colorIndex = 0;  
});
