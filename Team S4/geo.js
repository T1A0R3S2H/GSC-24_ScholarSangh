document.getElementById("searchBtn").addEventListener("click", function () {
    country = document.getElementById("search").value
    document.querySelectorAll(`.allPaths`).forEach(e => {
        e.style.fill = "#ececec"
    })
    document.querySelectorAll(`#${country}`).forEach(e => {
        e.style.fill = "red"
    })
});
