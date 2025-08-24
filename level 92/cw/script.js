const photoList = [
  "https://picsum.photos/id/1015/300/200",
  "https://picsum.photos/id/1025/300/200",
  "https://picsum.photos/id/1035/300/200",
  "https://picsum.photos/id/1045/300/200",
  "https://picsum.photos/id/1055/300/200"
];

let i = 0;
document.getElementById("addPhotoBtn").addEventListener("click", function () {
  if (i < photoList.length) {
    const img = document.createElement("img");
    img.src = photoList[i];
    img.style.width = "150px";
    img.style.margin = "5px";
    document.getElementById("photoContainer").appendChild(img);
    i++;
  } else {
    alert("ყველა ფოტო დაემატა");
  }
});