// const modelContainer = document.getElementById("modal");
const modelContainer = $("#modal");
// const addbookmark = document.getElementById("show-model");
const addbookmark = $("#show-model");
// const closeIcon = document.getElementById("modal-close");
const closeIcon = $("#modal-close");
// const websiteName = document.getElementById("website-name");
const websiteName = $("#website-name");
// const websiteUrl = document.getElementById("website-url");
const websiteUrl = $("#website-url");
// const bookmarkForm = document.getElementById("bookmark-form");
const bookmarkForm = $("#bookmark-form");
// const bookmarkContainer = document.getElementById("bookmark-container");
const bookmarkContainer = $("#bookmark-container");
let bookmarks = [];
$newitem = $();

function addContainer() {
    // modelContainer.classList.add("show-modal");
    modelContainer.addClass("show-modal");
    websiteName.focus();
}

function removeContainer() {
    modelContainer.removeClass("show-modal");
}
// addbookmark.addEventListener("click", addContainer);
addbookmark.on("click", addContainer);
// closeIcon.addEventListener("click", removeContainer);
closeIcon.on("click", removeContainer);
window.addEventListener("click", (e) =>
    e.target === modelContainer ? modelContainer.removeClass("show-modal") : false
);

function validate(name, url) {
    const exp =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    let regexp = new RegExp(exp);
    if (!name || !url) {
        alert("Please enter both fields");
        return false;
    }
    if (!url.match(regexp)) {
        alert("URL not correct");
        return false;
    }
    return true;
}

function buildBookmarks() {
    bookmarkContainer.text("");
    bookmarks.forEach((bookmark) => {
        const { name, url } = bookmark;
        const item = document.createElement("div");
        item.classList.add("item");
        const closeDiv = document.createElement("div");
        closeDiv.classList.add("close");
        closeDiv.setAttribute("onclick", `deleteBookmark('${name}')`);
        const closeimg = document.createElement("img");
        closeimg.setAttribute("src", "close.png");
        const linkinfo = document.createElement("div");
        linkinfo.classList.add("name");
        const img = document.createElement("img");
        img.setAttribute(
            "src",
            `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=16`
        );
        const website = document.createElement("a");
        website.setAttribute("href", `${url}`);
        website.setAttribute("target", "_blank");
        website.textContent = name;
        linkinfo.append(img, website);
        closeDiv.append(closeimg);
        item.append(closeDiv, linkinfo);
        bookmarkContainer.append(item);
    });
}

function deleteBookmark(name) {
    bookmarks.forEach((bookmark, i) => {
        if (bookmark.name === name) {
            bookmarks.splice(i, 1);
        }
    });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
}

function fetchBookmarks() {
    // Get bookmarks from localStorage if available
    if (localStorage.getItem("bookmarks")) {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    }
    buildBookmarks();
}

function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteName.val();
    let urlValue = websiteUrl.val();
    // Add 'https://' if not there
    if (!urlValue.includes("https://") && !urlValue.includes("http://")) {
        urlValue = `https://${urlValue}`;
    }
    // Validate
    if (!validate(nameValue, urlValue)) {
        return false;
    }
    const bookmark = {
        name: nameValue,
        website: urlValue,
    };
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.trigger("reset");
    websiteName.focus();
}
bookmarkForm.on("submit", storeBookmark);
fetchBookmarks();