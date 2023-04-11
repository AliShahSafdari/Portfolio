window.addEventListener("resize", () => {
    var screenWidth = window.innerWidth;
   
    if (screenWidth >= 768) {
        document.getElementById("mySidebar").classList.remove('sidebar');
        document.getElementById("mySidebar").classList.add('menu-lists');
    }
});

function openNav() {
    document.getElementById("mySidebar").classList.add('sidebar');
}

function closeNav() {
    document.getElementById("mySidebar").classList.remove('sidebar');
    document.getElementById("mySidebar").classList.add('menu-lists');
}

