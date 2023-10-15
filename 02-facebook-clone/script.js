var settingmenu = document.querySelector(".setting-menu")

function settingsmenutoggle() {
    settingmenu.classList.toggle("setting-menu-height") // setting-menu-height is a class defined in CSS
}

var darkbtn = document.getElementById("dark-btn")

darkbtn.onclick = function () {
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    /* this condition will check that, after clicking th button, the theme is light or dark
       if it is light then it will change it to dark and if it is dark then it will change it to 
       light */ 
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme" , "dark")
    }
    else{
        localStorage.setItem("theme" , "light")
    }
}

if (localStorage.getItem("theme") == "light") {
    darkbtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
}
else {
    localStorage.getItem("theme" , "light")
}