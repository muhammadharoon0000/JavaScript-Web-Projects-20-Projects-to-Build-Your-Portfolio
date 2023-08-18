const imgcontainer = document.getElementById("image-container");
let imgarray = [];
const count = 30;
const apikey = "hy7WSPLm4rnjhv_JfWCn-tyngKtQjxxAfE3cMbDCcFQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
function imgloaded() {
  console.log("loaded");
}
function setattributes(element, attribute) {
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}
function displayphots() {
  imgarray.forEach((photo) => {
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blanck");
    setattributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    imgcontainer.appendChild(item);
    img.addEventListener("load", imgloaded);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    imgarray = await response.json();
    displayphots();
  } catch (error) {}
}
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});
getPhotos();
