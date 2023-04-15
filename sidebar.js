// const mediaQuery = '(max-width: 400px)';
// const mediaQueryList = window.matchMedia(mediaQuery); //this checks for resizes
const mediaQueryList = window.matchMedia('(max-width: 400px)'); //this checks once

var sbOpenWidth = 250; //String(sbOpenWidth) + "px"
var sbClosedWidth = 50; //String(sbClosedWidth) + "px"

//for checking for resizes
// mediaQueryList.addEventListener('change', event => {
//   if (event.matches) {
//     console.log('The window is now 400px or under');
//     sbClosedWidth = 100;
//     sbOpenWidth = 500;
//   } else {
//     console.log('The window is now over 400px');
//     sbClosedWidth = 50;
//     sbOpenWidth = 250;
//   }
// })

//for checking once
  if (mediaQueryList.matches) {
    console.log('The window is now 400px or under');
    sbClosedWidth = 100;
    sbOpenWidth = 500;
    
    sleep(500).then(() => {
        toggleNav();
        toggleNav();
        document.getElementById("menubtn").classList.toggle('SmallScreen');
        document.getElementById("SideNavigation").classList.toggle('SmallScreen');
    });
  }

function sleep (time) {
return new Promise((resolve) => setTimeout(resolve, time));
}

function toggleMenuBtn(x) {
    x.classList.toggle("change");
}

function toggleNav() {
    sidenav = document.getElementById("SideNavigation")
    main = document.getElementById("main")
    links = document.getElementById("Links")
    // console.log(links.style);
    
    //if using device with small screen use a larger sidebar

        //close if open
        if (sidenav.style.width == String(sbOpenWidth) + "px") {
            sidenav.style.width = String(sbClosedWidth) + "px";
            main.style.marginLeft = String(sbClosedWidth) + "px";
            links.style.left = "-" + String(sbOpenWidth/2) + "px";
            // document.body.style.backgroundColor = "#ADD1F7";
            document.getElementById('blackout').style.display = 'none';
        } else { //open if is collapsed or on error
            sidenav.style.width = String(sbOpenWidth) + "px";
            main.style.marginLeft = String(sbOpenWidth) + "px";
            links.style.left = String(sbClosedWidth) + "px";
            // document.body.style.backgroundColor = "#596C80";
            document.getElementById('blackout').style.display = 'block';
        } 
}