let profileMenu = document.getElementById("profileMenu")

function toggleMenu() {
    profileMenu.classList.toggle("open-menu")
}

let sideAcivity = document.getElementById('sidebarActivity')
let showMore = document.getElementById('showMoreLink')
function toggleActivity() {
    sideAcivity.classList.toggle('open-activity')
    if (sideAcivity.classList.contains('open-activity')) {
        showMore.innerHTML = "Show Less <b>-<b>"
    } else {
        showMore.innerHTML = 'Show More <b>+<b>'
    }
}