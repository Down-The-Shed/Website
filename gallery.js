function Loadimgs() {
    var image_div = document.getElementById("Images");
    var file_path = "images/";
    var ext = ".jpg";
    var files = [];

    for (var m = 0; m < 20; m++) {
        try {
        files[m] = file_path + m + ext;
        // console.log(m);
        } catch (e) {
        // exit the loop
        break; 
        }
    }


    for (let i = 0; i < files.length; i++) {
        var img = document.createElement('img');
        img.src = files[i];
        img.width = 500;
        image_div.appendChild(img);
    }
}