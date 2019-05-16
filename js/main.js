/* =================================
------------------------------------
	Pulse - Restaurant HTML Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/

"use strict";

$(window).on("load", function() {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder")
    .delay(400)
    .fadeOut("slow");
});

(function($) {
  /*------------------
		Navigation
	--------------------*/
  $(".nav-switch").on("click", function(event) {
    $(".main-menu").slideToggle(400);
    event.preventDefault();
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function() {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero-slider")
    .owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      mouseDrag: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      items: 1,
      autoplay: true
    })
    .on("changed.owl.carousel", function(event) {
      $(".hero-slider .owl-dots:last-child").remove();
      currentHSnumber();
    });
  var dot = $(".hero-slider .owl-dot");
  dot.each(function() {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this)
        .html("0")
        .append(index);
      $(this).append("<span>.</span>");
    } else {
      $(this).html(index);
      $(this).append("<span>.</span>");
    }
  });
  function currentHSnumber() {
    $(".hero-slider .owl-dots")
      .clone()
      .appendTo(".hero-slider");
    $(".hero-slider .owl-dots:last-child").addClass("owl-dots-number");
    var av = $(".owl-dots-number").innerHeight() / 2;
    $(".owl-dots-number").css("marginTop", -av);
  }
  currentHSnumber();

  /*------------------
		Testimonials 
	--------------------*/
  $(".testimonials-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true
  });

  /*------------------
		Brands Slider
	--------------------*/
  $(".brands-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      }
    }
  });

  /*------------------
		Accordions
	--------------------*/
  $(".panel-link").on("click", function(e) {
    $(".panel-link").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });

  /*------------------
		Circle progress
	--------------------*/
  $(".circle-progress").each(function() {
    var cpvalue = $(this).data("cpvalue");
    var cpcolor = $(this).data("cpcolor");
    var cpid = $(this).data("cpid");

    $(this).append(
      '<div class="' +
        cpid +
        '"></div><div class="progress-value"><h3>' +
        cpvalue +
        "%</h3></div>"
    );

    if (cpvalue < 100) {
      $("." + cpid).circleProgress({
        value: "0." + cpvalue,
        size: 123,
        thickness: 6,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    } else {
      $("." + cpid).circleProgress({
        value: 1,
        size: 240,
        thickness: 3,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    }
  });
})(jQuery);

/* Initialize restaurants */
function init_index() {
  var restaurants = [];

  //first load
  if (localStorage.getItem("init_finished") == null) {
    //flag that restaurants are already initialized
    localStorage.setItem("init_finished", true);

    //create restaurants
    //TODO add more restaurants
    var Atos = {
      name: "Atos", //ime restorana
      sum: 18, //suma ocena
      count: 4, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/atos.jpeg", //lokacija slike
      desc: "Lep restoran" //opis restorana
    };
    restaurants.push(Atos);

    var ChezNik = {
      name: "Chez Nik", //ime restorana
      sum: 14, //suma ocena
      count: 3, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/cheznik.jpg", //lokacija slike
      desc: "Lep restoran" //opis restorana
    };
    restaurants.push(ChezNik);

    var Frans = {
      name: "Frans", //ime restorana
      sum: 25, //suma ocena
      count: 5, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Vracar", //opstina
      adr: "Adresa",
      img: "img/logo/frans.jpg", //lokacija slike
      desc: "Lep restoran" //opis restorana
    };
    restaurants.push(Frans);

    var SoIBiber = {
      name: "So i biber", //ime restorana
      sum: 18, //suma ocena
      count: 6, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/soibiber.jpg", //lokacija slike
      desc: "Lep restoran" //opis restorana
    };
    restaurants.push(SoIBiber);

    sort_by_avg(restaurants);

    //store sorted restaurants to localstorage
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
    console.log(restaurants);
  }

  
  load_top_restaurants();
}

/* sort restaurants by avg */
function sort_by_avg(restaurants) {
  for (var i = 0; i < restaurants.length; i++) {
    var avg_i = restaurants[i].sum / restaurants[i].count;
    for (var j = i + 1; j < restaurants.length; j++) {
      var avg_j = restaurants[j].sum / restaurants[j].count;
      if (avg_i < avg_j) {
        var temp = restaurants[i];
        restaurants[i] = restaurants[j];
        restaurants[j] = temp;
      }
    }
  }
}

/* load top restaurants */
function load_top_restaurants() {
  //gets array of all restaurants
  var restaurants = JSON.parse(localStorage.getItem("restaurants"));
  //sort the array just in case
  sort_by_avg(restaurants);

  //get top 3 restaurants
  var top1_img = restaurants[0].img;
  var top1_name = restaurants[0].name;
  var top1_desc = restaurants[0].desc;

  var top2_img = restaurants[1].img;
  var top2_name = restaurants[1].name;
  var top2_desc = restaurants[1].desc;

  var top3_img = restaurants[2].img;
  var top3_name = restaurants[2].name;
  var top3_desc = restaurants[2].desc;

  document.getElementById("top1_image").src = top1_img;
  document.getElementById("top1_name").innerHTML = top1_name;
  document.getElementById("top1_desc").innerHTML = top1_desc;

  document.getElementById("top2_image").src = top2_img;
  document.getElementById("top2_name").innerHTML = top2_name;
  document.getElementById("top2_desc").innerHTML = top2_desc;

  document.getElementById("top3_image").src = top3_img;
  document.getElementById("top3_name").innerHTML = top3_name;
  document.getElementById("top3_desc").innerHTML = top3_desc;
}


function create_body(){

  var restaurants = JSON.parse(localStorage.getItem("restaurants"));
  var html_to_insert = "";

  html_to_insert =  html_to_insert + 
                      "<div class = \"offset-sm-2 col-sm-8\" >";
  for(var i = 0; i < restaurants.length; i++){

    if(i % 2 == 0){                  
     html_to_insert +="<div class = \"row\">"
    }
     html_to_insert +="<div class = \"col-sm-2\">"+
                      "<img src = \"" + restaurants[i].img + "\" style=\"height: 100px\">"+
                      "</div>"+
                      "<div class = \"col-sm-4\" style =\"padding : 10px\">" +
                      "<h3 class = \"text-left\">" +restaurants[i].name + "</h3><br/>" +
                      "<p class = \"text-left\">" + restaurants[i].desc + "</p>" + 
                      "</div>";
    if(i % 2 == 1){
     html_to_insert +="</div>";
    }                
     
  }
  html_to_insert +="</div>";
  document.getElementById("main_tag").innerHTML = html_to_insert;

}