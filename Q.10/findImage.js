// find image
function findImage(imgArr) {
  let result = [];

  imgArr.filter((path) => {
    if (path.endsWith(".jpg") || path.endsWith(".png")) result.push(path);
  });

  return result;
}

const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];
console.log(findImage(filePaths));
