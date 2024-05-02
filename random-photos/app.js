const container = document.querySelector(".container");
const showBtn = document.querySelector("#show");
const mixBtn = document.querySelector("#mix");
const deleteBtn = document.querySelector("#delete");
const photoNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addImages = (number) => {
  const imageBox = document.createElement("div");
  imageBox.classList = "image-box";
  const image = document.createElement("img");
  image.src = `/random-photos/images/${number}.jpg`;
  image.classList = "image";
  imageBox.appendChild(image);
  container.appendChild(imageBox);
};

const showDefault = () => {
  for (let img of document.querySelectorAll(".image-box img")) {
    img.addEventListener("dblclick", (e) => {
      e.target.src = "/random-photos/images/default.jpg";
    });
  }
};

mixBtn.style.display = "none";
deleteBtn.style.display = "none";

showBtn.addEventListener("click", () => {
  mixBtn.style.display = "block";
  showBtn.style.display = "none";
  deleteBtn.style.display = "block";
  for (number of photoNumbers) {
    addImages(number);
  }
  showDefault();
});

mixBtn.addEventListener("click", () => {
  container.innerHTML = "";
  const randomisedNumbers = (array) => array.sort(() => Math.random() - 0.5);
  for (number of randomisedNumbers(photoNumbers)) {
    addImages(number);
  }
  showDefault();
});

deleteBtn.addEventListener("click", () => {
  mixBtn.style.display = "none";
  deleteBtn.style.display = "none";
  showBtn.style.display = "block";
  container.innerHTML = "";
});
