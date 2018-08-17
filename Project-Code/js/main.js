console.log("Let's get started!");

//call modal----------------
function callModal () {
    var modal = document.getElementById('myModal');
    var img = document.getElementById('1stcarou');
    var modalImg = document.getElementById("img01");
    
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    var span = document.getElementsByClassName("close")[0];

    //  close modal on X
    span.onclick = function() { 
        modal.style.display = "none";
    }
};
callModal();
//end of modal ---------------------


//Sticky nav bar when scroll reaches About Me section
//ADD ONCE you have the function of smooth scroll to #aboutme and THEN onclick, do the following:
// window.onscroll = function() {stickyNav()};

// var navbar = document.getElementsByTagName("nav");
// var sticky = navbar.offsetTop;

// function stickyNav() {
//     if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//     } else {
//     navbar.classList.remove("sticky");
//     }
// }


//OR!!! 
// $(window).scroll(function () { 

//     console.log($(window).scrollTop());

//     if ($(window).scrollTop() > 550) {
//       $('nav').addClass('sticky');
//     }

//     if ($(window).scrollTop() < 551) {
//       $('nav').removeClass('sticky');
//     }
//   });