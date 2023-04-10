function toggleMenuBtn(x) {
    x.classList.toggle("change");
}

function toggleNav() {
    sidenav = document.getElementById("SideNavigation")
    main = document.getElementById("main")
    links = document.getElementById("Links")
    // console.log(links.style);
    
    //close if open
    if (sidenav.style.width == "250px") {
        sidenav.style.width = "50px";
        main.style.marginLeft = "50px";
        links.style.left = "-125px";
        document.body.style.backgroundColor = "white";
    } else { //open if is collapsed or on error
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        links.style.left = "50px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    } 
}

function UpdateIFrame(){
    // Selecting the iframe element
    var iframe = document.getElementById("displayFrame");
    // Adjusting the iframe height
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 10 + 'px';
}