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
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/atos.jpeg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      page: "atos.html",
      page_en: "atos.html"
    };
    restaurants.push(Atos);

    var ChezNik = {
      name: "Chez Nik", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/cheznik.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      page: "nik.html",
      page_en: "nik.html"
    };
    restaurants.push(ChezNik);

    var Frans = {
      name: "Frans", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Vracar", //opstina
      adr: "Adresa",
      img: "img/logo/frans.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      page: "frans.html",
      page_en: "frans.html"
    };
    restaurants.push(Frans);

    var SoIBiber = {
      name: "So i biber", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/soibiber.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      page: "biber.html",
      page_en: "biber.html"
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
    var avg_i = 0;
    if (restaurants[i].count > 0)
      avg_i = restaurants[i].sum / restaurants[i].count;
    for (var j = i + 1; j < restaurants.length; j++) {
      var avg_j = 0;
      if (restaurants[j].count > 0)
        avg_j = restaurants[j].sum / restaurants[j].count;
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
  var top1_page = restaurants[0].page;

  var top2_img = restaurants[1].img;
  var top2_name = restaurants[1].name;
  var top2_desc = restaurants[1].desc;
  var top2_page = restaurants[1].page;

  var top3_img = restaurants[2].img;
  var top3_name = restaurants[2].name;
  var top3_desc = restaurants[2].desc;
  var top3_page = restaurants[2].page;

  document.getElementById("top1_image").src = top1_img;
  document.getElementById("top1_link").innerHTML = top1_name;
  document.getElementById("top1_link").href = top1_page;
  document.getElementById("top1_desc").innerHTML = top1_desc;

  document.getElementById("top2_image").src = top2_img;
  document.getElementById("top2_link").innerHTML = top2_name;
  document.getElementById("top2_link").href = top2_page;
  document.getElementById("top2_desc").innerHTML = top2_desc;

  document.getElementById("top3_image").src = top3_img;
  document.getElementById("top3_link").innerHTML = top3_name;
  document.getElementById("top3_link").href = top3_page;
  document.getElementById("top3_desc").innerHTML = top3_desc;
}

function addRating(id, rating)
{
  var restaurants = JSON.parse(localStorage.getItem("restaurants"));

  restaurants[id]['sum'] += rating;
  restaurants[id]['count'] += 1;

  localStorage.setItem("restaurants", JSON.stringify(restaurants));
}

function getStarRating(id) {
  return "<fieldset class=\"rating\"> \
  <input type=\"radio\" id=\"star5_" + id + "\" name=\"rating\" value=\"5\" onclick=\"addRating(" + id + ",5)\" /><label class = \"full\" for=\"star5_" + id + "\" title=\"Awesome - 5 stars\"></label> \
  <input type=\"radio\" id=\"star4_" + id + "\" name=\"rating\" value=\"4\" onclick=\"addRating(" + id + ",4)\" /><label class = \"full\" for=\"star4_" + id + "\" title=\"Pretty good - 4 stars\"></label> \
  <input type=\"radio\" id=\"star3_" + id + "\" name=\"rating\" value=\"3\" onclick=\"addRating(" + id + ",3)\" /><label class = \"full\" for=\"star3_" + id + "\" title=\"Meh - 3 stars\"></label> \
  <input type=\"radio\" id=\"star2_" + id + "\" name=\"rating\" value=\"2\" onclick=\"addRating(" + id + ",2)\" /><label class = \"full\" for=\"star2_" + id + "\" title=\"Kinda bad - 2 stars\"></label> \
  <input type=\"radio\" id=\"star1_" + id + "\" name=\"rating\" value=\"1\" onclick=\"addRating(" + id + ",1)\" /><label class = \"full\" for=\"star1_" + id + "\" title=\"Sucks big time - 1 star\"></label> \
</fieldset>";
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
                      "<h3 class = \"text-left\"><a href=\"" + restaurants[i].page + "\">" +restaurants[i].name + "</a></h3><br/>" +
                      "<p class = \"text-left\">" + restaurants[i].desc + "</p><br>" + getStarRating(i) +
                      "</div>";
    if(i % 2 == 1){
     html_to_insert +="</div>";
    }                
     
  }
  html_to_insert +="</div>";
  document.getElementById("main_tag").innerHTML = html_to_insert;

}