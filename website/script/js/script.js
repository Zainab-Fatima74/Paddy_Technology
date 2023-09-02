$(document).ready(function(){
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});




// for header background color

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 30) {
    $(".head").css("background" , "#F5B7B1");
  }

  else{
    $(".head").css("background" , "#7B241C");  	
  }
});
});


// FORM

$("#form").validate({
  rules:{
      name: {
      required: true,
      minlength: 2
      },
      companyname: {
          required: true,
          minlength: 2
      },
      email: {
          required: true,
          minlength: 2
      },
      yourcompany: {
          required: true,
          minlength: 2
      }
  }

  

})

$.validator.setDefaults({
  submitHandler: function () {
    alert("submitted!");
  }
});

$(document).ready(function () {

  $("#WebsiteForm").validate({
    rules: {
      name: "required",
      companyname: "required",
      countryname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: "required",
      agree: "required"
    },
    messages: {
      name: "Please enter your name",
      companyname: "Please enter your company name",
      countryname: {
        required: "Please enter a country name",
        minlength: "Your country name must consist of at least 2 characters"
      },
      email: "Please enter a valid email address",
      message: "please leave a message!",
      agree: "Please accept our policy",
    }
  });

});

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }
